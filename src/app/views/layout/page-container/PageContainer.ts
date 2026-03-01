import { defineComponent, onMounted, ref } from 'vue';
import { NeonCard, NeonCardBody, NeonCardHeader, NeonInline, NeonPage, NeonPageContainer } from '@/neon';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';
import Editor from '@/app/components/editor/Editor.vue';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'PageContainer',
  components: {
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
    NeonInline,
    NeonPage,
    NeonPageContainer,
    ComponentDocumentation,
    Editor,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('Defines standard layout for page contents');

    const templateBasic = `<neon-page>
  <template #content>
    <neon-page-container title="Your requests">
      <p>Page contents goes here</p>
    </neon-page-container>
  </template>
</neon-page>`;

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonPageContainer')));

    return {
      menuModel,
      headline,
      templateBasic,
    };
  },
});
