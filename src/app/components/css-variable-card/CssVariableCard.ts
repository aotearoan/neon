import { defineComponent } from 'vue';
import { NeonInline, NeonLabel, NeonStack } from '@/neon';
import type { CssVariable } from '@/app/model/css';

export default defineComponent({
  name: 'CssVariableCard',
  components: {
    NeonInline,
    NeonLabel,
    NeonStack,
  },
  props: {
    variable: { type: Object as () => CssVariable, required: true },
  },
  setup(_props) {
    return {};
  },
});
