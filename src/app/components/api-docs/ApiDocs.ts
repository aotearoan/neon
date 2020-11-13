import { Component, Prop, Vue } from 'vue-property-decorator';
import { NeonNote } from '../../../components';
import { DocumentationModel, EventModel, PropertyModel, PropTypeModel } from '../ApiModel';
import { enumList, modelList } from '../../SupportingClasses';

@Component({
  components: {
    NeonNote,
  },
})
export default class ApiDocs extends Vue {
  @Prop({ required: true })
  public apiModel!: DocumentationModel;

  @Prop({ required: true })
  public componentName!: string;

  private isArray(prop: PropertyModel) {
    return prop.type?.name === 'Array';
  }

  private typeName(prop: PropertyModel) {
    if (prop.tags?.type) {
      return prop.tags.type[0].description;
    } else if (prop.type) {
      const type: PropTypeModel = prop.type;

      if (this.isArray(prop) || prop.type.name === 'union') {
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
  }

  private typeLink(prop: PropertyModel) {
    return this.lookupLink(this.typeName(prop));
  }

  private eventTypeName(event: EventModel) {
    return event.type?.names[0] || undefined;
  }

  private eventTypeLink(event: EventModel) {
    return this.lookupLink(this.eventTypeName(event));
  }

  private lookupLink(typeName?: string) {
    if (typeName) {
      const isEnum = enumList.indexOf(typeName) >= 0;
      const isModel = modelList.indexOf(typeName) >= 0;

      return isEnum ? `/enums/${typeName}` : isModel ? `/models/${typeName}` : undefined;
    }
    return undefined;
  }

  private get hasDocs() {
    return this.hasProps || this.hasEvents || this.hasSlots;
  }

  private get hasProps() {
    return this.apiModel.props?.length > 0;
  }

  private get hasEvents() {
    return this.apiModel.events?.length > 0;
  }

  private get hasSlots() {
    return (this.apiModel.slots || []).length > 0;
  }
}
