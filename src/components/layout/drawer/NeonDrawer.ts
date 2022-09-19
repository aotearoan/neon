import { defineComponent, onMounted, onUnmounted, ref, watch } from 'vue';
import { NeonPosition } from '../../../common/enums/NeonPosition';
import { NeonClosableUtils } from '../../../common/utils/NeonClosableUtils';

/**
 * A drawer is a slide out panel for representing data which may be secondary or not fit on the main screen. Examples
 * are a responsive navigation menu, more details of a selected item on the page. Drawers can be opened from top,
 * bottom, left or right and an overlay covers the screen to focus more attention on the drawer contents.
 */
export default defineComponent({
  name: 'NeonDrawer',
  props: {
    /**
     * Set the drawer to visible.
     */
    open: { type: Boolean, required: true },
    /**
     * Whether the user is allowed to dismiss the modal by clicking outside the modal or pressing escape.
     */
    dismissible: { type: Boolean, default: true },
    /**
     * If true, remove the padding applied to the drawer.
     */
    fullWidth: { type: Boolean, default: false },
    /**
     * The location of the drawer.
     */
    position: { type: String as () => NeonPosition, default: NeonPosition.Left },
    /**
     * Display a semi-transparent overlay under the drawer, but over the rest of the page.
     */
    overlay: { type: Boolean, default: true },
  },
  emits: [
    /**
     * Emitted when the drawer is closed.
     * @type {void}
     */
    'close',
  ],
  setup(props, { emit }) {
    const drawer = ref<HTMLDivElement | null>(null);
    const closableUtils = ref<NeonClosableUtils | null>(null);

    const onClose = () => {
      emit('close');
    };

    const close = () => {
      if (props.open) {
        onClose();
      }
    };

    onMounted(() => {
      if (props.dismissible) {
        closableUtils.value = drawer.value && new NeonClosableUtils(drawer.value, close) || null;
      }
    });

    watch(
      () => props.open,
      (value) => value ? closableUtils.value?.open() : closableUtils.value?.close(),
      { immediate: true },
    );

    onUnmounted(() => {
      closableUtils.value?.destroy();
    });

    return {
      drawer,
    };
  },
});
