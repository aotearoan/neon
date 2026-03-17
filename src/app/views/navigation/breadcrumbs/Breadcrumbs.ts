import { NeonBreadcrumbs, NeonCard, NeonCardBody, NeonStack } from '@/neon';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';
import Editor from '@/app/components/editor/Editor.vue';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';
import { defineComponent, onMounted, ref } from 'vue';
import { breadcrumbsFixture } from '@/fixtures/navigation/breadcrumbs/BreadcrumbsFixture';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Breadcrumbs',
  components: {
    NeonCard,
    NeonCardBody,
    NeonBreadcrumbs,
    NeonStack,
    ComponentDocumentation,
    Editor,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('Breadcrumb navigation with a back button');
    const exampleAll = ref('<neon-breadcrumbs :breadcrumbs="breadcrumbs" />');
    const exampleBack = ref('<neon-breadcrumbs />');
    const exampleBreadcrumbs = ref('<neon-breadcrumbs :back-button="false" :breadcrumbs="breadcrumbs" />');

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonBreadcrumbs')));

    return {
      menuModel,
      headline,
      exampleAll,
      exampleBack,
      exampleBreadcrumbs,
      breadcrumbs: breadcrumbsFixture(),
    };
  },
});
