import { defineComponent, onMounted, onUnmounted } from 'vue';

/**
 * A "page" component, this is defined as a wrapper around the contents (NeonGrid, etc) and footer which provides the
 * correct responsive layout accounting for NeonTopNav and NeonSideNav components being used.
 */
export default defineComponent({
  name: 'NeonPage',
  setup() {

    const handleResize = () => {
      const vh = (window.innerHeight * 0.01).toFixed(2);
      document.documentElement.style.setProperty('--vh', `${vh}px`);
      const vw = (window.innerWidth * 0.01).toFixed(2);
      document.documentElement.style.setProperty('--vw', `${vw}px`);
    };

    onMounted(() => {
      window.addEventListener('resize', handleResize, { passive: true });
      handleResize();
    });

    onUnmounted(() => {
      window.removeEventListener('resize', handleResize);
    });
  },
});
