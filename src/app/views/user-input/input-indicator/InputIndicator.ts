import { defineComponent, onMounted, ref } from 'vue';
import { NeonCard, NeonCardBody, NeonCardHeader, NeonFieldGroup, NeonInput, NeonInputIndicator } from '@/neon';
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
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('Indicate read only information about an input');

    const field1 = ref('');
    const field2 = ref('');
    const field3 = ref('');

    const inputIndicatorExamples = `<neon-field-group>
  <neon-input v-model="field1" placeholder="Rate" size="s" type="text" />
  <neon-input-indicator label="%" size="s" />
</neon-field-group>
<neon-field-group>
  <neon-input-indicator aria-label="Username" for="userField" icon="user" />
  <neon-input id="userField" v-model="field2" placeholder="Username" type="text" />
</neon-field-group>
<neon-field-group>
  <neon-input-indicator icon="mail" size="l" />
  <neon-input v-model="field3" placeholder="Username" size="l" type="text" />
  <neon-input-indicator label="@aol.com" size="l" />
</neon-field-group>`;

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonInputIndicator')));

    return {
      menuModel,
      headline,
      inputIndicatorExamples,
      field1,
      field2,
      field3,
    };
  },
});
