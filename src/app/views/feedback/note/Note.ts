import { defineComponent, onMounted, ref } from 'vue';
import type { MenuModel } from '../../../Menu';
import { Menu } from '../../../Menu';
import ComponentDocumentation from '../../../components/component-documentation/ComponentDocumentation.vue';
import NeonNote from '../../../../components/feedback/note/NeonNote.vue';
import NeonCardBody from '../../../../components/layout/card/body/NeonCardBody.vue';
import NeonCard from '../../../../components/layout/card/NeonCard.vue';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Note',
  components: {
    NeonNote,
    NeonCard,
    NeonCardBody,
    ComponentDocumentation,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('Display on page notifications to users');

    const data = ref({
      noteOpen: true,
    });

    const examples = ref([
      {
        title: 'Blockquote',
        template: `<blockquote>
  <span><strong>Note:</strong> Shoreditch swag neutra, sriracha vinyl af tacos viral photo booth pinterest blue bottle
      activated charcoal bicycle rights adaptogen.</span>
</blockquote>`,
      },
      {
        title: 'Default note',
        template: `
          <neon-note>
          <span><strong>Note:</strong> Shoreditch swag neutra, sriracha vinyl af tacos viral photo booth pinterest blue bottle activated charcoal bicycle rights adaptogen.</span>
          </neon-note>`,
      },
      {
        title: 'Note with close',
        template: `
          <neon-note v-if="noteOpen" :closable="true" @close-note="noteOpen = false">
          <span><strong>Note:</strong> Shoreditch swag neutra, sriracha vinyl af tacos viral photo booth pinterest blue bottle activated charcoal bicycle rights adaptogen.</span>
          </neon-note>`,
        data: data.value,
      },
      {
        title: 'Colored note',
        template: ref(`
          <neon-note color="warn">
          <span><strong>Note:</strong> Shoreditch swag neutra, sriracha vinyl af tacos viral photo booth pinterest blue bottle activated charcoal bicycle rights adaptogen.</span>
          </neon-note>`).value,
      },
      {
        title: 'Colored note without icon',
        template: `
          <neon-note color="error" :icon="false">
          <span><strong>Note:</strong> Shoreditch swag neutra, sriracha vinyl af tacos viral photo booth pinterest blue bottle activated charcoal bicycle rights adaptogen.</span>
          </neon-note>`,
      },
    ]);

    onMounted(() => menuModel.value = Menu.getComponentConfig('NeonNote'));

    return {
      menuModel,
      headline,
      data,
      examples,
    };
  },
});
