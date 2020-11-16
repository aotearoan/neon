import { Component, Vue } from 'vue-property-decorator';
import { NeonCard, NeonCardBody, NeonCardHeader, NeonSlider } from '../../../../components';
import { Menu, MenuModel } from '../../../Menu';
import ComponentDocumentation from '../../../components/component-documentation/ComponentDocumentation.vue';

@Component({
  components: {
    ComponentDocumentation,
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
    NeonSlider,
  },
})
export default class Slider extends Vue {
  private menuModel: MenuModel | null = null;

  private headline = 'HTML single value slider input';

  private data = {
    basicSlider: 50,
    minMaxSlider: 0,
    outputSlider: 50,
    legendSlider: 50,
    tooltipSlider: 50,
    percentageSlider: 0.42,
    decimalSlider: 50.0,
    noFormattingSlider: 2020,
    templateSlider: 100.0,
    disabledSlider: 50,
    primarySlider: 50,
    brandSlider: 50,
    warnSlider: 50,
  };

  private coreExamples = `<div class="neon-vertically-spaced">
  <label>Basic slider</label>
  <neon-slider id="basicSliderId" v-model="basicSlider" />
  <label>With Min, max and step</label>
  <neon-slider v-model="minMaxSlider" :min="-100" :max="100" :step="10" />
  <label>Disabled</label>
  <neon-slider v-model="disabledSlider" :disabled="true" />
</div>`;

  private formattingExamples = `<div class="neon-vertically-spaced">
  <label>Percentage</label>
  <neon-slider v-model="percentageSlider" :percentage="true" />
  <label>Decimal values</label>
  <neon-slider v-model="decimalSlider" :decimals="2" />
  <label>Formatting disabled (e.g. year)</label>
  <neon-slider v-model="noFormattingSlider" :disable-formatting="true" :min="2000" :max="2050" />
  <label>With template (e.g. currency)</label>
  <neon-slider v-model="templateSlider" :max="200.0" :step="0.5" :decimals="2" value-template="\${value}" />
</div>`;

  private colorExamples = `<div class="neon-vertically-spaced">
  <neon-slider v-model="primarySlider" color="primary" />
  <neon-slider v-model="brandSlider" color="brand" />
  <neon-slider v-model="warnSlider" color="warn" />
</div>`;

  private displayExamples = `<div class="neon-vertically-spaced">
  <label>Output hidden</label>
  <neon-slider v-model="outputSlider" :output="false" />
  <label>Legend hidden</label>
  <neon-slider v-model="legendSlider" :legend="false" />
  <label>Tooltip hidden</label>
  <neon-slider v-model="tooltipSlider" :tooltip="false" />
</div>`;

  private examples = [
    {
      title: 'Basic usage',
      template: this.coreExamples,
      data: this.data,
    },
    {
      title: 'Formatting options',
      template: this.formattingExamples,
      data: this.data,
    },
    {
      title: 'Slider colors',
      template: this.colorExamples,
      data: this.data,
    },
    {
      title: 'Display options',
      template: this.displayExamples,
      data: this.data,
    },
  ];

  public mounted() {
    this.menuModel = Menu.getComponentConfig('NeonSlider');
  }
}
