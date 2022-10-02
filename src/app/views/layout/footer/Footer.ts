import { defineComponent, onMounted, ref } from 'vue';
import { NeonCard, NeonCardBody, NeonFooter } from '@/neon';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names,vue/no-reserved-component-names
  name: 'Footer',
  components: {
    NeonCard,
    NeonCardBody,
    NeonFooter,
    ComponentDocumentation,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('Page footer component');

    const examples = ref([
      {
        title: 'Footer example',
        template: `<neon-footer>
  <span>Footer content</span>
</neon-footer>`,
      },
    ]);

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonFooter')));

    return {
      menuModel,
      headline,
      examples,
    };
  },
});
