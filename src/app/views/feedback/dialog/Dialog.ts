import { defineComponent, onMounted, ref } from 'vue';
import { NeonButton, NeonCard, NeonCardBody, NeonDialog } from '@/neon';
import ComponentDocumentation from '../../../components/component-documentation/ComponentDocumentation.vue';
import type { MenuModel } from '../../../Menu';
import { Menu } from '../../../Menu';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Dialog',
  components: {
    NeonButton,
    NeonCard,
    NeonCardBody,
    NeonDialog,
    ComponentDocumentation,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('Confirm user actions in a dialog window');

    const data = ref({
      open: false,
    });

    const examples = ref([
      {
        title: 'Dialog example',
        template: `
          <div class="example--horizontal">
          <neon-button label="Open dialog" @click="open = true"></neon-button>
          <neon-dialog
            :open="open"
            cancel-label="Reject"
            confirm-label="Accept"
            color="success"
            title="Incoming requests"
            question="Are you sure you want to accept incoming requests?"
            @cancel="open = false"
            @confirm="open = false">
          </neon-dialog>
          </div>`,
        data: data.value,
      },
    ]);

    onMounted(() => {
      menuModel.value = Menu.getComponentConfig('NeonDialog');
    });

    return {
      menuModel,
      headline,
      data,
      examples,
    };
  },
});
