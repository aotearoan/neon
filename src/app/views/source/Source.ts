import { computed, defineComponent, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { NeonButton, NeonCard, NeonCardBody, NeonCardHeader, NeonInline, NeonLabel, NeonStack } from '@/neon';
import Editor from '@/app/components/editor/Editor.vue';
import { SupportingClassesDocs } from '@/app/SupportingClassesDocs';
import type { BlockTag, DeclarationReflection, SomeType } from 'typedoc';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names,vue/no-reserved-component-names
  name: 'Source',
  components: {
    NeonButton,
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
    NeonInline,
    NeonLabel,
    NeonStack,
    Editor,
  },
  setup() {
    const route = useRoute();
    const classDocs = ref<DeclarationReflection | null>(null);
    const classType = ref<string | null>(null);
    const isEnum = ref<boolean>(false);
    const isModel = ref<boolean>(false);
    const isUtility = ref<boolean>(false);
    const ghLink = ref<string | null>(null);

    const isClassEnum = (doc: DeclarationReflection | null) =>
      doc?.groups?.find((group) => group.title === 'Enumerations');

    watch(
      () => route.path,
      (to) => {
        const [_blank, ct, ...rest] = to.split('/');

        switch (ct) {
          case 'model':
            classType.value = 'Model';
            isUtility.value = false;
            isModel.value = true;
            isEnum.value = false;
            break;
          case 'utils':
            classType.value = 'Utility';
            isUtility.value = true;
            isModel.value = false;
            isEnum.value = false;
            break;
        }

        const className = rest.pop() || null;

        if (classType.value && className) {
          classDocs.value = SupportingClassesDocs.getClassDocs(ct, className);

          if (isModel.value && isClassEnum(classDocs.value)) {
            classType.value = 'Enum';
            isEnum.value = true;
            isModel.value = false;
          }

          ghLink.value = `https://github.com/aotearoan/neon/tree/main/src${to}.ts`;
        }
      },
      { immediate: true },
    );

    const typeAsArray = (modelValue: SomeType) => {
      return `Array&lt;${modelType(modelValue.elementType)}&gt;`;
    };

    const typeAsUnion = (modelValueTypes: SomeType[]) => {
      return modelValueTypes.map(modelType).join(' | ');
    };

    const typeAsLink = (modelValue: SomeType) => {
      if (SupportingClassesDocs.modelList().includes(modelValue.name)) {
        const url = `/model/${modelValue.name}`;
        return `<a href="${url}">${modelValue.name}</a>`;
      }

      return modelValue.name;
    };

    const modelType = (modelValue?: SomeType): string | null => {
      if (modelValue) {
        if (modelValue.type === 'reflection') {
          if (modelValue.declaration.signatures) {
            const signature = modelValue.declaration.signatures[0];
            return `() => ${signature.type?.name}`;
          } else if (modelValue.declaration.children) {
            const props = modelValue.declaration.children
              .map((child) => `${child.name}: ${modelType(child.type)}`)
              .join(', ');
            return `{ ${props} }`;
          }
        } else if (modelValue.type === 'reference') {
          if (modelValue.typeArguments) {
            return `${modelValue.name}&lt;${typeAsUnion(modelValue.typeArguments)}&gt;`;
          }
          return typeAsLink(modelValue);
        } else if (modelValue.type === 'union') {
          return typeAsUnion(modelValue.types);
        } else if (modelValue.type === 'array') {
          return typeAsArray(modelValue);
        } else if (modelValue.type === 'literal') {
          return `${modelValue.value}`;
        }

        return modelValue.name;
      }

      return null;
    };

    const modelSummaries = (modelValue: DeclarationReflection) => {
      if (modelValue.comment?.summary) {
        return modelValue.comment?.summary;
      } else if (modelValue.type?.declaration?.signatures?.[0]?.comment.summary) {
        return modelValue.type?.declaration.signatures[0].comment.summary;
      }

      return [];
    };

    const parameters = (parameters: DeclarationReflection[]) => {
      return parameters
        .map((parameter) => {
          if (parameter.defaultValue) {
            return `${parameter.name} = ${parameter.defaultValue}`;
          }

          return `${parameter.name}${parameter.flags.isOptional ? '?' : ''}: ${modelType(parameter.type)}`;
        })
        .join(', ');
    };

    const enumSignature = (enumValue: DeclarationReflection) => {
      return `${enumValue.name} = '${enumValue.type?.value}'`;
    };

    const modelSignature = (modelValue: DeclarationReflection) => {
      return `${modelValue.name}${modelValue.flags.isOptional ? '?' : ''}: ${modelType(modelValue.type)};`;
    };

    const utilSignature = (member: DeclarationReflection) => {
      if (member.signatures?.[0]) {
        // method signature
        const params = member.signatures[0].parameters ? parameters(member.signatures[0].parameters) : '';

        const returnType =
          member.signatures[0].type && member.name !== 'constructor' ? `: ${modelType(member.signatures[0].type)}` : '';

        const sig = `${member.name}(${params})${returnType};`;
        // check rendered length without HTML tags
        const sigLength = sig.replace(/<.+?>/, '').length;

        if (sigLength > 70) {
          const splitParams = params
            .split(', ')
            .map((param) => `&nbsp;&nbsp;${param}`)
            .join(',<br />');
          return `${member.name}(<br />${splitParams},<br />)${returnType};`;
        }

        return sig;
      } else if (member.type) {
        // class field
        if (member.defaultValue && member.defaultValue !== '...') {
          return `${member.name} = ${member.defaultValue};`;
        }

        return `${member.name}${member.flags.isOptional ? '?' : ''}: ${modelType(member.type)};`;
      }
    };

    const returnTypeSummary = (member: DeclarationReflection) => {
      return member.signatures?.[0]?.comment?.blockTags
        ?.filter((blockTag: BlockTag) => blockTag.tag === '@returns')
        ?.flatMap((blockTag: BlockTag) => blockTag.content);
    };

    const displayMember = (member: DeclarationReflection) => {
      return member.flags?.isPublic === true && !(member.name === 'constructor' && !member.signatures?.[0]?.parameters);
    };

    const memberComments = (member: DeclarationReflection) => {
      return member.signatures?.[0].comment?.summary || member.comment?.summary || [];
    };

    const memberParameters = (member: DeclarationReflection) => {
      return member.signatures?.[0]?.parameters;
    };

    const apiType = computed<string>(() => {
      if (classDocs.value?.children?.[0]?.variant === 'declaration' && !classDocs.value?.children?.[0]?.children) {
        return 'functions';
      }

      return 'class';
    });

    const classMembers = computed<Array<DeclarationReflection>>(() => {
      if (classDocs.value?.children?.[0]?.children) {
        return classDocs.value?.children?.[0]?.children;
      } else if (classDocs.value?.children?.[0]?.variant === 'declaration') {
        return classDocs.value?.children;
      }

      return [];
    });

    return {
      classMembers,
      classType,
      classDocs,
      isEnum,
      isModel,
      isUtility,
      ghLink,
      apiType,
      modelSummaries,
      enumSignature,
      modelSignature,
      utilSignature,
      returnTypeSummary,
      displayMember,
      memberComments,
      memberParameters,
    };
  },
});
