import { defineComponent, onMounted, ref } from 'vue';
import { NeonButton, NeonCard, NeonCardBody, NeonModal } from '@/neon';
import ComponentDocumentation from '../../../components/component-documentation/ComponentDocumentation.vue';
import type { MenuModel } from '../../../Menu';
import { Menu } from '../../../Menu';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Modal',
  components: {
    NeonButton,
    NeonModal,
    NeonCard,
    NeonCardBody,
    ComponentDocumentation,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('Display modal content over the page');

    const data = ref({
      open: false,
    });

    const examples = ref([
      {
        title: 'Modal example',
        template: `
          <div class="example--horizontal">
          <neon-button label="Open modal" @click="open = true"></neon-button>
          <neon-modal :open="open" @close="open = false">
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
                <neon-button label="Cancel" button-style="text" @click="open = false" />
                <neon-button label="Accept" color="primary" @click="open = false" />
              </neon-card-footer>
            </neon-card>
          </neon-modal>
          </div>`,
        data: data.value,
      },
    ]);

    onMounted(() => menuModel.value = Menu.getComponentConfig('NeonModal'));

    return {
      menuModel,
      headline,
      data,
      examples,
    };
  },
});
