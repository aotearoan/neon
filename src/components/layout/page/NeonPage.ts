import { defineComponent, onMounted, onUnmounted } from 'vue';
import { NeonPageAlignment } from '@/common/enums/NeonPageAlignment';

/**
 * A "page" component, this is defined as a wrapper around the contents (NeonGrid, etc) and footer which provides the
 * correct responsive layout accounting for NeonTopNav and NeonSideNav components being used.
 */
export default defineComponent({
  name: 'NeonPage',
  props: {
    /**
     * Page alignment: either left aligned or center aligned.
     */
    pageAlign: { type: String as () => NeonPageAlignment, default: NeonPageAlignment.CENTER },
  },
  setup(_props, { slots }) {
    const handleResize = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}rem`);
      const vw = window.innerWidth * 0.01;
      document.documentElement.style.setProperty('--vw', `${vw}rem`);
    };

    onMounted(() => {
      window.addEventListener('resize', handleResize, { passive: true });
      handleResize();
    });

    onUnmounted(() => {
      window.removeEventListener('resize', handleResize);
    });

    return { slots };
  },
});
