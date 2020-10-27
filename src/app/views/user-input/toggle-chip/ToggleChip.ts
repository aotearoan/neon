import { Component, Vue } from 'vue-property-decorator';
import { NeonCard, NeonCardBody, NeonToggleChip } from '../../../../components';
import ComponentDocumentation from '../../../components/component-documentation/ComponentDocumentation.vue';
import { Menu, MenuModel } from '../../../Menu';

@Component({
  components: {
    ComponentDocumentation,
    NeonCard,
    NeonCardBody,
    NeonToggleChip,
  },
})
export default class ToggleChip extends Vue {
  private menuModel: MenuModel | null = null;

  private headline = 'Chips for toggling state';

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
    checked13: false,
    checked14: true,
    checked15: false,
    checked16: false,
    checked17: false,
  };

  private sizeTemplate = `<div class="example--vertical">
  <neon-toggle-chip size="xs" label="Extra Small" v-model="checked1" />
  <neon-toggle-chip size="s" label="Small" v-model="checked2" />
  <neon-toggle-chip label="Medium" v-model="checked3" />
  <neon-toggle-chip size="l" label="Large" v-model="checked4" />
</div>`;

  private noCheckTemplate = `<div class="example--vertical">
  <neon-toggle-chip :show-check="false" size="xs" label="Extra small" v-model="checked5" />
  <neon-toggle-chip :show-check="false" size="s" label="Small" v-model="checked6" />
  <neon-toggle-chip :show-check="false" size="m" label="Medium" v-model="checked7" />
  <neon-toggle-chip :show-check="false" size="l" label="Large" v-model="checked8" />
</div>`;

  private colorTemplate = `<div class="example--vertical">
  <neon-toggle-chip label="Brand" color="brand" v-model="checked9" />
  <neon-toggle-chip label="Primary" color="primary" v-model="checked10" />
  <neon-toggle-chip label="Info" color="info" v-model="checked11" />
  <neon-toggle-chip label="Warning" color="warn" v-model="checked12" />
</div>`;

  private fewOptionsTemplate = `<div class="example--horizontal">
  <neon-toggle-chip :show-check="false" size="s" label="Bacon" v-model="checked13" />
  <neon-toggle-chip :show-check="false" size="s" label="Cheese" v-model="checked14" />
  <neon-toggle-chip :show-check="false" size="s" label="Pineapple" v-model="checked15" />
  <neon-toggle-chip :show-check="false" size="s" label="Mushrooms" v-model="checked16" />
</div>`;

  private stateTemplate = `<div class="example--vertical">
  <neon-toggle-chip size="m" label="Disabled" color="primary" :disabled="true" v-model="checked17" />
</div>`;

  private examples = [
    {
      title: 'Switch sizes',
      template: this.sizeTemplate,
      data: this.data,
    },
    {
      title: 'Switches no check',
      template: this.noCheckTemplate,
      data: this.data,
    },
    {
      title: 'Switch colors',
      template: this.colorTemplate,
      data: this.data,
    },
    {
      title: 'Group toggle chips',
      tip: 'Use toggle chips as an alternative to a multi-select with only a few options',
      template: this.fewOptionsTemplate,
      data: this.data,
    },
    {
      title: 'Disabled toggle chip',
      template: this.stateTemplate,
      data: this.data,
    },
  ];

  public mounted() {
    this.menuModel = Menu.getComponentConfig('NeonToggleChip');
  }
}
