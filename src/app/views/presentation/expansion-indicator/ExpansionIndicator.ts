import { defineComponent, onMounted, ref } from 'vue';
import { NeonCard, NeonCardBody, NeonExpansionIndicator } from '@/neon';
import ComponentDocumentation from '../../../components/component-documentation/ComponentDocumentation.vue';
import type { MenuModel } from '../../../Menu';
import { Menu } from '../../../Menu';

export default defineComponent({
  name: 'ExpansionIndicator',
  components: {
    NeonCard,
    NeonCardBody,
    NeonExpansionIndicator,
    ComponentDocumentation,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('Indicate expanded / collapsed');

    const examples = ref([
      {
        title: 'Examples',
        template: `<div class="example--horizontal">
  <neon-expansion-indicator :expanded="false" />
  <neon-expansion-indicator :expanded="true" />
  <neon-expansion-indicator :expanded="false" color="primary" />
  <div class="example-inverse-bg">
    <neon-expansion-indicator :expanded="false" :inverse="true" />
  </div>
  <neon-expansion-indicator :disabled="true" />
</div>`,
      },
    ]);

    onMounted(() => menuModel.value = Menu.getComponentConfig('NeonExpansionIndicator'));

    return {
      menuModel,
      headline,
      examples,
    };
  },
});
