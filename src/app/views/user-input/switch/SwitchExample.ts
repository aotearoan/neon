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

  private headline = 'Switch and toggle on or off';

  private data = {
    checked1: true,
    checked2: true,
    checked3: true,
    checked4: true,
    checked5: true,
    checked6: true,
    checked7: true,
    checked8: true,
    checked9: true,
  };

  private sizeTemplate = `<div>
  <neon-switch size="s" label="Small" v-model="checked1" />
  <neon-switch label="Medium" v-model="checked2" />
  <neon-switch size="l" label="Large" v-model="checked3" />
</div>`;

  private colorTemplate = `<div>
  <neon-switch size="m" label="Low contrast" color="low-contrast" v-model="checked4" />
  <neon-switch size="m" label="Info" color="info" v-model="checked5" />
</div>`;

  private stateTemplate = `<div>
  <neon-switch size="m" label="Disabled" color="primary" :disabled="true" v-model="checked6" />
</div>`;

  private checkboxTemplate = `<div>
  <neon-switch size="s" label="Small checkbox" v-model="checked7" switch-style="checkbox" />
  <neon-switch label="Medium checkbox" v-model="checked8" switch-style="checkbox" />
  <neon-switch size="l" label="Large checkbox" v-model="checked9" :disabled="true" switch-style="checkbox" />
</div>`;

  private examples = [
    {
      title: 'Switch sizes',
      template: this.sizeTemplate,
      data: this.data,
    },
    {
      title: 'Switch colors',
      template: this.colorTemplate,
      data: this.data,
    },
    {
      title: 'Disabled switch',
      template: this.stateTemplate,
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
