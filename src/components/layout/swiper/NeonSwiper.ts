import { defineComponent, onMounted, onUnmounted, ref } from 'vue';

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
  },
  setup() {
    const scrollable = ref<HTMLElement | null>(null);
    const isOverflowing = ref<boolean>(false);
    const isScrollStart = ref<boolean>(false);
    const isScrollEnd = ref<boolean>(false);

    const handleScroll = () => {
      if (scrollable.value) {
        isScrollStart.value = scrollable.value.scrollLeft <= 0;
        isScrollEnd.value =
          scrollable.value.scrollLeft + scrollable.value.clientWidth > scrollable.value.scrollWidth - 1;
      } else {
        isScrollStart.value = false;
        isScrollEnd.value = false;
      }
    };

    const handleResize = () => {
      if (scrollable.value) {
        isOverflowing.value = scrollable.value.scrollWidth > scrollable.value.clientWidth;
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
