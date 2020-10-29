import { Component, Vue } from 'vue-property-decorator';
import { NeonCard, NeonCardBody, NeonCardHeader, NeonNote } from '../../../../components';
import Examples from '../../../components/examples/Examples.vue';
import ComponentDocumentation from '../../../components/component-documentation/ComponentDocumentation.vue';
import { Menu, MenuModel } from '../../../Menu';

@Component({
  components: {
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
    NeonNote,
    Examples,
    ComponentDocumentation,
  },
})
export default class Table extends Vue {
  private menuModel: MenuModel | null = null;

  private headline = 'CSS table styles';

  private examples = [
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
  ];

  public mounted() {
    this.menuModel = Menu.getComponentConfig('NeonTable');
  }
}
