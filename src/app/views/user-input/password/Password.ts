import { defineComponent, onMounted, ref } from 'vue';
import { NeonCard, NeonCardBody, NeonCardHeader, NeonPassword } from '@/neon';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';
import Editor from '@/app/components/editor/Editor.vue';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Password',
  components: {
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
    NeonPassword,
    ComponentDocumentation,
    Editor,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('An HTML password input');

    const value = ref('1234567');

    const passwordExample = '<neon-password v-model="value" />';

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonPassword')));

    return {
      menuModel,
      headline,
      value,
      passwordExample,
    };
  },
});
