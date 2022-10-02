import { defineComponent, onMounted, ref } from 'vue';
import { NeonCard, NeonCardBody, NeonGrid, NeonGridArea, NeonPage, NeonSideNav, NeonTopNav } from '@/neon';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';
import { NeonResponsive } from '@/common/enums/NeonResponsive';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Page',
  components: {
    NeonCard,
    NeonCardBody,
    NeonGrid,
    NeonGridArea,
    NeonPage,
    NeonSideNav,
    NeonTopNav,
    ComponentDocumentation,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('The basic container for a page');

    const examples = ref([
      {
        title: 'Page example',
        template: `
          <neon-page>
          <template #top-nav>
            <neon-top-nav>
              <span>Top Nav content</span>
            </neon-top-nav>
          </template>
          <template #content>
            <neon-side-nav>
              <template #sticky>
                <span>Side nav content</span>
              </template>
            </neon-side-nav>
            <neon-grid id="content" :layouts="layouts">
              <neon-grid-area id="section-content">
                <span>Grid area</span>
              </neon-grid-area>
            </neon-grid>
          </template>
          </neon-page>`,
        data: {
          layouts: [
            {
              breakpoint: NeonResponsive.All,
              grid: [['section-content']],
            },
          ],
        },
        fixedContent: true,
      },
    ]);

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonPage')));

    return {
      menuModel,
      headline,
      examples,
    };
  },
});
