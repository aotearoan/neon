import { defineComponent, onMounted, ref } from 'vue';
import { NeonBasicLayout, NeonCard, NeonCardBody, NeonCardHeader, NeonInline, NeonPage } from '@/neon';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';
import Editor from '@/app/components/editor/Editor.vue';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';

export default defineComponent({
  name: 'BasicLayout',
  components: {
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
    NeonInline,
    NeonPage,
    NeonBasicLayout,
    ComponentDocumentation,
    Editor,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('Defines a basic page layout component');

    const templateBasic = `<neon-page>
  <template #content>
    <neon-basic-layout title="Your requests">
      <p>Page contents goes here</p>
    </neon-basic-layout>
  </template>
</neon-page>`;

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonBasicLayout')));

    return {
      menuModel,
      headline,
      templateBasic,
    };
  },
});
