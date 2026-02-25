import { computed, defineComponent, onMounted, ref } from 'vue';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';
import Editor from '@/app/components/editor/Editor.vue';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';
import { NeonButton, NeonCard, NeonCardBody, NeonCardList, NeonInline, NeonInput, NeonStack } from '@/neon';
import type { CardListModel } from '@/fixtures/CardListModelFixture';
import { cardListModelFixture } from '@/fixtures/CardListModelFixture';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'CardList',
  components: {
    NeonButton,
    NeonCardList,
    NeonCard,
    NeonCardBody,
    NeonStack,
    NeonInline,
    NeonInput,
    ComponentDocumentation,
    Editor,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('Display a list of cards');

    const template = `<neon-card-list :model="model" :total="total" color="brand" @show-more="onShowMore">
  <template #header>
    <neon-input v-model="filter" placeholder="Filter results…" size="s" />
  </template>
  <template #card="{ cardModel, index }">
    <neon-stack gap="s">
      <h6>{{ cardModel.title }}</h6>
      <span class="neon-color-low-contrast">{{ cardModel.description }}</span>
    </neon-stack>
  </template>
</neon-card-list>`;

    const linkTemplate = `<neon-card-list :model="linkFilteredModel" :clickable="true" :total="linkTotal" color="brand" @show-more="onLinkShowMore">
  <template #header>
    <neon-input v-model="linkFilter" placeholder="Filter results…" size="s" />
  </template>
  <template #card="{ cardModel, index }">
    <div class="card-contents">
      <span class="card-title">{{ cardModel.title }}</span>
      <span class="card-description">{{ cardModel.description }}</span>
    </div>
  </template>
</neon-card-list>`;

    const model = ref<Array<CardListModel>>(cardListModelFixture(5));
    const filteredModel = computed<Array<CardListModel>>(() =>
      filter.value === ''
        ? model.value
        : model.value.filter((item) => (item.title + item.description).indexOf(filter.value) >= 0),
    );
    const filter = ref<string>('');
    const total = computed<number>(() => (filter.value === '' ? 10 : filteredModel.value.length));

    const onShowMore = () => {
      model.value = [...model.value, ...cardListModelFixture(5, undefined, 5)];
    };

    const linkModel = ref<Array<CardListModel>>(cardListModelFixture(5, 'http://getskeleton.com'));
    const linkFilteredModel = computed<Array<CardListModel>>(() =>
      linkFilter.value === ''
        ? linkModel.value
        : linkModel.value.filter((item) => (item.title + item.description).indexOf(linkFilter.value) >= 0),
    );
    const linkFilter = ref<string>('');
    const linkTotal = computed<number>(() => (linkFilter.value === '' ? 10 : linkFilteredModel.value.length));

    const onLinkShowMore = () => {
      linkModel.value = [...linkModel.value, ...cardListModelFixture(5, 'http://getskeleton.com', 5)];
    };

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonCardList')));

    return {
      menuModel,
      headline,
      template,
      filteredModel,
      total,
      filter,
      onShowMore,
      linkModel,
      linkFilteredModel,
      linkFilter,
      linkTotal,
      onLinkShowMore,
      linkTemplate,
    };
  },
});
