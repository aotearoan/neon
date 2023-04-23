import { defineComponent } from 'vue';
import NeonIcon from '@/components/presentation/icon/NeonIcon.vue';
import type { NeonToastModel } from '../NeonToastModel';
import type { NeonVerticalPosition } from '@/common/enums/NeonVerticalPosition';

/**
 * This is an internal component for rendering alerts.
 */
export default defineComponent({
  name: 'NeonToastContainer',
  components: {
    NeonIcon,
  },
  props: {
    modelValue: { type: Object as () => Array<NeonToastModel>, required: true },
    placement: { type: String as () => NeonVerticalPosition, required: true },
  },
  setup(props, { emit }) {
    const closeMessage = (id: number) => {
      emit(
        'update:modelValue',
        props.modelValue.filter((msg) => msg.id !== id),
      );
    };

    return {
      closeMessage,
    };
  },
});
