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
    modelWithCounts: [
      {
        label: 'Option 1',
        key: 'option-1',
        count: 4322,
      },
      {
        label: 'Option 2',
        key: 'option-2',
        count: 42,
      },
      {
        label: 'Option 3',
        key: 'option-3',
        disabled: true,
        count: 911,
      },
    ],
    selected: 'option-1',
    selected2: 'option-1',
  };

  private examples = [
    {
      title: 'Basic example',
      template: `<neon-action-menu :model="model" color="primary" v-model="selected"></neon-action-menu>`,
      data: this.data,
    },
    {
      title: 'With counts',
      template: `<neon-action-menu :model="modelWithCounts" color="primary" v-model="selected2"></neon-action-menu>`,
      data: this.data,
    },
  ];

  public mounted() {
    this.menuModel = Menu.getComponentConfig('NeonActionMenu');
  }
}
