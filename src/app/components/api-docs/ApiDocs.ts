import { computed, defineComponent, onMounted, ref } from 'vue';
import {
  NeonCard,
  NeonCardBody,
  NeonCardHeader,
  NeonCardList,
  type NeonCardListModel,
  NeonLabel,
  NeonLink,
  NeonNote,
} from '@/neon';
import type { DocumentationModel, EventModel, PropertyModel, PropTypeModel } from '../ApiModel';
import { SupportingClassesDocs } from '@/app/SupportingClassesDocs';
import CssVariableCard from '@/app/components/css-variable-card/CssVariableCard.vue';
import { CssVariablesService } from '@/app/service/CssVariablesService';
import type { CssVariable } from '@/app/model/css';

export default defineComponent({
  name: 'ApiDocs',
  components: {
    CssVariableCard,
    NeonCard,
    NeonCardHeader,
    NeonCardBody,
    NeonCardList,
    NeonLabel,
    NeonLink,
    NeonNote,
  },
  props: {
    apiModel: { type: Object as () => DocumentationModel, required: true },
    componentName: { type: String, required: true },
  },
  setup(props) {
    const hasProps = computed(() => props.apiModel.props?.length > 0);
    const hasEvents = computed(() => props.apiModel.events?.length > 0);
    const hasSlots = computed(() => (props.apiModel.slots || []).length > 0);
    const hasDocs = computed(() => hasProps.value || hasEvents || hasSlots);

    const isArray = (prop: PropertyModel) => prop.type?.name === 'Array';

    const typeName = (prop: PropertyModel) => {
      if (prop.tags?.type) {
        return prop.tags.type[0].description;
      } else if (prop.type) {
        const type: PropTypeModel = prop.type;

        if (isArray(prop) || prop.type.name === 'union') {
          return type.elements
            ?.map((e) => {
              if (e.name === 'Array' && e.elements) {
                const elementNames =
                  e.elements.length > 1 ? `(${e.elements.map((ae) => ae.name).join(' | ')}})` : e.elements[0].name;
                return `${elementNames}[]`;
              }

              return e.name;
            })
            .join(' | ');
        }

        return type.name?.replace('Array as () => ', '');
      }

      return undefined;
    };

    const lookupLink = (typeName?: string) => {
      if (typeName) {
        const matches = typeName.match(/.*((Arcual|Neon)[a-zA-Z]+)/);
        if (matches && matches[1]) {
          const neonType = matches[1];
          const model = SupportingClassesDocs.modelList().find((model) => model.indexOf(neonType) >= 0);

          return model ? `/model/${model}` : undefined;
        }
      }
      return undefined;
    };

    const typeLink = (prop: PropertyModel) => lookupLink(typeName(prop));

    const eventTypeName = (event: EventModel) => event.type?.names[0] || undefined;

    const eventTypeLink = (event: EventModel) => lookupLink(eventTypeName(event));

    const cssVariables = ref<Array<NeonCardListModel<CssVariable>> | undefined>(undefined);

    onMounted(async () => {
      const cssVars = await CssVariablesService.getComponentVariables(props.componentName);

      if (cssVars) {
        cssVariables.value = cssVars.map((cssVar) => ({ id: cssVar.name, model: cssVar }));
      }
    });

    return {
      hasProps,
      hasEvents,
      hasSlots,
      hasDocs,
      cssVariables,
      isArray,
      typeName,
      typeLink,
      lookupLink,
      eventTypeName,
      eventTypeLink,
    };
  },
});
