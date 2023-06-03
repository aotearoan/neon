import { defineComponent, onMounted, ref } from 'vue';
import { NeonCard, NeonCardBody, NeonInline, NeonLabel, NeonStack } from '@/neon';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';
import Editor from '@/app/components/editor/Editor.vue';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names,vue/no-reserved-component-names
  name: 'Label',
  components: {
    NeonCard,
    NeonCardBody,
    NeonLabel,
    NeonStack,
    NeonInline,
    ComponentDocumentation,
    Editor,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('Tag or emphasize content with labels');

    const sizesTemplate = `<neon-label size="xxs" label="XX Small" />
<neon-label size="xs" label="Extra small" />
<neon-label size="s" label="Small" />
<neon-label size="m" label="Medium" />
<neon-label size="l" label="Large" />`;

    const colorsTemplate = `<neon-label label="Default" />
<neon-label color="brand" label="Brand" />
<neon-label color="primary" label="Primary" />
<neon-label color="info" label="Info" />`;

    const gradientsTemplate = `<neon-label alternate-color="warn" color="error" label="Primary" />
<neon-label alternate-color="success" color="info" label="Success" />
<neon-label alternate-color="primary" color="brand" label="Covfefe" />
<neon-label alternate-color="brand" color="primary" label="Hamberders" />`;

    const withIconsTemplate = `<neon-label icon="check" size="xs" color="warn" label="Extra small" />
<neon-label icon="check" color="error" label="Small" />
<neon-label icon="lock" icon-position="right" color="high-contrast" label="Icon right" />`;

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonLabel')));

    return {
      menuModel,
      headline,
      sizesTemplate,
      colorsTemplate,
      gradientsTemplate,
      withIconsTemplate,
    };
  },
});
