import { NeonActionMenu, NeonCard, NeonCardBody, NeonStepper } from '@/neon';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';
import Editor from '@/app/components/editor/Editor.vue';
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Stepper',
  components: {
    NeonCard,
    NeonCardBody,
    NeonActionMenu,
    NeonStepper,
    ComponentDocumentation,
    Editor,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('Assist navigation through user flows');

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonStepper')));

    const defaultTemplate = `<neon-stepper
  :model-value="2"
  :steps="['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5 with the long name']"
  :completed-index="3"
/>`;

    const colorTemplate = `<neon-stepper
  color="success"
  :model-value="3"
  :steps="['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5 with the long name']"
  :completed-index="3"
/>`;

    return {
      menuModel,
      headline,
      defaultTemplate,
      colorTemplate,
    };
  },
});
