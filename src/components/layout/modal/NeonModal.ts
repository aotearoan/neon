import { defineComponent, onMounted, onUnmounted, ref, watch } from 'vue';
import { NeonClosableUtils } from '@/common/utils/NeonClosableUtils';
import NeonButton from '@/components/user-input/button/NeonButton.vue';
import { NeonResponsive } from '@/common/enums/NeonResponsive';

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
    /**
     * Increase the opacity so that the page behind the modal is no longer visible
     */
    opaque: { type: Boolean, default: false },
    /**
     * Keep the top nav visible when the modal is open
     */
    showTopNav: { type: Boolean, default: false },
    /**
     * Responsive breakpoint below which point the modal becomes fullscreen.
     * Supports NeonResponsive.Mobile & NeonResponsive.MobileLarge.
     */
    breakpoint: { type: String as () => NeonResponsive, default: NeonResponsive.Mobile },
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
        closableUtils.value = (modal.value && new NeonClosableUtils(modal.value, close)) || null;
      }
    });

    onUnmounted(() => {
      closableUtils.value?.destroy();
    });

    watch(
      () => props.open,
      (value) => {
        if (value) {
          closableUtils.value?.open();
        } else {
          closableUtils.value?.close();
        }
      },
      { immediate: true },
    );

    return {
      modal,
      close,
    };
  },
});
