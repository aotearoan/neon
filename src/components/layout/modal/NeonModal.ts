import { defineComponent, onMounted, onUnmounted, ref, watch } from 'vue';
import { NeonClosableUtils } from '../../../common/utils/NeonClosableUtils';
import NeonButton from '../../user-input/button/NeonButton.vue';

/**
 * A modal dialog component. This will be rendered above the content of the main window and can either be dismissed by the user or configured to require user interaction before dismissal.
 */
export default defineComponent({
  name: 'NeonDrawer',
  components: {
    NeonButton,
  },
  props: {
    /**
     * Whether the modal is currently open.
     */
    open: { type: Boolean, required: true },
    /**
     * Whether the user is allowed to dismiss the modal by clicking outside the modal or pressing escape.
     */
    dismissible: { type: Boolean, default: true },
  },
  emits: [
    /**
     * Emitted when the modal is closed.
     * @type {void}
     */
    'close',
  ],
  setup(props, { emit }) {
    const modal = ref(null);
    const closableUtils = ref<NeonClosableUtils | null>(null);

    const onClose = () => {
      emit('close');
    };

    const close = () => {
      if (props.open && props.dismissible) {
        onClose();
      }
    };

    onMounted(() => {
      if (props.dismissible) {
        closableUtils.value = modal.value && new NeonClosableUtils(modal.value, close) || null;
      }
    });

    onUnmounted(() => {
      closableUtils.value?.destroy();
    });

    watch(() => props.open,
      (value) => {
        if (value) {
          closableUtils.value?.open();
        }
      },
      { immediate: true });

    return {
      modal,
      close,
    };
  },
});
