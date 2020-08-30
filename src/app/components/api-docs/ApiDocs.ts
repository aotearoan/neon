import { Component, Prop, Vue } from 'vue-property-decorator';
import { NeonCard, NeonCardBody, NeonCardHeader, NeonNote } from '../../../components';
import { DocumentationModel, EventModel, PropertyModel, PropTypeModel } from '../ApiModel';
import { enumList, modelList } from '../../SupportingClasses';

@Component({
  components: {
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
    NeonNote,
  },
})
export default class ApiDocs extends Vue {
  private expanded = false;

  @Prop({ required: true })
  public apiModel!: DocumentationModel;

  @Prop({ required: true })
  public componentName!: string;

  private requiredProps() {
    return this.apiModel && this.apiModel.props.some((prop) => prop.required);
  }

  private isArray(prop: PropertyModel) {
    return prop.type && prop.type.name === 'Array';
  }

  private typeName(prop: PropertyModel) {
    if (prop && prop.type) {
      const type: PropTypeModel = prop.type;

      if (this.isArray(prop)) {
        return type.elements && type.elements[0].name;
      }

      return type.name && type.name;
    }

    return undefined;
  }

  private typeLink(prop: PropertyModel) {
    return this.lookupLink(this.typeName(prop));
  }

  private eventTypeName(event: EventModel) {
    return (event && event.type && event.type.names[0]) || undefined;
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
    return this.apiModel.props && this.apiModel.props.length > 0;
  }

  private get hasEvents() {
    return this.apiModel.events && this.apiModel.events.length > 0;
  }

  private get hasSlots() {
    return this.apiModel.slots && this.apiModel.slots.length > 0;
  }
}
