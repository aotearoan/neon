import { defineComponent } from 'vue';
import { NeonAlertLevel } from '@/common/enums/NeonAlertLevel';
import type { NeonAlertPlacement } from '@/common/enums/NeonAlertPlacement';
import NeonIcon from '@/components/presentation/icon/NeonIcon.vue';
import NeonLink from '@/components/navigation/link/NeonLink.vue';
import type { NeonAlertModel } from '../NeonAlertModel';

/**
 * This is an internal component for rendering alerts.
 */
export default defineComponent({
  name: 'NeonAlertContainer',
  components: {
    NeonIcon,
    NeonLink,
  },
  props: {
    modelValue: { type: Array as () => Array<NeonAlertModel>, required: true },
    placement: { type: String as () => NeonAlertPlacement, required: true },
  },
  setup(props, { emit }) {
    const closeMessage = (id: number) => {
      emit(
        'update:modelValue',
        props.modelValue.filter((msg) => msg.id !== id),
      );
    };

    const icon = (level: NeonAlertLevel) => {
      switch (level) {
        case NeonAlertLevel.Info:
          return 'info-circle';
        case NeonAlertLevel.Success:
          return 'check-circle';
        case NeonAlertLevel.Warn:
          return 'exclamation-circle';
        case NeonAlertLevel.Error:
          return 'times-circle';
      }
    };

    return {
      closeMessage,
      icon,
    };
  },
});
