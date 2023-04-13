import { defineComponent, onMounted, ref } from 'vue';
import { NeonButton, NeonCard, NeonCardBody, NeonDialog } from '@/neon';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';
import Editor from '@/app/components/editor/Editor.vue';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';

export default defineComponent({
  name: 'AppDialog',
  components: {
    NeonButton,
    NeonCard,
    NeonCardBody,
    NeonDialog,
    ComponentDocumentation,
    Editor,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('Confirm user actions in a dialog window');

    const open = ref(false);
    const toggleOpen = (openValue: boolean) => {
      open.value = openValue;
    };

    const template = `<neon-dialog
  :open="open"
  cancel-label="Reject"
  confirm-label="Accept"
  color="success"
  title="Incoming requests"
  question="Are you sure you want to accept incoming requests?"
  @cancel="toggleOpen(false)"
  @confirm="toggleOpen(false)">
</neon-dialog>`;

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonDialog')));

    return {
      menuModel,
      headline,
      open,
      template,
      toggleOpen,
    };
  },
});
