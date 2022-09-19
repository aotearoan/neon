import { defineComponent, onMounted, ref } from 'vue';
import { NeonCard, NeonCardBody, NeonLinearProgress } from '@/neon';
import ComponentDocumentation from '../../../components/component-documentation/ComponentDocumentation.vue';
import type { MenuModel } from '../../../Menu';
import { Menu } from '../../../Menu';

export default defineComponent({
  name: 'LinearProgress',
  components: {
    NeonCard,
    NeonCardBody,
    NeonLinearProgress,
    ComponentDocumentation,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('Indicate deterministic progress to users');
    const stylesData = ref({
      progressPercentage: 0.35,
      progressCounter: 12,
      progressNoOutput: 35,
      progressLabel: 22,
      progressCompletedIcon: 55,
    });

    const styleExamples = ref(`<div class="example--vertical">
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
</div>`);

    const sizeExamples = ref(`<div class="example--vertical">
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
</div>`);

    const colorExamples = ref(`<div class="example--vertical">
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
</div>`);

    const examples = ref([
      {
        title: 'Linear progress styles',
        template: styleExamples.value,
        data: stylesData.value,
      },
      {
        title: 'Linear progress sizes',
        template: sizeExamples.value,
        data: stylesData.value,
      },
      {
        title: 'Linear progress colors',
        template: colorExamples.value,
        data: stylesData.value,
      },
    ]);

    onMounted(() => menuModel.value = Menu.getComponentConfig('NeonLinearProgress'));

    return {
      menuModel,
      headline,
      stylesData,
      styleExamples,
      sizeExamples,
      colorExamples,
      examples,
    };
  },
});
