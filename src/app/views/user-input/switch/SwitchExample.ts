import { Component, Vue } from 'vue-property-decorator';
import { NeonCard, NeonCardBody, NeonSwitch } from '../../../../components';
import ComponentDocumentation from '../../../components/component-documentation/ComponentDocumentation.vue';
import { Menu, MenuModel } from '../../../Menu';

@Component({
  components: {
    ComponentDocumentation,
    NeonCard,
    NeonCardBody,
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
    checked10: true,
    checked11: true,
    checked12: true,
    checked13: true,
    checked14: true,
    indeterminate: true,
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

  private labelTemplate = `<div>
  <neon-switch size="m" label="Right label" color="primary" v-model="checked6" />
  <neon-switch size="m" label="Left label" color="primary" label-position="left" v-model="checked7" />
</div>`;

  private stateTemplate = `<div>
  <neon-switch size="m" label="Disabled" color="primary" :disabled="true" v-model="checked8" />
</div>`;

  private checkboxTemplate = `<div>
  <neon-switch size="s" label="Small checkbox" v-model="checked9" switch-style="checkbox" />
  <neon-switch label="Medium checkbox" v-model="checked10" switch-style="checkbox" />
  <neon-switch size="l" label="Large checkbox" v-model="checked11" switch-style="checkbox" />
  <neon-switch label="Left label" v-model="checked12" label-position="left" switch-style="checkbox" />
  <neon-switch
    label="Indeterminate checkbox"
    v-model="checked13"
    :indeterminate="indeterminate"
    @indeterminate-change="indeterminate = false"
    switch-style="checkbox"
  />
  <neon-switch label="Disabled checkbox" v-model="checked14" :disabled="true" switch-style="checkbox" />
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
      title: 'Label position',
      template: this.labelTemplate,
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
