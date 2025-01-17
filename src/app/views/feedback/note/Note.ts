import { defineComponent, onMounted, ref } from 'vue';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';
import { NeonCard, NeonCardBody, NeonNote, NeonStack } from '@/neon';
import Editor from '@/app/components/editor/Editor.vue';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Note',
  components: {
    NeonNote,
    NeonCard,
    NeonCardBody,
    NeonStack,
    ComponentDocumentation,
    Editor,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('Display on page notifications to users');

    const noteOpen = ref(true);
    const closeNote = () => (noteOpen.value = false);

    const blockQuoteTemplate = `<blockquote>
  <span><strong>Note:</strong> Shoreditch swag neutra, sriracha vinyl af tacos viral photo booth pinterest blue
    bottle activated charcoal bicycle rights adaptogen.</span>
</blockquote>`;

    const defaultNoteTemplate = `<neon-note title="Note title">
  <span><strong>Note:</strong> Shoreditch swag neutra, sriracha vinyl af tacos viral photo booth pinterest blue
    bottle activated charcoal bicycle rights adaptogen.</span>
</neon-note>`;

    const withCloseTemplate = `<neon-note v-if="noteOpen" :closable="true" @close-note="closeNote()">
  <span><strong>Note:</strong> Shoreditch swag neutra, sriracha vinyl af tacos viral photo booth pinterest blue
    bottle activated charcoal bicycle rights adaptogen.</span>
</neon-note>`;

    const coloredTemplate = `<neon-note :icon="false" color="info" title="Note title">
  <span>Shoreditch swag neutra, sriracha vinyl af tacos viral photo booth pinterest blue
    bottle activated charcoal bicycle rights adaptogen.</span>
</neon-note>
<neon-note :icon="false" color="success" title="Note title">
  <span>Shoreditch swag neutra, sriracha vinyl af tacos viral photo booth pinterest blue
    bottle activated charcoal bicycle rights adaptogen.</span>
</neon-note>
<neon-note color="warn" title="Note with icon">
  <span>Shoreditch swag neutra, sriracha vinyl af tacos viral photo booth pinterest blue
    bottle activated charcoal bicycle rights adaptogen.</span>
</neon-note>
<neon-note color="error" title="Note title and icon"></neon-note>
<neon-note :icon="false" color="brand" title="Note title only"></neon-note>`;

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonNote')));

    return {
      menuModel,
      headline,
      noteOpen,
      blockQuoteTemplate,
      defaultNoteTemplate,
      withCloseTemplate,
      coloredTemplate,
      closeNote,
    };
  },
});
