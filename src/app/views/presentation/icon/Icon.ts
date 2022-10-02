import { computed, defineComponent, onMounted, ref } from 'vue';
import { NeonIconRegistry } from '@/common/utils/NeonIconRegistry';
import { NeonCard, NeonCardBody, NeonCardHeader, NeonIcon, NeonLink, NeonNote } from '@/neon';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Icon',
  components: {
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
    NeonIcon,
    NeonLink,
    NeonNote,
    ComponentDocumentation,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('Display icons and other SVGs');

    const examples = ref([
      {
        title: 'Icon colors',
        template: `<div class="icons-wrapper">
  <neon-icon name="contrast" />
  <neon-icon color="primary" name="contrast" />
  <neon-icon :disabled="true" name="contrast" />
</div>`,
      },
    ]);

    const icons = computed(() => NeonIconRegistry.list());

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonIcon')));

    return {
      menuModel,
      headline,
      examples,
      icons,
    };
  },
});
