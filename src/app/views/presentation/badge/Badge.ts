import { defineComponent, onMounted, ref } from 'vue';
import { NeonBadge, NeonCard, NeonCardBody } from '@/neon';
import type { MenuModel } from '../../../Menu';
import { Menu } from '../../../Menu';
import ComponentDocumentation from '../../../components/component-documentation/ComponentDocumentation.vue';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Badge',
  components: {
    NeonCard,
    NeonCardBody,
    NeonBadge,
    ComponentDocumentation,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('User avatar badges');

    const examples = ref([
      {
        title: 'Badge sizes',
        template: `<div class="example--horizontal">
  <neon-badge size="s" label="SM" />
  <neon-badge size="m" label="MD" />
  <neon-badge size="l" label="LG" />
</div>`,
      },
      {
        title: 'Badge shapes',
        template: `<div class="example--horizontal">
  <neon-badge label="SQ" />
  <neon-badge :circular="true" label="CI" />
</div>`,
      },
      {
        title: 'Badge styles',
        template: `
          <div class="example--horizontal">
          <neon-badge label="LB" />
          <neon-badge icon="user" />
          <neon-badge :image="baseUrl + 'images/doge.jpg'" />
          </div>`,
        data: {
          baseUrl: import.meta.env.VITE_BASE_URL,
        },
      },
      {
        title: 'Badge colors',
        template: `<div class="example--horizontal">
  <neon-badge label="LB" color="brand" />
  <neon-badge icon="user" color="success" />
</div>`,
      },
      {
        title: 'Gradient badges',
        template: `<div class="example--horizontal">
  <neon-badge icon="user" color="primary" alternate-color="primary" />
  <neon-badge label="LB" color="info" alternate-color="brand" />
</div>`,
      },
    ]);

    onMounted(() => menuModel.value = Menu.getComponentConfig('NeonBadge'));

    return {
      menuModel,
      headline,
      examples,
    };
  },
});
