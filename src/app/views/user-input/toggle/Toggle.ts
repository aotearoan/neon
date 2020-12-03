import { Component, Vue } from 'vue-property-decorator';
import { NeonCard, NeonCardBody, NeonFunctionalColor, NeonSize, NeonToggle } from '../../../../components';
import { Menu, MenuModel } from '../../../Menu';
import ComponentDocumentation from '../../../components/component-documentation/ComponentDocumentation.vue';

@Component({
  components: {
    NeonCard,
    NeonCardBody,
    NeonToggle,
    ComponentDocumentation,
  },
})
export default class Toggle extends Vue {
  private menuModel: MenuModel | null = null;

  private headline = 'For selecting one of several items';
  private data = {
    model: [
      {
        key: 'key-1',
        label: 'Label 1',
      },
      {
        key: 'key-2',
        label: 'Label 2',
        disabled: true,
      },
      {
        key: 'key-3',
        label: 'Label 3',
      },
      {
        key: 'key-4',
        label: 'Label 4',
        disabled: true,
      },
    ],
    iconModel: [
      {
        key: 'left',
        icon: 'align-left',
      },
      {
        key: 'centered',
        icon: 'align-center',
      },
      {
        key: 'right',
        icon: 'align-right',
      },
    ],
    selected1: 'key-2',
    selected2: 'key-2',
    selected3: 'key-2',
    selected4: 'key-2',
    selected5: 'key-2',
    selected6: 'key-2',
    selected7: 'left',
    selected8: 'key-2',
    selected9: 'key-2',
    selected10: 'key-2',
    iconSelected: 'centered',
    colors: Object.values(NeonFunctionalColor),
    sizes: Object.values(NeonSize),
  };

  private toggleSizes = `<div class="neon-vertically-spaced">
  <neon-toggle name="toggle-1" size="s" :model="model" v-model="selected1" />
  <neon-toggle name="toggle-2" size="m" :model="model" v-model="selected2" />
  <neon-toggle name="toggle-3" size="l" :model="model" v-model="selected3" />
</div>`;

  private toggleColors = `<div class="neon-vertically-spaced">
  <neon-toggle name="toggle-4" :model="model" v-model="selected4" />
  <neon-toggle name="toggle-5" color="info" :model="model" v-model="selected5" />
  <neon-toggle name="toggle-6" color="success" :model="model" v-model="selected6" />
</div>`;

  private toggleIcons = `<neon-toggle name="toggle-7" :model="iconModel" v-model="selected7" />`;

  private radioButtons = `<div class="neon-vertically-spaced">
  <neon-toggle name="toggle-8" orientation="horizontal" toggle-style="radio-buttons" :model="model" color="success" v-model="selected8" />
  <neon-toggle name="toggle-9" toggle-style="radio-buttons" :model="model" v-model="selected9" />
</div>`;

  private examples = [
    {
      title: 'Toggle sizes',
      template: this.toggleSizes,
      data: this.data,
    },
    {
      title: 'Toggle colors',
      template: this.toggleColors,
      data: this.data,
    },
    {
      title: 'Toggle with icons',
      template: this.toggleIcons,
      data: this.data,
    },
    {
      title: 'Radio buttons',
      template: this.radioButtons,
      data: this.data,
    },
  ];

  public mounted() {
    this.menuModel = Menu.getComponentConfig('NeonToggle');
  }
}
