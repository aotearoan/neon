import { defineComponent, onMounted, ref } from 'vue';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';
import Editor from '@/app/components/editor/Editor.vue';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';
import { NeonButton, NeonCard, NeonCardBody, NeonDrawer, NeonStack } from '@/neon';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Drawer',
  components: {
    NeonButton,
    NeonDrawer,
    NeonCard,
    NeonCardBody,
    NeonStack,
    ComponentDocumentation,
    Editor,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('Slide-out panel for content');

    const openLeft = ref(false);
    const onOpenLeft = (newOpenLeft: boolean) => {
      openLeft.value = newOpenLeft;
    };
    const openRight = ref(false);
    const onOpenRight = (newOpenRight: boolean) => {
      openRight.value = newOpenRight;
    };
    const openTop = ref(false);
    const onOpenTop = (newOpenTop: boolean) => {
      openTop.value = newOpenTop;
    };
    const openBottom = ref(false);
    const onOpenBottom = (newOpenBottom: boolean) => {
      openBottom.value = newOpenBottom;
    };

    const contents = `<h6>Drawer content goes here</h6>
<p>
  Bacon ipsum dolor amet venison pig ball tip salami pork chop, drumstick tenderloin sirloin pork loin.
  Shoulder ham venison pork leberkas. Shankle pork loin pork belly turducken rump landjaeger pastrami
  tongue leberkas picanha t-bone alcatra fatback meatball. T-bone tenderloin landjaeger beef pork chop.
  Picanha ham hock t-bone, tenderloin flank frankfurter pig filet mignon bacon chuck.
</p>
<p>
  Ribeye chicken t-bone burgdoggen kevin shank shankle. Turkey venison pastrami short loin shankle sausage
  prosciutto. Hamburger pancetta ribeye, ham ground round capicola shank beef. Flank shoulder strip steak
  rump venison short loin corned beef. Ground round turkey bresaola meatball pork loin, buffalo chuck pork
  ribeye kielbasa.
</p>`;

    const template = `<!-- Left -->
<neon-button label="Open left" @click="onOpenLeft(true)"></neon-button>
<neon-drawer :open="openLeft" position="left" @close="onOpenLeft(false)">
  <div v-html="contents"></div>
</neon-drawer>
<!-- Right -->
<neon-button label="Open right" @click="onOpenRight(true)"></neon-button>
<neon-drawer :open="openRight" position="right" @close="onOpenRight(false)">
  <div v-html="contents"></div>
</neon-drawer>
<!-- Top (overlay = false) -->
<neon-button label="Open top" @click="onOpenTop(true)"></neon-button>
<neon-drawer :open="openTop" position="top" @close="onOpenTop(false)" :overlay="false">
  <div v-html="contents"></div>
</neon-drawer>
<!-- Bottom -->
<neon-button label="Open bottom" @click="onOpenBottom(true)"></neon-button>
<neon-drawer :dismissible="false" :open="openBottom" position="bottom">
  <div v-html="contents"></div>
  <br />
  <neon-button style="align-self: flex-end" label="Close" @click="onOpenBottom(false)" />
</neon-drawer>`;

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonDrawer')));

    return {
      menuModel,
      headline,
      openLeft,
      openRight,
      openTop,
      openBottom,
      contents,
      template,
      onOpenLeft,
      onOpenRight,
      onOpenTop,
      onOpenBottom,
    };
  },
});
