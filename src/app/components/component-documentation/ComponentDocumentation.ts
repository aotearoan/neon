import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import Examples from '../examples/Examples.vue';
import ApiDocs from '../api-docs/ApiDocs.vue';
import { ExampleModel } from '../example/ExampleModel';
import { NeonTab, NeonTabModel, NeonTabs } from '../../../components';
import { DocumentationModel } from '../ApiModel';
import { MenuModel } from '../../Menu';
import { Route } from 'vue-router';

interface SubDocumentationModel {
  api: DocumentationModel;
  name: string;
}

@Component({
  components: {
    ApiDocs,
    Examples,
    NeonTab,
    NeonTabs,
  },
})
export default class ComponentDocumentation extends Vue {
  private static readonly defaultTabs: NeonTabModel[] = [
    {
      key: 'examples',
      label: 'Examples',
    },
    {
      key: 'description',
      label: 'Description',
    },
    {
      key: 'api',
      label: 'API',
    },
  ];

  private apiModel: DocumentationModel | null = null;
  private subApiModels: SubDocumentationModel[] = [];
  private tabs: NeonTabModel[] = [];

  private selected: string | null = null;

  @Prop({ required: true })
  public model!: MenuModel;

  @Prop({ required: true })
  public headline?: string;

  @Prop()
  public examples?: ExampleModel[];

  @Watch('$route')
  private onRouteChange(to: Route) {
    if (to.hash) {
      this.selected = to.hash.substring(1);
    } else {
      this.selected = this.tabs[0].key;
    }
  }

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
    const url = `${process.env.VUE_APP_RESOURCE_URL}docs/${this.path}/${this.componentName}.json`;
    fetch(url).then((response) => {
      response.json().then(
        (api) => {
          this.apiModel = api;
        },
        () => console.info(`no component JSON at ${url}`),
      );
    });

    (this.model.subComponents || []).forEach((subComp) => {
      fetch(`${process.env.VUE_APP_RESOURCE_URL}docs/${this.path}/${subComp.path}/${subComp.name}.json`).then(
        (response) => {
          response.json().then((api) => {
            this.subApiModels.push({ api, name: subComp.name });
          });
        },
      );
    });

    const anchors = (this.model.anchors || []).map((anchor) => anchor.toLowerCase());
    this.tabs = ComponentDocumentation.defaultTabs.filter((item) => anchors.indexOf(item.key) >= 0);
    this.selected = (this.$route.hash && this.$route.hash.substring(1)) || this.tabs[0].key;
  }

  private onChangeTab(key: string) {
    const path = `#${key}`;
    if (this.$route.hash !== path) {
      this.$router.replace({ path });
    }
  }

  private get examplesIndex() {
    return this.tabs.findIndex((tab) => tab.key === 'examples');
  }

  private get descriptionIndex() {
    return this.tabs.findIndex((tab) => tab.key === 'description');
  }

  private get apiIndex() {
    return this.tabs.findIndex((tab) => tab.key === 'api');
  }
}
