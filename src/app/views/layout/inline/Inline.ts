import { defineComponent, onMounted, ref } from 'vue';
import { NeonCard, NeonCardBody, NeonCardHeader, NeonInline } from '@/neon';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';
import Editor from '@/app/components/editor/Editor.vue';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Inline',
  components: {
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
    NeonInline,
    ComponentDocumentation,
    Editor,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('Display evenly spaced horizontal content');

    const template = `<neon-inline>
  <div>Spicy jalapeno bacon ipsum dolor</div>
  <div>Flank turkey cupim chuck pastrami</div>
  <div>Kielbasa salami flank cow, beef sausage biltong</div>
</neon-inline>
<neon-inline breakpoint="desktop">
  <div>Spicy jalapeno bacon ipsum dolor</div>
  <div>Flank turkey cupim chuck pastrami</div>
  <div>Kielbasa salami flank cow, beef sausage biltong</div>
</neon-inline>`;

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonInline')));

    return {
      menuModel,
      headline,
      template,
    };
  },
});
