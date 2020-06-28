import { Component, Prop, Vue } from 'vue-property-decorator';
import { NeonCard, NeonCardBody, NeonCardHeader } from '../../../components';

export interface DocumentationModel {
  props: PropertyModel[];
  events: EventModel[];
  description?: string;
}

export interface PropertyModel {
  name?: string;
  required?: boolean;
  type?: PropTypeModel;
  defaultValue?: PropDefaultModel;
}

export interface EventModel {
  name?: string;
  description?: boolean;
  type?: EventTypeModel;
}

export interface PropTypeModel {
  name?: string;
}

export interface EventTypeModel {
  names?: string[];
}

export interface PropDefaultModel {
  value?: string;
}

@Component({
  components: {
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
  },
})
export default class ApiDocs extends Vue {
  private apiModel: DocumentationModel | null = null;

  @Prop({ required: true })
  public componentName!: string;

  @Prop({ required: true })
  public componentTitle!: string;

  @Prop({ required: true })
  public path!: string;

  public mounted() {
    fetch(`${process.env.VUE_APP_RESOURCE_URL}docs/${this.path}/${this.componentName}.json`).then((response) => {
      response.json().then((api) => {
        this.apiModel = api;
      });
    });
  }

  private requiredProps() {
    return this.apiModel && this.apiModel.props.some((prop) => prop.required);
  }
}
