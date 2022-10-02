import { computed, defineComponent } from 'vue';
import { NeonCard, NeonCardBody, NeonCardHeader, NeonLabel, NeonLink, NeonNote } from '@/neon';
import type { DocumentationModel, EventModel, PropertyModel, PropTypeModel } from '../ApiModel';
import { enumList, modelList } from '@/app/SupportingClasses';

export default defineComponent({
  name: 'ApiDocs',
  components: {
    NeonCard,
    NeonCardHeader,
    NeonCardBody,
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

        return type.name;
      }

      return undefined;
    };

    const lookupLink = (typeName?: string) => {
      if (typeName) {
        const isEnum = enumList.indexOf(typeName) >= 0;
        const isModel = modelList.indexOf(typeName) >= 0;

        return isEnum ? `/enums/${typeName}` : isModel ? `/models/${typeName}` : undefined;
      }
      return undefined;
    };

    const typeLink = (prop: PropertyModel) => lookupLink(typeName(prop));

    const eventTypeName = (event: EventModel) => event.type?.names[0] || undefined;

    const eventTypeLink = (event: EventModel) => lookupLink(eventTypeName(event));

    return {
      hasProps,
      hasEvents,
      hasSlots,
      hasDocs,
      isArray,
      typeName,
      typeLink,
      lookupLink,
      eventTypeName,
      eventTypeLink,
    };
  },
});
