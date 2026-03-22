import type { NeonDialogMessage } from '@/model/feedback/dialog/NeonDialogMessage';
import { NeonDialogService } from '@/utils/feedback/dialog/NeonDialogService';
import { defineComponent } from 'vue';
import NeonDialog from '../../dialog/NeonDialog.vue';

/**
 * This is an internal component for rendering alerts.
 */
export default defineComponent({
  name: 'NeonDialogContainer',
  components: {
    NeonDialog,
  },
  props: {
    modelValue: { type: Object as () => NeonDialogMessage },
  },
  setup(props, { emit }) {
    const onButtonClick = (choice: boolean) => {
      emit('update:modelValue', { ...props.modelValue, open: false });
      setTimeout(() => {
        emit('update:modelValue', NeonDialogService.defaultDialogMessage);
      }, 1000);
      NeonDialogService.resolve(choice);
    };

    return {
      onButtonClick,
    };
  },
});
