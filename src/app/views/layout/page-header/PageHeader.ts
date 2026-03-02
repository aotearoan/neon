import { defineComponent, onMounted, ref } from 'vue';
import { NeonButton, NeonCard, NeonCardBody, NeonFunctionalColor, NeonPageHeader } from '@/neon';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';
import Editor from '@/app/components/editor/Editor.vue';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';

export default defineComponent({
  name: 'PageSection',
  components: {
    NeonButton,
    NeonCard,
    NeonCardBody,
    NeonPageHeader,
    ComponentDocumentation,
    Editor,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('Defines a section of a page with a title, content and an hr.');

    const template = `<neon-page-header title="Page section title" :note="note">
  <template #subtitle>
    <span>Page subtitle content</span>
  </template>
  <template #actions>
    <neon-button label="Do something" button-style="outline" />
  </template>
</neon-page-header>`;

    const note = {
      title: 'Note title',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      color: NeonFunctionalColor.Info,
    };

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonPageHeader')));

    return {
      menuModel,
      headline,
      note,
      template,
    };
  },
});
