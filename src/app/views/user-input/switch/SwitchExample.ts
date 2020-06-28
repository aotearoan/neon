import { Component, Vue } from 'vue-property-decorator';
import { NeonSwitch } from '../../../../components';
import ComponentDocumentation from '../../../components/component-documentation/ComponentDocumentation.vue';
import { Menu, MenuModel } from '../../../Menu';

@Component({
  components: {
    ComponentDocumentation,
    NeonSwitch,
  },
})
export default class SwitchExample extends Vue {
  private menuModel: MenuModel | null = null;

  private data = {
    checked: true,
  };

  private switchTemplate = `<div>
  <h5>Different switch sizes</h5>
  <div class="neon-horizontal neon-spaced-apart">
    <neon-switch size="s" label="Small switch" v-model="checked" />
    <neon-switch label="Medium switch" v-model="checked" />
    <neon-switch size="l" label="Large switch" v-model="checked" />
  </div>
  <neon-note color="info">Functional colors are supported</neon-note>
  <div class="neon-horizontal neon-spaced-apart">
    <neon-switch size="m" label="Low contrast" color="low-contrast" v-model="checked" />
    <neon-switch size="m" label="Info" color="info" v-model="checked" />
    <neon-switch size="m" label="Disabled" color="primary" :disabled="true" v-model="checked" />
  </div>
</div>`;

  private checkboxTemplate = `<div>
  <neon-switch size="s" label="Small checkbox" v-model="checked" switch-style="checkbox" />
  <neon-switch label="Medium checkbox" v-model="checked" switch-style="checkbox" />
  <neon-switch size="l" label="Large checkbox" v-model="checked" :disabled="true" switch-style="checkbox" />
</div>`;

  private examples = [
    {
      title: 'Switch style',
      template: this.switchTemplate,
      data: this.data,
    },
    {
      title: 'Checkbox style',
      template: this.checkboxTemplate,
      data: this.data,
    },
  ];

  public mounted() {
    this.menuModel = Menu.getComponentConfig('NeonSwitch');
  }
}
