import { Component, Vue } from 'vue-property-decorator';
import { NeonActionMenu, NeonCard, NeonCardBody } from '../../../../components';
import ComponentDocumentation from '../../../components/component-documentation/ComponentDocumentation.vue';
import { Menu, MenuModel } from '../../../Menu';

@Component({
  components: {
    NeonCard,
    NeonCardBody,
    NeonActionMenu,
    ComponentDocumentation,
  },
})
export default class ActionMenu extends Vue {
  private menuModel: MenuModel | null = null;

  private headline = 'Side navigation actions';

  private data = {
    model: [
      {
        label: 'Option 1',
        key: 'option-1',
      },
      {
        label: 'Option 2',
        key: 'option-2',
      },
      {
        label: 'Option 3',
        key: 'option-3',
        disabled: true,
      },
    ],
    selected: 'option-1',
  };

  private examples = [
    {
      template: `<neon-action-menu :model="model" v-model="selected"></neon-action-menu>`,
      data: this.data,
    },
  ];

  public mounted() {
    this.menuModel = Menu.getComponentConfig('NeonActionMenu');
  }
}
