import { defineComponent, onMounted, ref } from 'vue';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';
import { NeonCard, NeonCardBody, NeonField, NeonInput, NeonStack } from '@/neon';
import Editor from '@/app/components/editor/Editor.vue';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Field',
  components: {
    NeonCard,
    NeonCardBody,
    NeonField,
    NeonInput,
    NeonStack,
    ComponentDocumentation,
    Editor,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('A field wrapper providing aa label & field messages');

    const inputValue = ref<string>('Input value');

    const example = `<neon-field label="Default label" label-for="input1">
  <neon-input id="input1" v-model="inputValue" />
</neon-field>
<neon-field :optional="true" label="Optional label" label-for="input2">
  <neon-input id="input2" v-model="inputValue" />
</neon-field>
<neon-field :disabled="true" label="Disabled label" label-for="input3">
  <neon-input id="input3" v-model="inputValue" :disabled="true" />
</neon-field>`;

    const messagesExample = `<neon-field label="Default label" label-for="input1" message="Pig doner tri-tip tongue pork">
  <neon-input id="input1" v-model="inputValue" />
</neon-field>
<neon-field :optional="true"
            label="Optional label"
            label-for="input2"
            message="Pig doner tri-tip tongue pork"
            message-color="error"
>
  <neon-input id="input2" v-model="inputValue" />
</neon-field>`;

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonField')));

    return {
      example,
      messagesExample,
      menuModel,
      headline,
      inputValue,
    };
  },
});
