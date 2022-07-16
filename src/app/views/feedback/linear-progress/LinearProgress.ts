import { Component, Vue } from 'vue-property-decorator';
import { NeonCard, NeonCardBody, NeonLinearProgress } from '../../../../components';
import ComponentDocumentation from '../../../components/component-documentation/ComponentDocumentation.vue';
import { Menu, MenuModel } from '../../../Menu';

@Component({
  components: {
    NeonCard,
    NeonCardBody,
    NeonLinearProgress,
    ComponentDocumentation,
  },
})
export default class LinearProgress extends Vue {
  private menuModel: MenuModel | null = null;

  private headline = 'Indicate deterministic progress to users';

  private stylesData = {
    progressPercentage: 0.35,
    progressCounter: 12,
    progressNoOutput: 35,
    progressLabel: 22,
    progressCompletedIcon: 55,
  };

  private styleExamples = `<div class="example--vertical">
  <h4 class="neon-h5">Percentage</h4>
  <div class="example--horizontal">
    <neon-linear-progress :value="progressPercentage" />
    <neon-button size="s" label="Complete" @click="progressPercentage = 1.00" />
  </div>
  <h4 class="neon-h5">Counter</h4>
  <div class="example--horizontal">
    <neon-linear-progress :value="progressCounter" :total="55" />
    <neon-button size="s" label="Complete" @click="progressCounter = 55" />
  </div>
  <h4 class="neon-h5">No output</h4>
  <div class="example--horizontal">
    <neon-linear-progress :value="progressNoOutput" :total="55" :output="false" />
    <neon-button size="s" label="Complete" @click="progressNoOutput = 55" />
  </div>
  <h4 class="neon-h5">With label</h4>
  <div class="example--horizontal">
    <neon-linear-progress :value="progressLabel" label="Label goes here" :total="55" />
  </div>
  <h4 class="neon-h5">With completion icon</h4>
  <div class="example--horizontal">
    <neon-linear-progress :value="progressCompletedIcon" :total="55" completed-icon="check" color="success" />
  </div>
  <h4 class="neon-h5">With completed icon</h4>
  <div class="example--horizontal">
    <neon-linear-progress :value="progressLabel" label="Label goes here" :total="55" />
  </div>
</div>`;

  private sizeExamples = `<div class="example--vertical">
  <h4 class="neon-h5">Small</h4>
  <div class="example--horizontal">
    <neon-linear-progress size="s" :value="progressPercentage" />
  </div>
  <h4 class="neon-h5">Medium (default)</h4>
  <div class="example--horizontal">
    <neon-linear-progress :value="progressCounter" :total="55" />
  </div>
  <h4 class="neon-h5">Large</h4>
  <div class="example--horizontal">
    <neon-linear-progress size="l" :value="progressNoOutput" :total="55" :output="false" />
  </div>
</div>`;

  private colorExamples = `<div class="example--vertical">
  <h4 class="neon-h5">Default (primary)</h4>
  <div class="example--horizontal">
    <neon-linear-progress :value="progressPercentage" />
  </div>
  <h4 class="neon-h5">Color override</h4>
  <div class="example--horizontal">
    <neon-linear-progress color="info" :value="progressCounter" :total="55" />
  </div>
  <h4 class="neon-h5">Gradient</h4>
  <div class="example--horizontal">
    <neon-linear-progress color="success" alternate-color="success" :value="progressNoOutput" :total="55" :output="false" />
  </div>
</div>`;

  private examples = [
    {
      title: 'Linear progress styles',
      template: this.styleExamples,
      data: this.stylesData,
    },
    {
      title: 'Linear progress sizes',
      template: this.sizeExamples,
      data: this.stylesData,
    },
    {
      title: 'Linear progress colors',
      template: this.colorExamples,
      data: this.stylesData,
    },
  ];

  public mounted() {
    this.menuModel = Menu.getComponentConfig('NeonLinearProgress');
  }
}
