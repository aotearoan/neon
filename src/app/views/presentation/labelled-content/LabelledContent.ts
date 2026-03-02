import { defineComponent, onMounted, ref } from 'vue';
import { NeonCard, NeonCardBody, NeonInline, NeonLabelledContent, NeonStack } from '@/neon';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';
import Editor from '@/app/components/editor/Editor.vue';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names,vue/no-reserved-component-names
  name: 'Label',
  components: {
    NeonLabelledContent,
    NeonCard,
    NeonCardBody,
    NeonStack,
    NeonInline,
    ComponentDocumentation,
    Editor,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('Render a piece of content with a label.');

    const labelValueTemplate = '<neon-labelled-content label="Label" value="Value" />';
    const importantTemplate = '<neon-labelled-content label="Label" important value="Value" />';
    const numericTemplate = '<neon-labelled-content label="Label" numeric value="12,000.55" />';
    const slotTemplate = `<neon-labelled-content label="Label">
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
</neon-labelled-content>`;

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonLabelledContent')));

    return {
      menuModel,
      headline,
      labelValueTemplate,
      importantTemplate,
      numericTemplate,
      slotTemplate,
    };
  },
});
