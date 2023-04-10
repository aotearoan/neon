import { defineComponent, onMounted, ref } from 'vue';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';
import { NeonCard, NeonCardBody, NeonFieldLabel, NeonInput } from '@/neon';
import Editor from '@/app/components/editor/Editor.vue';

export default defineComponent({
  name: 'SelectableCard',
  components: {
    NeonCard,
    NeonCardBody,
    NeonFieldLabel,
    NeonInput,
    ComponentDocumentation,
    Editor,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('An enhanced HTML label supporting optionality');

    const inputValue = ref<string>('Input value');

    const example = `<neon-field-label :optional="true" label="Test label" label-for="input1">
    <neon-input v-model="inputValue" id="input1" />
</neon-field-label>`;

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonFieldLabel')));

    return {
      example,
      menuModel,
      headline,
      inputValue,
    };
  },
});
