import { defineComponent, onMounted, ref } from 'vue';
import {
  NeonCard,
  NeonCardBody,
  NeonCardHeader,
  NeonFieldGroup,
  NeonInput,
  NeonInputIndicator,
  NeonStack,
} from '@/neon';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';
import Editor from '@/app/components/editor/Editor.vue';

export default defineComponent({
  name: 'InputIndicator',
  components: {
    ComponentDocumentation,
    Editor,
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
    NeonFieldGroup,
    NeonInput,
    NeonInputIndicator,
    NeonStack,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('Indicate read only information about an input');

    const field1 = ref('');
    const field2 = ref('');
    const field3 = ref('');

    const internalInputIndicatorExamples = `<neon-field-group>
  <neon-input v-model="field1" placeholder="Rate" size="s" type="text" />
  <neon-input-indicator label="%" size="s" />
</neon-field-group>
<neon-field-group>
  <neon-input-indicator aria-label="Username" for="userField" icon="single-neutral" />
  <neon-input id="userField" v-model="field2" placeholder="Username" type="text" />
</neon-field-group>
<neon-field-group>
  <neon-input-indicator icon="envelope" size="l" />
  <neon-input v-model="field3" placeholder="Username" size="l" type="text" />
  <neon-input-indicator label="@aol.com" size="l" />
</neon-field-group>`;

    const externalInputIndicatorExamples = `<neon-field-group indicator-style="external">
  <neon-input v-model="field1" placeholder="Rate" size="s" type="text"/>
  <neon-input-indicator label="%" size="s"/>
</neon-field-group>
<neon-field-group indicator-style="external">
  <neon-input-indicator aria-label="Username" for="userField" icon="single-neutral"/>
  <neon-input id="userField" v-model="field2" placeholder="Username" type="text"/>
</neon-field-group>
<neon-field-group indicator-style="external">
  <neon-input-indicator icon="envelope" size="l"/>
  <neon-input v-model="field3" placeholder="Username" size="l" type="text"/>
  <neon-input-indicator label="@aol.com" size="l"/>
</neon-field-group>`;

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonInputIndicator')));

    return {
      menuModel,
      headline,
      internalInputIndicatorExamples,
      externalInputIndicatorExamples,
      field1,
      field2,
      field3,
    };
  },
});
