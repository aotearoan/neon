import { defineComponent, onMounted, ref } from 'vue';
import { NeonCard, NeonCardBody, NeonLink, NeonSelect } from '@/neon';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names,vue/no-reserved-component-names
  name: 'Select',
  components: {
    NeonCard,
    NeonCardBody,
    NeonLink,
    NeonSelect,
    ComponentDocumentation,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('Styled HTML select equivalent');

    const data = ref({
      selectSmall: '',
      selectMedium: '',
      selectLarge: '',
      selectMulti: [],
      selectGrouped: '',
      selectGroupedMulti: [],
      selectBrand: '',
      selectInfo: '',
      selectSuccess: '',
      selectWarning: '',
      selectError: '',
      model: [
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
      ],
      modelWithIcons: [
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
      ],
      groupedModel: [
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
      ],
    });

    const examples = ref([
      {
        title: 'Select sizes',
        template: `
          <div class="neon-vertically-spaced">
          <neon-select size="s" placeholder="Select item" :options="model" v-model="selectSmall" />
          <neon-select size="m" placeholder="Select item" :options="model" v-model="selectMedium" />
          <neon-select size="l" placeholder="Select item" :options="model" v-model="selectLarge" />
          </div>`,
        data: data.value,
      },
      {
        title: 'Selects with colors and icons',
        template: `
          <div class="neon-vertically-spaced">
          <neon-select color="brand" placeholder="Select item(s)" :options="modelWithIcons" v-model="selectBrand" />
          <neon-select color="info" placeholder="Select item(s)" :options="modelWithIcons" v-model="selectInfo" />
          <neon-select color="success" placeholder="Select item(s)" :options="modelWithIcons" v-model="selectSuccess" />
          <neon-select color="warn" placeholder="Select item(s)" :options="modelWithIcons" v-model="selectWarning" />
          <neon-select color="error" placeholder="Select item(s)" :options="modelWithIcons" v-model="selectError" />
          </div>`,
        data: data.value,
      },
      {
        title: 'Multiple selection',
        template: `
          <div class="neon-vertically-spaced">
          <neon-select :multiple="true" placeholder="Select item(s)" :options="modelWithIcons" v-model="selectMulti" />
          </div>`,
        data: data.value,
      },
      {
        title: 'Grouped options',
        template: `
          <div class="neon-vertically-spaced">
          <neon-select placeholder="Select item" :grouped-options="groupedModel" v-model="selectGrouped" />
          <neon-select :multiple="true" placeholder="Select item(s)" :grouped-options="groupedModel"
                       v-model="selectGroupedMulti" />
          </div>`,
        data: data.value,
      },
    ]);

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonSelect')));

    return {
      menuModel,
      headline,
      data,
      examples,
    };
  },
});
