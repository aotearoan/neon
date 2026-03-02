import { defineComponent, onMounted, ref } from 'vue';
import { NeonButton, NeonCard, NeonCardBody, NeonCardHeader, NeonStickyButtons } from '@/neon';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';
import Editor from '@/app/components/editor/Editor.vue';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';

export default defineComponent({
  name: 'StickyButtons',
  components: {
    NeonButton,
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
    NeonStickyButtons,
    ComponentDocumentation,
    Editor,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('Transform buttons into a sticky bar when on mobile');

    const template = `<neon-sticky-buttons>
  <neon-button label="Button 1" />
  <neon-button label="Button 2" />
</neon-sticky-buttons>`;

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonStickyButtons')));

    return {
      menuModel,
      headline,
      template,
    };
  },
});
