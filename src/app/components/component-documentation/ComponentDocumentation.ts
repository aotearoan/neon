import { Component, Prop, Vue } from 'vue-property-decorator';
import Example from '../example/Example.vue';
import ApiDocs from '../api-docs/ApiDocs.vue';
import ApiDescription from '../api-description/ApiDescription.vue';
import { ExampleModel } from '../example/ExampleModel';
import { NeonCard, NeonCardBody, NeonCardHeader } from '../../../components';
import { DocumentationModel } from '../ApiModel';
import { MenuModel } from '../../Menu';

@Component({
  components: {
    ApiDescription,
    ApiDocs,
    Example,
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
  },
})
export default class ComponentDocumentation extends Vue {
  private apiModel: DocumentationModel | null = null;

  @Prop({ required: true })
  public model!: MenuModel;

  @Prop({ default: [] })
  public examples!: ExampleModel[];

  get path() {
    return this.model.path;
  }

  get componentName() {
    return this.model.component;
  }

  get componentTitle() {
    return this.model.name || this.model.page;
  }

  public mounted() {
    fetch(`${process.env.VUE_APP_RESOURCE_URL}docs/${this.path}/${this.componentName}.json`).then((response) => {
      response.json().then((api) => {
        this.apiModel = api;
      });
    });
  }
}
