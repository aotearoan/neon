import { defineComponent, onMounted, ref } from 'vue';
import { NeonCard, NeonCardBody, NeonCardHeader, NeonSearchFilter, NeonStack } from '@/neon';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';
import Editor from '@/app/components/editor/Editor.vue';

export default defineComponent({
  name: 'SearchFilter',
  components: {
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
    NeonSearchFilter,
    NeonStack,
    ComponentDocumentation,
    Editor,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('Filter items with a text search');

    const count = ref(100);
    const searchValue = ref('');

    const sizeExamples = `<neon-search-filter v-model="searchValue" :search-count="count" size="s" @on-search="updateSearchCount" />
<neon-search-filter v-model="searchValue" :search-count="count" @on-search="updateSearchCount" />
<neon-search-filter v-model="searchValue" :search-count="count" size="l" @on-search="updateSearchCount" />`;

    const colorExamples = `<neon-search-filter v-model="searchValue" :search-count="count" @on-search="updateSearchCount" />
<neon-search-filter
  v-model="searchValue"
  :search-count="count"
  color="brand"
  @on-search="updateSearchCount"
/>
<neon-search-filter
  v-model="searchValue"
  :search-count="count"
  color="primary"
  @on-search="updateSearchCount"
/>`;

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonSearchFilter')));

    return {
      count,
      menuModel,
      headline,
      sizeExamples,
      colorExamples,
      searchValue,
      updateSearchCount: () => (count.value = Math.floor(20 + Math.random() * 500)),
    };
  },
});
