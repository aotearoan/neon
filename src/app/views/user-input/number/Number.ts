import { Component, Vue } from 'vue-property-decorator';
import { NeonCard, NeonCardBody, NeonCardHeader, NeonNumber } from '../../../../components';
import { Menu, MenuModel } from '../../../Menu';
import ComponentDocumentation from '../../../components/component-documentation/ComponentDocumentation.vue';

@Component({
  components: {
    ComponentDocumentation,
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
    NeonNumber,
  },
})
export default class Number extends Vue {
  private menuModel: MenuModel | null = null;

  private headline = 'HTML number input component';

  private data = {
    smallNumber: null,
    mediumNumber: null,
    largeNumber: 0,
    hcNumber: -45,
    primaryNumber: 1,
    brandNumber: 2.5,
    minMaxNumber: 30,
    decimalMinMaxNumber: 5,
    notEditableNumber: 10,
    noButtonsNumber: 10,
    percentageNumber: 0.42,
    customNumber: 10.35,
    disabledNumber: 10,
  };

  private numberSizeExamples = `<div class="neon-vertically-spaced">
  <neon-number size="s" v-model="smallNumber" placeholder="Value" />
  <neon-number size="m" v-model="mediumNumber" placeholder="Value" />
  <neon-number size="l" v-model="largeNumber" placeholder="Value" />
</div>`;

  private numberColorExamples = `<div class="neon-vertically-spaced">
  <neon-number color="high-contrast" v-model="hcNumber" placeholder="Value" />
  <neon-number color="primary" v-model="primaryNumber" placeholder="Value" />
  <neon-number color="brand" v-model="brandNumber" placeholder="Value" />
</div>`;

  private numberValueExamples = `<div class="neon-vertically-spaced">
  <label>spinButtons = false</label>
  <neon-number v-model="noButtonsNumber" :spinButtons="false" placeholder="Value" />
  <label>Editable = false</label>
  <neon-number v-model="notEditableNumber" :editable="false" placeholder="Value" />
  <label>With min, max, step</label>
  <neon-number v-model="minMaxNumber" :min="20" :max="90" :step="10" placeholder="Value" />
  <label>Decimal min, max, step</label>
  <neon-number v-model="decimalMinMaxNumber" :decimals="2" :min="-10.00" :max="10.00" :step="0.05" placeholder="Value" />
  <label>Percentage</label>
  <neon-number v-model="percentageNumber" :percentage="true" placeholder="Value" />
  <label>Custom template</label>
  <neon-number v-model="customNumber" value-template="\${value}" :step="0.05" :decimals="2" placeholder="Value" />
  <label>Disabled</label>
  <neon-number disabled="disabled" v-model="disabledNumber" placeholder="Value" />
</div>`;

  private examples = [
    {
      title: 'Number sizes',
      template: this.numberSizeExamples,
      data: this.data,
    },
    {
      title: 'Various number options',
      template: this.numberValueExamples,
      data: this.data,
    },
    {
      title: 'Number colors',
      template: this.numberColorExamples,
      data: this.data,
    },
  ];

  public mounted() {
    this.menuModel = Menu.getComponentConfig('NeonNumber');
  }
}
