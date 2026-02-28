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
        alt: 'Mona Lisa - Leonardo da Vinci',
      },
      {
        src: baseUrl + 'images/image-carousel/pic-02.png',
        alt: 'Starry night - Vincent van Gogh',
      },
      {
        src: baseUrl + 'images/image-carousel/pic-03.png',
        alt: 'Sunset on the Seine at Lavacourt - Claude Monet',
      },
      {
        src: baseUrl + 'images/image-carousel/pic-04.png',
        alt: 'Water Lilies - Claude Monet',
      },
      {
        src: baseUrl + 'images/image-carousel/pic-05.png',
        alt: 'The Kiss - Gustav Klimt',
      },
      {
        src: baseUrl + 'images/image-carousel/pic-06.png',
        alt: 'Nighthawks - Edward Hopper',
      },
      {
        src: baseUrl + 'images/image-carousel/pic-07.png',
        alt: 'Study for A Sunday on La Grande Jatte - Georges Seurat',
      },
      {
        src: baseUrl + 'images/image-carousel/pic-08.png',
        alt: 'Impression, Sunrise [close up] -  Claude Monet',
      },
      {
        src: '/images/image-carousel/pic-09.png',
        alt: 'Gala Contemplating the Mediterranean Sea which at Twenty Meters Becomes the Portrait of Abraham Lincoln-Homage to Rothko - Salvador Dalí',
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
