import { defineComponent, onMounted, ref } from 'vue';
import { NeonCard, NeonCardBody, NeonCardHeader, NeonNote } from '@/neon';
import Examples from '../../../components/examples/Examples.vue';
import ComponentDocumentation from '../../../components/component-documentation/ComponentDocumentation.vue';
import type { MenuModel } from '../../../Menu';
import { Menu } from '../../../Menu';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names,vue/no-reserved-component-names
  name: 'Table',
  components: {
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
    NeonNote,
    Examples,
    ComponentDocumentation,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('CSS table styles');

    const examples = ref([
      {
        title: 'Table style example',
        template: `<table>
  <thead>
    <tr>
      <th>header 1</th>
      <th>header 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Value 1</td>
      <td>Value 2</td>
    </tr>
    <tr>
      <td>Value 3</td>
      <td>Value 4</td>
    </tr>
  </tbody>
</table>`,
      },
    ]);

    onMounted(() => menuModel.value = Menu.getComponentConfig('NeonTable'));

    return {
      menuModel,
      headline,
      examples,
    };
  },
});
