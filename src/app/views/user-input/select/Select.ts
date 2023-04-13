import { defineComponent, onMounted, ref } from 'vue';
import { NeonCard, NeonCardBody, NeonLink, NeonSelect } from '@/neon';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';
import Editor from '@/app/components/editor/Editor.vue';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names,vue/no-reserved-component-names
  name: 'Select',
  components: {
    NeonCard,
    NeonCardBody,
    NeonLink,
    NeonSelect,
    ComponentDocumentation,
    Editor,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('Styled HTML select equivalent');

    const selectSmall = ref('');
    const selectMedium = ref('');
    const selectLarge = ref('');
    const selectMulti = ref([]);
    const selectGrouped = ref('');
    const selectGroupedMulti = ref([]);
    const selectBrand = ref('');
    const selectInfo = ref('');
    const selectSuccess = ref('');
    const selectWarning = ref('');
    const selectError = ref('');

    const model = ref([
      {
        key: 'k1',
        label: 'Item 1',
        separatorBefore: true,
      },
      {
        key: 'k2',
        label: 'Item 2',
        separatorBefore: true,
      },
      {
        key: 'k3',
        label: 'Item 3',
        separatorBefore: true,
      },
      {
        key: 'k4',
        label: 'Item 4',
        separatorBefore: true,
      },
      {
        key: 'k5',
        label: 'Item 5',
        separatorBefore: true,
      },
      {
        key: 'k6',
        label: 'Item 6',
        disabled: true,
        separatorBefore: true,
      },
    ]);

    const modelWithIcons = ref([
      {
        key: 'k1',
        label: 'Item 1',
        icon: 'contrast',
        separatorBefore: true,
      },
      {
        key: 'k2',
        label: 'Item 2',
        icon: 'user',
        separatorBefore: true,
      },
      {
        key: 'k3',
        label: 'Item 3',
        icon: 'plus',
        separatorBefore: true,
      },
      {
        key: 'k4',
        label: 'Item 4',
        icon: 'download',
        separatorBefore: true,
      },
      {
        key: 'k5',
        label: 'Item 5',
        icon: 'hammer',
        separatorBefore: true,
      },
      {
        key: 'k6',
        label: 'Item 6',
        icon: 'images',
        disabled: true,
        separatorBefore: true,
      },
    ]);

    const groupedModel = ref([
      {
        group: 'Africa',
        options: [
          {
            key: 'AGO',
            label: 'Angola',
          },
          {
            key: 'BFA',
            label: 'Burkina Faso',
          },
          {
            key: 'KEN',
            label: 'Kenya',
          },
          {
            key: 'MLI',
            label: 'Mali',
          },
        ],
      },
      {
        group: 'America',
        options: [
          {
            key: 'CAN',
            label: 'Canada',
          },
          {
            key: 'PAN',
            label: 'Panama',
          },
          {
            key: 'USA',
            label: 'United States',
          },
          {
            key: 'VEN',
            label: 'Venezuela',
          },
        ],
      },
      {
        group: 'Asia',
        options: [
          {
            key: 'CHN',
            label: 'China',
          },
          {
            key: 'PHL',
            label: 'Philippines',
          },
          {
            key: 'SNG',
            label: 'Singapore',
          },
          {
            key: 'THA',
            label: 'Thailand',
          },
        ],
      },
      {
        group: 'Europe',
        options: [
          {
            key: 'BEL',
            label: 'Belgium',
          },
          {
            key: 'FRA',
            label: 'France',
          },
          {
            key: 'DEU',
            label: 'Germany',
          },
          {
            key: 'NOR',
            label: 'Norway',
          },
        ],
      },
      {
        group: 'Oceania',
        options: [
          {
            key: 'AUS',
            label: 'Australia',
          },
          {
            key: 'FJI',
            label: 'Fiji',
          },
          {
            key: 'NZL',
            label: 'New Zealand',
          },
          {
            key: 'TKL',
            label: 'Tokelau',
          },
        ],
      },
    ]);

    const sizesTemplate = `<neon-select v-model="selectSmall" :options="model" placeholder="Select item" size="s" />
<neon-select v-model="selectMedium" :options="model" placeholder="Select item" size="m" />
<neon-select v-model="selectLarge" :options="model" placeholder="Select item" size="l" />`;

    const colorsTemplate = `<neon-select v-model="selectBrand" :options="modelWithIcons" color="brand" placeholder="Select item(s)" />
<neon-select v-model="selectInfo" :options="modelWithIcons" color="info" placeholder="Select item(s)" />
<neon-select v-model="selectSuccess" :options="modelWithIcons" color="success" placeholder="Select item(s)" />
<neon-select v-model="selectWarning" :options="modelWithIcons" color="warn" placeholder="Select item(s)" />
<neon-select v-model="selectError" :options="modelWithIcons" color="error" placeholder="Select item(s)" />`;

    const multiSelectTemplate = `<neon-select v-model="selectMulti" :multiple="true" :options="modelWithIcons" placeholder="Select item(s)" />`;
    const groupedTemplate = `<neon-select v-model="selectGrouped" :grouped-options="groupedModel" placeholder="Select item" />
<neon-select v-model="selectGroupedMulti" :grouped-options="groupedModel" :multiple="true" placeholder="Select item(s)" />`;

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonSelect')));

    return {
      menuModel,
      headline,
      selectSmall,
      selectMedium,
      selectLarge,
      selectMulti,
      selectGrouped,
      selectGroupedMulti,
      selectBrand,
      selectInfo,
      selectSuccess,
      selectWarning,
      selectError,
      model,
      modelWithIcons,
      groupedModel,
      sizesTemplate,
      colorsTemplate,
      multiSelectTemplate,
      groupedTemplate,
    };
  },
});
