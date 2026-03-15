import { computed, defineComponent, onMounted, ref } from 'vue';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';
import Editor from '@/app/components/editor/Editor.vue';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';
import {
  NeonButton,
  NeonCard,
  NeonCardBody,
  NeonCardList,
  type NeonCardListModel,
  NeonInline,
  NeonInput,
  NeonStack,
} from '@/neon';
import type { CardListModel } from '@/fixtures/CardListModelFixture';
import { CardListModelFixture } from '@/fixtures/CardListModelFixture';

export default defineComponent({
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

    const onDemandTemplate = `<neon-card-list
  :items="onDemandFilteredModel"
  :load-on-demand="onDemandConfig"
  color="brand"
  @show-more="onDemandShowMore"
>
  <template #header>
    <neon-input v-model="onDemandFilter" placeholder="Filter results…" size="s" />
  </template>
  <template #card="{ model, index }">
    <div class="card-contents">
      <span class="card-title">{{ model.title }}</span>
      <span class="card-description">{{ model.description }}</span>
    </div>
  </template>
</neon-card-list>`;

    const onDemandModel = ref<Array<NeonCardListModel<CardListModel>>>(
      CardListModelFixture(5, 'http://getskeleton.com'),
    );
    const onDemandFilteredModel = computed<Array<NeonCardListModel<CardListModel>>>(() =>
      onDemandFilter.value === ''
        ? onDemandModel.value
        : onDemandModel.value.filter(
            (item) => (item.model.title + item.model.description).indexOf(onDemandFilter.value) >= 0,
          ),
    );
    const onDemandFilter = ref<string>('');
    const onDemandConfig = computed(() => ({
      total: onDemandFilter.value === '' ? 10 : onDemandFilteredModel.value.length,
    }));
    const onDemandShowMore = () => {
      onDemandModel.value = [...onDemandModel.value, ...CardListModelFixture(5, 'http://getskeleton.com', 5)];
    };

    const paginationTemplate = `<neon-card-list :items="paginationFilteredModel" :pagination="paginationConfig" color="brand">
  <template #header>
    <neon-input v-model="paginationFilter" placeholder="Filter results…" size="s" />
  </template>
  <template #card="{ model, index }">
    <div class="card-contents">
      <span class="card-title">{{ model.title }}</span>
      <span class="card-description">{{ model.description }}</span>
    </div>
  </template>
</neon-card-list>`;

    const paginationModel = ref<Array<NeonCardListModel<CardListModel>>>(
      CardListModelFixture(5, 'http://getskeleton.com'),
    );
    const paginationFilteredModel = computed<Array<NeonCardListModel<CardListModel>>>(() =>
      paginationFilter.value === ''
        ? paginationModel.value
        : paginationModel.value.filter(
            (item) => (item.model.title + item.model.description).indexOf(paginationFilter.value) >= 0,
          ),
    );
    const paginationFilter = ref<string>('');
    const paginationConfig = computed(() => ({
      page: 1,
      urlTemplate: 'entity/?page={page}',
      pageSize: 2,
      total: 100,
    }));

    const selectableTemplate = `<neon-card-list
  :items="selectableFilteredModel"
  :load-on-demand="selectableConfig"
  color="brand"
  :selectable="true"
  @toggle-selected="toggleSelected"
>
  <template #header>
    <neon-input v-model="selectableFilter" placeholder="Filter results…" size="s" />
  </template>
  <template #card="{ model, index }">
    <div class="card-contents">
      <span class="card-title">{{ model.title }}</span>
      <span class="card-description">{{ model.description }}</span>
    </div>
  </template>
</neon-card-list>`;

    const selectableModel = ref<Array<NeonCardListModel<CardListModel>>>(CardListModelFixture(5, undefined, 0, true));
    const selectableFilteredModel = computed<Array<NeonCardListModel<CardListModel>>>(() =>
      selectableFilter.value === ''
        ? selectableModel.value
        : selectableModel.value.filter(
            (item) => (item.model.title + item.model.description).indexOf(selectableFilter.value) >= 0,
          ),
    );
    const selectableFilter = ref<string>('');
    const selectableConfig = computed(() => ({
      page: 1,
      urlTemplate: 'entity/?page={page}',
      pageSize: 2,
      total: 100,
    }));

    const toggleSelected = (id: string, selected: boolean) => {
      selectableModel.value.filter((item) => item.model.id === id).map((item) => (item.selected = selected));
      selectableModel.value = [...selectableModel.value];
    };

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonCardList')));

    return {
      menuModel,
      headline,
      onDemandModel,
      onDemandFilteredModel,
      onDemandFilter,
      onDemandConfig,
      onDemandShowMore,
      onDemandTemplate,
      paginationFilteredModel,
      paginationFilter,
      paginationConfig,
      paginationTemplate,
      selectableFilteredModel,
      selectableFilter,
      selectableConfig,
      selectableTemplate,
      toggleSelected,
    };
  },
});
