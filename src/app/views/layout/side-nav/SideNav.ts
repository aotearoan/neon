import { defineComponent, onMounted, ref } from 'vue';
import { NeonCard, NeonCardBody, NeonSideNav } from '@/neon';
import ComponentDocumentation from '../../../components/component-documentation/ComponentDocumentation.vue';
import type { MenuModel } from '../../../Menu';
import { Menu } from '../../../Menu';

export default defineComponent({
  name: 'SideNav',
  components: {
    NeonCard,
    NeonCardBody,
    NeonSideNav,
    ComponentDocumentation,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('Display fixed content at the side of the page');

    const examples = ref([
      {
        title: 'Side Nav example',
        template: `<neon-side-nav>
  <template #sticky>
    <h6>Sticky content</h6>
  </template>
  <template #scrolling>
    <h6>Scrolling content</h6>
    <p>Spicy jalapeno bacon ipsum dolor amet biltong porchetta cupim sausage pork loin. Ham porchetta brisket, kielbasa ham hock sirloin ground round strip steak jowl jerky short ribs pork loin frankfurter. Flank turkey cupim chuck pastrami picanha short loin shankle. Tongue pork loin turducken, tenderloin pork belly ham boudin spare ribs sirloin pancetta jerky picanha corned beef ribeye alcatra. Kielbasa salami flank cow, beef sausage biltong jerky prosciutto strip steak. Meatball prosciutto ham hock salami, jowl tongue kevin fatback ground round beef ribs bacon pork loin meatloaf turducken strip steak.</p>
  </template>
</neon-side-nav>`,
        fixedContent: true,
      },
    ]);

    onMounted(() => menuModel.value = Menu.getComponentConfig('NeonSideNav'));

    return {
      menuModel,
      headline,
      examples,
    };
  },
});
