import { defineComponent, onMounted, ref } from 'vue';
import { NeonCard, NeonCardBody, NeonPagination, NeonStack } from '@/neon';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';
import Editor from '@/app/components/editor/Editor.vue';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names,vue/no-reserved-component-names
  name: 'Pagination',
  components: {
    NeonPagination,
    NeonCard,
    NeonCardBody,
    NeonStack,
    ComponentDocumentation,
    Editor,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('Display pagination controls for a list of items');

    const template = `<neon-pagination :total="77" :page-size="20" :page="1" url-template="https://aotearoan.com?page={page}" />
<neon-pagination :total="100" :page-size="20" :page="1" url-template="https://aotearoan.com?page={page}" />
<neon-pagination :total="120" :page-size="20" :page="1" url-template="https://aotearoan.com?page={page}" />
<neon-pagination :total="4936" :page-size="20" :page="2" url-template="https://aotearoan.com?page={page}" />
<neon-pagination :total="4936" :page-size="20" :page="3" url-template="https://aotearoan.com?page={page}" />
<neon-pagination :total="4936" :page-size="20" :page="4" url-template="https://aotearoan.com?page={page}" />
<neon-pagination :total="4936" :page-size="20" :page="5" url-template="https://aotearoan.com?page={page}" />
<neon-pagination
  :total="4936"
  :page-size="20"
  :page="243"
  url-template="https://aotearoan.com?page={page}"
/>
<neon-pagination
  :total="4936"
  :page-size="20"
  :page="244"
  url-template="https://aotearoan.com?page={page}"
/>
<neon-pagination
  :total="4936"
  :page-size="20"
  :page="245"
  url-template="https://aotearoan.com?page={page}"
/>
<neon-pagination
  :total="4936"
  :page-size="20"
  :page="246"
  url-template="https://aotearoan.com?page={page}"
/>
<neon-pagination
  :total="4936"
  :page-size="20"
  :page="247"
  url-template="https://aotearoan.com?page={page}"
/>
<neon-pagination
  :total="4936"
  :page-size="20"
  :page="9"
  url-template="https://aotearoan.com?page={page}"
  display-first-and-last
/>`;

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonPagination')));

    return {
      menuModel,
      headline,
      template,
    };
  },
});
