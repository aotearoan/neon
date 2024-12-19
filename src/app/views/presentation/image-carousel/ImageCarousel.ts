import { defineComponent, onMounted, ref } from 'vue';
import { NeonCard, NeonCardBody, NeonCardHeader, NeonImageCarousel, NeonStack } from '@/neon';
import Editor from '@/app/components/editor/Editor.vue';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';

export default defineComponent({
  name: 'ImageDevice',
  components: {
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
    NeonStack,
    NeonImageCarousel,
    ComponentDocumentation,
    Editor,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('Display multiple images in a carousel navigation component');

    const template = `<neon-image-carousel :images="images" id="carousel-id" class="image-carousel" />`;

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonImageCarousel')));

    const baseUrl = import.meta.env.VITE_BASE_URL;

    const images = [
      {
        src: baseUrl + 'images/image-carousel/pic-01.png',
        alt: 'Pic 1',
      },
      {
        src: baseUrl + 'images/image-carousel/pic-02.png',
        alt: 'Pic 2',
      },
      {
        src: baseUrl + 'images/image-carousel/pic-03.png',
        alt: 'Pic 3',
      },
      {
        src: baseUrl + 'images/image-carousel/pic-04.png',
        alt: 'Pic 4',
      },
      {
        src: baseUrl + 'images/image-carousel/pic-05.png',
        alt: 'Pic 5',
      },
      {
        src: baseUrl + 'images/image-carousel/pic-06.png',
        alt: 'Pic 6',
      },
      {
        src: baseUrl + 'images/image-carousel/pic-07.png',
        alt: 'Pic 7',
      },
      {
        src: baseUrl + 'images/image-carousel/pic-08.png',
        alt: 'Pic 8',
      },
    ];

    return {
      menuModel,
      headline,
      template,
      images,
      baseUrl,
    };
  },
});
