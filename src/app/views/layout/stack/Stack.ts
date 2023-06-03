import { defineComponent, onMounted, ref } from 'vue';
import { NeonCard, NeonCardBody, NeonCardHeader, NeonStack } from '@/neon';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';
import Editor from '@/app/components/editor/Editor.vue';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Stack',
  components: {
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
    NeonStack,
    ComponentDocumentation,
    Editor,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('Display evenly spaced vertical content');

    const template = `<neon-stack>
  <div>Spicy jalapeno bacon ipsum dolor</div>
  <div>Flank turkey cupim chuck pastrami</div>
  <div>Kielbasa salami flank cow, beef sausage biltong</div>
</neon-stack>`;

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonStack')));

    return {
      menuModel,
      headline,
      template,
    };
  },
});
