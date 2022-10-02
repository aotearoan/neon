import { defineComponent, onMounted, ref } from 'vue';
import { NeonCard, NeonCardBody, NeonSkeletonLoader } from '@/neon';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';

export default defineComponent({
  name: 'SkeletonLoader',
  components: {
    NeonCard,
    NeonCardBody,
    NeonSkeletonLoader,
    ComponentDocumentation,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('Indicate initial loading progress');

    const example = ref(`<div class="example--vertical">
  <neon-skeleton-loader :count="5" />
</div>`);

    const examples = ref([
      {
        title: 'Skeleton loader with 5 rows',
        template: example.value,
      },
    ]);

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonSkeletonLoader')));

    return {
      menuModel,
      headline,
      example,
      examples,
    };
  },
});
