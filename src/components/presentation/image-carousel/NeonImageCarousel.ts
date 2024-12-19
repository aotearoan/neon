import { defineComponent, onMounted, onUnmounted, ref } from 'vue';
import type { NeonCarouselImage } from '@/common/models/NeonCarouselImage';
import NeonLink from '@/components/navigation/link/NeonLink.vue';
import NeonButton from '@/components/user-input/button/NeonButton.vue';

/**
 * <p>
 *   The <strong>NeonImageCarousel</strong> is used to display a carousel of images for the user to swipe
 *   through. NOTE: It is recommended to explicitly set the width & height of the carousel via CSS, this will
 *   ensure it will not be impacted by images with different aspect ratios. Images are automatically resized to fit the
 *   carousel dimensions.
 * </p>
 */
export default defineComponent({
  name: 'NeonImageCarousel',
  components: {
    NeonButton,
    NeonLink,
  },
  props: {
    /**
     * The images to be displayed in the carousel.
     */
    images: { type: Array as () => Array<NeonCarouselImage>, required: true },
    /**
     * Provide an alternative image count label. This can be useful for translations. The default is e.g.
     * <em>2 images</em>.
     */
    imageCountLabel: { type: String, default: undefined },
    /**
     * Provide an alternative label for the Previous button.
     */
    previousLabel: { type: String, default: 'Previous' },
    /**
     * Provide an alternative label for the Next button.
     */
    nextLabel: { type: String, default: 'Next' },
  },
  emits: [
    /**
     * The index of the currently visible image.
     *
     * @type {number}
     */
    'current-image',
  ],
  setup(props, { emit }) {
    const initialised = ref<boolean>(false);
    const currentImage = ref<number>(0);
    const carouselItems = ref<HTMLUListElement | null>(null);
    const carouselItem = ref<Array<HTMLLIElement>>([]);
    const observers = ref<Array<IntersectionObserver>>([]);

    const changeImage = (index: number) => {
      if (index !== currentImage.value) {
        currentImage.value = index;
        emit('current-image', index);
      }
    };

    const scrollTo = (index: number) => {
      if (carouselItems.value && props.images.length > 0) {
        changeImage(index);
        carouselItems.value.scrollTo(carouselItems.value.clientWidth * index, 0);
      }
    };

    const next = () => {
      if (currentImage.value < props.images.length - 1) {
        scrollTo(currentImage.value + 1);
      }
    };

    const previous = () => {
      if (currentImage.value !== 0) {
        scrollTo(currentImage.value - 1);
      }
    };

    onMounted(() => {
      const options = {
        root: carouselItems.value,
        rootMargin: '0px',
        threshold: 0.6,
      };

      observers.value = carouselItem.value.map((el, index) => {
        const obs = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            // filter out the observations on initialization
            if (initialised.value && entry.isIntersecting) {
              changeImage(index);
            }
          });
        }, options);
        obs.observe(el);

        return obs;
      });

      setTimeout(() => {
        // initialise scroll position to first element
        if (carouselItems.value && carouselItems.value.scrollLeft !== 0) {
          carouselItems.value.scrollLeft = 0;
        }
        initialised.value = true;
      }, 50);
    });

    onUnmounted(() => {
      observers.value.forEach((observer) => observer.disconnect());
    });

    return {
      emit,
      currentImage,
      carouselItem,
      carouselItems,
      initialised,
      next,
      previous,
      scrollTo,
    };
  },
});
