import { defineComponent, onMounted, ref } from 'vue';
import { NeonCard, NeonCardBody, NeonCardHeader, NeonInline, NeonListLayout, NeonPage } from '@/neon';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';
import Editor from '@/app/components/editor/Editor.vue';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';
import { CardListModelFixture } from '@/fixtures/CardListModelFixture';
import { PaginationFixture } from '@/fixtures/PaginationFixture';
import { breadcrumbsFixture } from '@/fixtures/navigation/breadcrumbs/BreadcrumbsFixture';

export default defineComponent({
  name: 'ListLayout',
  components: {
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
    NeonInline,
    NeonPage,
    NeonListLayout,
    ComponentDocumentation,
    Editor,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('List page layout component');

    const items = CardListModelFixture(20);
    const pagination = PaginationFixture(100);
    const breadcrumbs = breadcrumbsFixture();

    const templateAll = `<neon-list-layout
  title="Inventory"
  :items="items"
  :pagination="pagination"
  :breadcrumbs="breadcrumbs"
>
  <template #actions>
    <neon-button button-style="outline" color="high-contrast" label="Upload multiple items" />
    <neon-button label="New item" />
  </template>
  <template #filters>
    <neon-filter-bar>
      <neon-search-filter v-model="searchString" search-count="searchCount" />
    </neon-filter-bar>
  </template>
  <template #header>
    <span>Item</span>
    <span>Price</span>
  </template>
  <template #empty-state>
    <neon-empty-state
      title="No items found"
      description="Try changing your search criteria"
    />
  </template>
</neon-list-layout>`;

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonListLayout')));

    return {
      menuModel,
      headline,
      templateAll,
      items,
      pagination,
      breadcrumbs,
    };
  },
});
