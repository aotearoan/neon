import { defineComponent, onMounted, onUnmounted, ref } from 'vue';
import { NeonOrientation } from '@/common/enums/NeonOrientation';

/**
 * Automatically handle horizontally overflowing content by placing it in a NeonSwiper component allowing for smooth
 * horizontal scrolling with all input devices.
 */
export default defineComponent({
  name: 'NeonSwiper',
  props: {
    /**
     * Display fade in / fade out styling when there is an overflow.
     */
    fade: { type: Boolean, default: true },
    /**
     * Swiper orientation, i.e. whether to manage overflow horizontally or vertically.
     */
    orientation: { type: String as () => NeonOrientation, default: NeonOrientation.Horizontal },
    /**
     * Hide the starting fade (left or top depending on the orientation).
     */
    hideFadeStart: { type: Boolean, default: false },
    /**
     * Hide the ending fade (right or bottom depending on the orientation).
     */
    hideFadeEnd: { type: Boolean, default: false },
  },
  setup(props) {
    const scrollable = ref<HTMLElement | null>(null);
    const isOverflowing = ref<boolean>(false);
    const isScrollStart = ref<boolean>(false);
    const isScrollEnd = ref<boolean>(false);

    const handleScroll = () => {
      if (scrollable.value) {
        if (props.orientation === NeonOrientation.Horizontal) {
          isScrollStart.value = scrollable.value.scrollLeft <= 0;
          isScrollEnd.value =
            scrollable.value.scrollLeft + scrollable.value.clientWidth > scrollable.value.scrollWidth - 1;
        } else {
          isScrollStart.value = scrollable.value.scrollTop <= 0;
          isScrollEnd.value =
            scrollable.value.scrollTop + scrollable.value.clientHeight > scrollable.value.scrollHeight - 1;
        }
      } else {
        isScrollStart.value = false;
        isScrollEnd.value = false;
      }
    };

    const handleResize = () => {
      if (scrollable.value) {
        if (props.orientation === NeonOrientation.Horizontal) {
          isOverflowing.value = scrollable.value.scrollWidth > scrollable.value.clientWidth;
        } else {
          isOverflowing.value = scrollable.value.scrollHeight > scrollable.value.clientHeight;
        }
      } else {
        isOverflowing.value = false;
      }

      handleScroll();
    };

    onMounted(() => {
      window.addEventListener('resize', handleResize, { passive: true });
      scrollable.value?.addEventListener('scroll', handleScroll, { passive: true });
      handleResize();
    });

    onUnmounted(() => {
      window.removeEventListener('resize', handleResize);
      scrollable.value?.removeEventListener('scroll', handleScroll);
    });

    return {
      isOverflowing,
      isScrollStart,
      isScrollEnd,
      scrollable,
    };
  },
});
