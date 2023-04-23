import { defineComponent, onMounted, ref } from 'vue';
import { NeonButton, NeonCard, NeonCardBody, NeonLinearProgress } from '@/neon';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';
import Editor from '@/app/components/editor/Editor.vue';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';

export default defineComponent({
  name: 'LinearProgress',
  components: {
    NeonButton,
    NeonCard,
    NeonCardBody,
    NeonLinearProgress,
    ComponentDocumentation,
    Editor,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('Indicate deterministic progress to users');
    const progressPercentage = ref(0.35);
    const progressCounter = ref(12);
    const progressNoOutput = ref(35);
    const progressLabel = ref(22);
    const progressCompletedIcon = ref(55);

    const styleExamples = `<div>
  <neon-linear-progress :value="progressPercentage" />
  <neon-button size="s" label="Complete" @click="progressPercentage = 1.00" />
</div>
<div>
  <neon-linear-progress :value="progressCounter" :total="55" />
  <neon-button size="s" label="Complete" @click="progressCounter = 55" />
</div>
<div>
  <neon-linear-progress :value="progressNoOutput" :total="55" :output="false" />
  <neon-button size="s" label="Complete" @click="progressNoOutput = 55" />
</div>
<neon-linear-progress :value="progressLabel" label="Label goes here" :total="55" />
<neon-linear-progress :value="progressCompletedIcon" :total="55" completed-icon="check" color="success" />
<neon-linear-progress :value="progressLabel" label="Label goes here" :total="55" />`;

    const sizeExamples = `<neon-linear-progress size="s" :value="progressPercentage" />
<neon-linear-progress :value="progressCounter" :total="55" />
<neon-linear-progress size="l" :value="progressNoOutput" :total="55" :output="false" />`;

    const colorExamples = `<neon-linear-progress :value="progressPercentage" />
<neon-linear-progress color="info" :value="progressCounter" :total="55" />
<neon-linear-progress color="success" alternate-color="success" :value="progressNoOutput" :total="55" :output="false" />`;

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonLinearProgress')));

    return {
      menuModel,
      headline,
      progressPercentage,
      progressCounter,
      progressNoOutput,
      progressLabel,
      progressCompletedIcon,
      styleExamples,
      sizeExamples,
      colorExamples,
    };
  },
});
