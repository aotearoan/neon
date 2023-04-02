import {
  NeonCard,
  NeonCardBody,
  NeonCardHeader,
  NeonFieldGroup,
  NeonInput,
  NeonInputIndicator,
  NeonSelect,
} from '@/neon';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
  name: 'FieldGroup',
  components: {
    ComponentDocumentation,
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
    NeonInput,
    NeonInputIndicator,
    NeonFieldGroup,
    NeonSelect,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('Compose richer input components');

    const data = ref({
      indexFilter: '',
      currency: 'NZD',
      currencies: [
        {
          key: 'CAD',
          label: 'CAD',
          separatorBefore: true,
        },
        {
          key: 'EUR',
          label: 'EUR',
          separatorBefore: true,
        },
        {
          key: 'NZD',
          label: 'NZD',
          separatorBefore: true,
        },
        {
          key: 'PLN',
          label: 'PLN',
          separatorBefore: true,
        },
        {
          key: 'USD',
          label: 'USD',
          separatorBefore: true,
        },
      ],
    });

    const inputIndicatorExamples = `<div class="neon-vertically-spaced">
  <neon-field-group>
    <neon-input-indicator size="s" label="Salary" />
    <neon-input size="s" type="text" color="primary" v-model="indexFilter" placeholder="Enter amount" />
    <neon-select size="s" color="primary" v-model="currency" :options="currencies" placeholder="Currency" />
  </neon-field-group>
  <neon-field-group>
    <neon-input type="text" color="primary" v-model="indexFilter" placeholder="Enter rate" />
    <neon-input-indicator label="%" />
  </neon-field-group>
  <neon-field-group>
    <neon-input-indicator size="l" label="$" />
    <neon-input size="l" type="text" v-model="indexFilter" placeholder="Enter amount" />
    <neon-button size="l" label="Submit" />
  </neon-field-group>
</div>`;

    const examples = ref([
      {
        title: 'Field Group Examples',
        template: inputIndicatorExamples,
        data,
      },
    ]);

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonFieldGroup')));

    return {
      menuModel,
      headline,
      data,
      examples,
    };
  },
});
