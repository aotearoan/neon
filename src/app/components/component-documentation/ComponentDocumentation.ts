import { Component, Prop, Vue } from 'vue-property-decorator';
import Examples from '../examples/Examples.vue';
import ApiDocs from '../api-docs/ApiDocs.vue';
import { ExampleModel } from '../example/ExampleModel';
import { NeonCard, NeonCardBody, NeonCardHeader, NeonTab, NeonTabs } from '../../../components';
import { DocumentationModel } from '../ApiModel';
import { MenuModel } from '../../Menu';

@Component({
  components: {
    ApiDocs,
    Examples,
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
    NeonTab,
    NeonTabs,
  },
})
export default class ComponentDocumentation extends Vue {
  private apiModel: DocumentationModel | null = null;

  private tabs = [
    {
      key: 'description',
      label: 'Description',
    },
    {
      key: 'api',
      label: 'API',
    },
    {
      key: 'examples',
      label: 'Examples',
    },
  ];

  private selected = this.tabs[0].key;

  @Prop({ required: true })
  public model!: MenuModel;

  @Prop({ required: true })
  public headline?: string;

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
