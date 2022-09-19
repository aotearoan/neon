import { defineComponent, onMounted, ref } from 'vue';
import { NeonCard, NeonCardBody, NeonLabel } from '@/neon';
import ComponentDocumentation from '../../../components/component-documentation/ComponentDocumentation.vue';
import type { MenuModel } from '../../../Menu';
import { Menu } from '../../../Menu';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names,vue/no-reserved-component-names
  name: 'Label',
  components: {
    NeonCard,
    NeonCardBody,
    NeonLabel,
    ComponentDocumentation,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('Tag or emphasize content with labels');

    const examples = ref([
      {
        title: 'Label sizes',
        template: `<div class="example--horizontal">
  <neon-label size="xxs" label="XX Small" />
  <neon-label size="xs" label="Extra small" />
  <neon-label size="s" label="Small" />
  <neon-label size="m" label="Medium" />
  <neon-label size="l" label="Large" />
</div>`,
      },
      {
        title: 'Label colors',
        template: `<div class="example--horizontal">
  <neon-label label="Default" />
  <neon-label color="brand" label="Brand" />
  <neon-label color="primary" label="Primary" />
  <neon-label color="info" label="Info" />
</div>`,
      },
      {
        title: 'Gradient labels',
        template: `<div class="example--horizontal">
  <neon-label color="primary" alternate-color="primary" label="Primary" />
  <neon-label color="success" alternate-color="success" label="Success" />
  <neon-label color="brand" alternate-color="primary" label="Covfefe" />
  <neon-label color="primary" alternate-color="brand" label="Hamberders" />
</div>`,
      },
      {
        title: 'Labels with icons',
        template: `<div class="example--horizontal">
  <neon-label icon="check" size="xs" color="warn" label="Extra small" />
  <neon-label icon="check" color="error" label="Small" />
  <neon-label icon="lock" icon-position="right" color="high-contrast" label="Icon right" />
</div>`,
      },
    ]);

    onMounted(() => menuModel.value = Menu.getComponentConfig('NeonLabel'));

    return {
      menuModel,
      headline,
      examples,
    };
  },
});
