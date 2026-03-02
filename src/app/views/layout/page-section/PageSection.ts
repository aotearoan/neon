import { defineComponent, onMounted, ref } from 'vue';
import { NeonCard, NeonCardBody, NeonCardHeader, NeonPageSection } from '@/neon';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';
import Editor from '@/app/components/editor/Editor.vue';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';

export default defineComponent({
  name: 'PageSection',
  components: {
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
    NeonPageSection,
    ComponentDocumentation,
    Editor,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('Defines a section of a page with a title, content and an hr.');

    const template = `<neon-page-section title="Page section title">
  <p>Page section content</p>
</neon-page-section>`;

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonPageSection')));

    return {
      menuModel,
      headline,
      template,
    };
  },
});
