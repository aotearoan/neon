import { defineComponent, onMounted, ref } from 'vue';
import { NeonCard, NeonCardBody, NeonCardHeader, NeonNote } from '@/neon';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';
import Editor from '@/app/components/editor/Editor.vue';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names,vue/no-reserved-component-names
  name: 'Table',
  components: {
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
    NeonNote,
    ComponentDocumentation,
    Editor,

  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('CSS table styles');

    const template = `<table>
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
</table>`;

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonTable')));

    return {
      menuModel,
      headline,
      template,
    };
  },
});
