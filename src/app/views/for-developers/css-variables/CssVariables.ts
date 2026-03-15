import { computed, defineComponent, onMounted, ref } from 'vue';
import {
  NeonCard,
  NeonCardBody,
  NeonCardHeader,
  NeonCardList,
  type NeonCardListModel,
  NeonInline,
  NeonInput,
  NeonLabel,
  NeonLink,
  type NeonLoadOnDemandModel,
  NeonNote,
  NeonStack,
} from '@/neon';
import { CssVariablesService } from '@/app/service/CssVariablesService';
import type { CssVariable } from '@/app/model/css';
import CssVariableCard from '@/app/components/css-variable-card/CssVariableCard.vue';

export default defineComponent({
  name: 'CssVariables',
  components: {
    NeonCardList,
    NeonCard,
    NeonCardHeader,
    NeonCardBody,
    NeonInline,
    NeonInput,
    NeonLabel,
    NeonLink,
    NeonNote,
    NeonStack,
    CssVariableCard,
  },
  setup() {
    const variables = ref<Array<CssVariable>>([]);
    const filteredVariables = computed<Array<NeonCardListModel<CssVariable>>>(() => {
      const filterString = filter.value.toLowerCase();
      return variables.value
        .filter((variable) => variable.name.toLowerCase().includes(filterString))
        .map((variable) => ({ model: variable }));
    });

    const filter = ref<string>('');

    const loadOnDemandConfig = computed<NeonLoadOnDemandModel>(() => ({ total: filteredVariables.value.length }));

    onMounted(async () => {
      variables.value = await CssVariablesService.getVariables();
    });

    return {
      filteredVariables,
      filter,
      loadOnDemandConfig,
    };
  },
});
