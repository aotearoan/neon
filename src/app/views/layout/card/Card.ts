import { defineComponent, onMounted, ref } from 'vue';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';
import { NeonButton, NeonCard, NeonCardBody, NeonCardFooter, NeonCardHeader, NeonStack } from '@/neon';
import Editor from '@/app/components/editor/Editor.vue';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Card',
  components: {
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
    NeonCardFooter,
    NeonButton,
    NeonStack,
    ComponentDocumentation,
    Editor,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('A component for content layout within a page');

    const baseUrl = import.meta.env.VITE_BASE_URL;

    const verticalExample = `<neon-card>
  <neon-card-header>
    <h4>Card header</h4>
  </neon-card-header>
  <neon-card-body>
    <p>Card body</p>
  </neon-card-body>
  <neon-card-body>
    <p>Another card body. Cards can also have full width sections without an padding (this is useful for adding images, charts, etc). The following section is full width:</p>
  </neon-card-body>
  <neon-card-body :full-width="true">
    <img :src="baseUrl + 'images/taranaki.jpg'" />
  </neon-card-body>
  <neon-card-body>
    <p>Place card actions inside the <strong>NeonCardFooter</strong> below:</p>
  </neon-card-body>
  <neon-card-footer>
    <neon-button label="Cancel" />
    <neon-button label="Accept" color="primary" />
  </neon-card-footer>
</neon-card>`;

    const horizontalExample = `<neon-card orientation="horizontal">
  <neon-card-header>
    <h4>Header</h4>
  </neon-card-header>
  <neon-card-body>
    <p>Spicy jalapeno bacon ipsum dolor amet biltong porchetta cupim sausage pork loin. Ham porchetta brisket.</p>
  </neon-card-body>
  <neon-card-footer>
    <neon-button size="s" label="Cancel" />
    <neon-button size="s" label="Accept" color="primary" />
  </neon-card-footer>
</neon-card>`;

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonCard')));

    return {
      menuModel,
      headline,
      horizontalExample,
      verticalExample,
      baseUrl,
    };
  },
});
