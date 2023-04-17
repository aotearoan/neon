import { defineComponent, onMounted, ref } from 'vue';
import { NeonButton, NeonCard, NeonCardBody, NeonCardFooter, NeonCardHeader, NeonModal } from '@/neon';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';
import Editor from '@/app/components/editor/Editor.vue';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Modal',
  components: {
    NeonButton,
    NeonModal,
    NeonCard,
    NeonCardBody,
    NeonCardFooter,
    NeonCardHeader,
    ComponentDocumentation,
    Editor,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('Display modal content over the page');

    const open = ref(false);
    const toggleOpen = (newOpen: boolean) => {
      open.value = newOpen;
    };

    const template = `<div class="neon--horizontal">
  <neon-button label="Open modal" @click="toggleOpen(true)"></neon-button>
  <neon-modal :open="open" @close="toggleOpen(false)">
    <neon-card size="m">
      <neon-card-header>
        <h3>Modal title</h3>
      </neon-card-header>
      <neon-card-body>
        <h6>Modal content goes here</h6>
        <p>
          Bacon ipsum dolor amet venison pig ball tip salami pork chop, drumstick tenderloin sirloin pork loin.
          Shoulder ham venison pork leberkas. Shankle pork loin pork belly turducken rump landjaeger pastrami
          tongue leberkas picanha t-bone alcatra fatback meatball. T-bone tenderloin landjaeger beef pork chop.
          Picanha ham hock t-bone, tenderloin flank frankfurter pig filet mignon bacon chuck.
        </p>
      </neon-card-body>
      <neon-card-footer>
        <neon-button label="Cancel" button-style="text" @click="toggleOpen(false)" />
        <neon-button label="Accept" color="primary" @click="toggleOpen(false)" />
      </neon-card-footer>
    </neon-card>
  </neon-modal>
</div>`;

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonModal')));

    return {
      menuModel,
      headline,
      open,
      template,
      toggleOpen,
    };
  },
});
