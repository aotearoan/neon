import { defineComponent, onMounted, ref } from 'vue';
import { NeonBadge, NeonCard, NeonCardBody, NeonStack } from '@/neon';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';
import Editor from '@/app/components/editor/Editor.vue';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Badge',
  components: {
    NeonCard,
    NeonCardBody,
    NeonBadge,
    NeonStack,
    ComponentDocumentation,
    Editor,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('User avatar badges');

    const sizesTemplate = `<neon-badge size="s" label="SM" />
<neon-badge size="m" label="MD" />
<neon-badge size="l" label="LG" />`;

    const shapesTemplate = `<neon-badge label="SQ" />
<neon-badge :circular="true" label="CI" />`;

    const stylesTemplate = `<neon-badge label="LB" />
<neon-badge icon="user" />
<neon-badge :image="baseUrl + 'images/doge.jpg'" />
<neon-badge :circular="true" jazzicon-id="Test user" />`;

    const colorsTemplate = `<neon-badge label="LB" color="brand" />
<neon-badge icon="user" color="success" />`;

    const gradientsTemplate = `<neon-badge icon="user" color="brand" alternate-color="warn" />
<neon-badge label="LB" color="info" alternate-color="brand" />`;

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonBadge')));

    return {
      baseUrl: import.meta.env.VITE_BASE_URL,
      menuModel,
      headline,
      sizesTemplate,
      shapesTemplate,
      stylesTemplate,
      colorsTemplate,
      gradientsTemplate,
    };
  },
});
