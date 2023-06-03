import { defineComponent, onMounted, ref } from 'vue';
import {
  NeonButton,
  NeonCard,
  NeonCardBody,
  NeonCardHeader,
  NeonFieldGroup,
  NeonInput,
  NeonInputIndicator,
  NeonSelect,
  NeonStack,
} from '@/neon';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';
import Editor from '@/app/components/editor/Editor.vue';

export default defineComponent({
  name: 'FieldGroup',
  components: {
    ComponentDocumentation,
    Editor,
    NeonButton,
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
    NeonInput,
    NeonInputIndicator,
    NeonFieldGroup,
    NeonSelect,
    NeonStack,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('Compose richer input components');

    const indexFilter = ref('');
    const currency = ref('NZD');
    const currencies = ref([
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
    ]);

    const inputIndicatorExamples = `<neon-field-group>
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
</neon-field-group>`;

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonFieldGroup')));

    return {
      menuModel,
      headline,
      inputIndicatorExamples,
      indexFilter,
      currency,
      currencies,
    };
  },
});
