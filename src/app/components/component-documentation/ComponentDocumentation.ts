import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import Examples from '../examples/Examples.vue';
import ApiDocs from '../api-docs/ApiDocs.vue';
import { ExampleModel } from '../example/ExampleModel';
import { NeonTab, NeonTabs } from '../../../components';
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
  private apiModel: DocumentationModel | null = null;
  private subApiModels: SubDocumentationModel[] = [];

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

  @Prop()
  public examples?: ExampleModel[];

  @Watch('$route', { immediate: true })
  private onRouteChange(to: Route) {
    if (to.hash) {
      this.selected = to.hash.substring(1);
    } else {
      this.selected = this.tabs[0].key;
      this.onChangeTab(this.selected);
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
    fetch(`${process.env.VUE_APP_RESOURCE_URL}docs/${this.path}/${this.componentName}.json`).then((response) => {
      response.json().then((api) => {
        this.apiModel = api;
      });
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

    if (!this.examples) {
      this.tabs = this.tabs.filter((t) => t.key !== 'examples');
    }
  }

  private onChangeTab(key: string) {
    this.$router.replace({ path: `#${key}` });
  }
}
