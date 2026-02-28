import { defineComponent, onMounted, ref } from 'vue';
import {
  NeonButton,
  NeonCard,
  NeonCardBody,
  NeonCardHeader,
  NeonField,
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
    NeonField,
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

    const inputIndicatorInternalExamples = `<neon-field-group>
  <neon-input-indicator label="Salary" size="s"/>
  <neon-input v-model="indexFilter" color="primary" placeholder="Enter amount" size="s" type="text"/>
  <neon-input-indicator label="USD" size="s"/>
</neon-field-group>
<neon-field-group>
  <neon-input v-model="indexFilter" color="primary" placeholder="Enter rate" type="text"/>
  <neon-input-indicator label="%"/>
</neon-field-group>
<neon-field for="largeField" label="Large field">
  <neon-field-group>
    <neon-input-indicator for="largeField" label="USD" size="l"/>
    <neon-input id="largeField" v-model="indexFilter" placeholder="Enter amount" size="l" type="text"/>
  </neon-field-group>
</neon-field>
<neon-field for="largeDisabledField" label="Disabled field">
  <neon-field-group :disabled="true">
    <neon-input-indicator for="largeDisabledField" label="USD" size="l" :disabled="true"/>
    <neon-input
      id="largeDisabledField"
      v-model="indexFilter"
      placeholder="Enter amount"
      size="l"
      type="text"
      :disabled="true"
    />
  </neon-field-group>
</neon-field>`;

    const inputIndicatorExternalExamples = `<neon-field-group indicator-style="external">
  <neon-input-indicator label="Salary" size="s"/>
  <neon-input v-model="indexFilter" color="primary" placeholder="Enter amount" size="s" type="text"/>
  <neon-select v-model="currency" :options="currencies" color="primary" placeholder="Currency" size="s"/>
</neon-field-group>
<neon-field-group indicator-style="external">
  <neon-input v-model="indexFilter" color="primary" placeholder="Enter rate" type="text"/>
  <neon-input-indicator label="%"/>
</neon-field-group>
<neon-field-group indicator-style="external">
  <neon-input-indicator label="$" size="l"/>
  <neon-input v-model="indexFilter" placeholder="Enter amount" size="l" type="text"/>
  <neon-button color="low-contrast" label="Submit" size="l"/>
</neon-field-group>`;

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonFieldGroup')));

    return {
      menuModel,
      headline,
      inputIndicatorInternalExamples,
      inputIndicatorExternalExamples,
      indexFilter,
      currency,
      currencies,
    };
  },
});
