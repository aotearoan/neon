import { defineComponent, onMounted, ref } from 'vue';
import {
  NeonCard,
  NeonCardBody,
  NeonCardHeader,
  NeonGrid,
  NeonGridArea,
  NeonLink,
  NeonResponsive,
  NeonStack,
} from '@/neon';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';
import Editor from '@/app/components/editor/Editor.vue';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Grid',
  components: {
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
    NeonGrid,
    NeonGridArea,
    NeonLink,
    NeonStack,
    ComponentDocumentation,
    Editor,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('Use CSS grid for page content');

    const layouts = [
      {
        breakpoint: NeonResponsive.All,
        grid: [['section-content']],
      },
    ];

    const template = `<neon-grid id="content" :layouts="layouts">
  <neon-grid-area id="section-content">
    <span>Grid area (scroll me)</span>
  </neon-grid-area>
</neon-grid>`;

    const layoutExample = ref(`const layouts = [
  {
    breakpoint: NeonResponsive.LargerThanTablet,
    grid: [['area1', 'area2', 'area3', 'area4']],
  },
  {
    breakpoint: NeonResponsive.Tablet,
    grid: [
      ['area1', 'area1', 'area2'],
      ['area3', 'area4', 'area4'],
    ],
  },
  {
    breakpoint: NeonResponsive.MobileLarge,
    grid: [
      ['area1'],
      ['area2'],
      ['area3'],
      ['area4'],
    ],
  },
];`);

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonGrid')));

    return {
      menuModel,
      headline,
      template,
      layoutExample,
      layouts,
    };
  },
});
