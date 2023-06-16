import { computed, defineComponent, onMounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import ApiDocs from '../api-docs/ApiDocs.vue';
import type { NeonTabModel } from '@/neon';
import { NeonTab, NeonTabs } from '@/neon';
import type { DocumentationModel } from '../ApiModel';
import type { MenuModel } from '@/app/Menu';

interface SubDocumentationModel {
  api: DocumentationModel;
  name: string;
}

export default defineComponent({
  name: 'ComponentDocumentation',
  components: {
    ApiDocs,
    NeonTab,
    NeonTabs,
  },
  props: {
    model: { type: Object as () => MenuModel, required: true },
    headline: { type: String, required: true },
    showApiDocs: { type: Boolean, default: true },
  },
  setup(props) {
    const router = useRouter();
    const route = useRoute();

    const defaultTabs = ref<Array<NeonTabModel>>([
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
    ]);

    const apiModel = ref<DocumentationModel | null>(null);
    const subApiModels = ref<Array<SubDocumentationModel>>([]);
    const tabs = ref<Array<NeonTabModel>>([]);
    const selected = ref<string | null>(null);

    const path = computed(() => props.model.path);
    const componentName = computed(() => props.model.component);
    const componentTitle = computed(() => props.model.name || props.model.page);
    const examplesIndex = computed(() => tabs.value.findIndex((tab) => tab.key === 'examples'));
    const descriptionIndex = computed(() => tabs.value.findIndex((tab) => tab.key === 'description'));
    const apiIndex = computed(() => tabs.value.findIndex((tab) => tab.key === 'api'));

    onMounted(() => {
      if (props.showApiDocs) {
        const url = `${import.meta.env.VITE_RESOURCE_URL}docs/${path.value}/${componentName.value}.json`;
        fetch(url).then((response) => {
          response.json().then(
            (api) => {
              apiModel.value = api;
            },
            () => console.info(`no component JSON at ${url}`),
          );
        });

        (props.model.subComponents || []).forEach((subComp) => {
          fetch(`${import.meta.env.VITE_RESOURCE_URL}docs/${path.value}/${subComp.path}/${subComp.name}.json`).then(
            (response) => {
              response.json().then((api) => {
                subApiModels.value.push({ api, name: subComp.name });
              });
            },
          );
        });
      }

      const anchors = (props.model.anchors || []).map((anchor) => anchor.toLowerCase());
      tabs.value = defaultTabs.value.filter((item) => anchors.indexOf(item.key) >= 0);
      selected.value = route.hash?.substring(1) || tabs.value[0].key;
    });

    watch(
      () => route.hash,
      (to) => {
        if (to) {
          selected.value = to.substring(1);
        } else {
          selected.value = tabs.value[0].key;
        }
      },
    );

    watch(
      () => selected.value,
      async (key) => {
        const hash = `#${key}`;
        if (route.hash !== hash) {
          await router.replace({ hash });
        }
      },
    );

    return {
      path,
      componentName,
      componentTitle,
      examplesIndex,
      descriptionIndex,
      apiIndex,
      apiModel,
      subApiModels,
      tabs,
      selected,
    };
  },
});
