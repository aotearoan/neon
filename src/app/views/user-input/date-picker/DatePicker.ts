import { defineComponent, onMounted, ref } from 'vue';
import { NeonCard, NeonCardBody, NeonCardHeader, NeonDatePicker, NeonDateUtils, NeonLink } from '@/neon';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';
import Editor from '@/app/components/editor/Editor.vue';

export default defineComponent({
  name: 'DatePicker',
  components: {
    ComponentDocumentation,
    Editor,
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
    NeonDatePicker,
    NeonLink,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('Enhanced HTML native date picker');

    const today = new Date();
    today.setDate(today.getDate() + 2);
    const dateSmall = ref<string>(NeonDateUtils.dateToIso(today));
    const dateMedium = ref<string>(NeonDateUtils.dateToIso(today));
    const dateLarge = ref<string>(NeonDateUtils.dateToIso(today));
    const dateDisabled = ref<string>(NeonDateUtils.dateToIso(today));
    const datesDisabled = ref<string>(NeonDateUtils.dateToIso(today));
    const dateValidRange = ref<string>(NeonDateUtils.dateToIso(today));
    const dateInfo = ref<string>(NeonDateUtils.dateToIso(today));
    const datePrimary = ref<string>(NeonDateUtils.dateToIso(today));
    const dateLocale = ref<string>(NeonDateUtils.dateToIso(today));
    const datePlacement = ref<string>(NeonDateUtils.dateToIso(today));

    const restrictedDate = new Date();
    restrictedDate.setDate(restrictedDate.getDate() - 5);
    const minDate = ref<string>(NeonDateUtils.dateToIso(restrictedDate));
    restrictedDate.setDate(restrictedDate.getDate() + 10);
    const maxDate = ref<string>(NeonDateUtils.dateToIso(restrictedDate));

    const disabledDates: Array<string> = [];
    today.setDate(today.getDate() + 1);
    disabledDates.push(NeonDateUtils.dateToIso(today));
    today.setDate(today.getDate() + 1);
    disabledDates.push(NeonDateUtils.dateToIso(today));
    today.setDate(today.getDate() + 1);
    disabledDates.push(NeonDateUtils.dateToIso(today));

    const dateSizeExamples = `<neon-date-picker v-model="dateSmall" size="s" />
<neon-date-picker v-model="dateMedium" size="m" />
<neon-date-picker v-model="dateLarge" size="l" />`;

    const dateColorExamples = `<neon-date-picker v-model="dateSmall" color="brand" />
          <neon-date-picker v-model="dateLarge" color="info" />`;

    const dateDisabledExamples = `<neon-date-picker v-model="dateDisabled" :disabled="true" />
<neon-date-picker v-model="datesDisabled" :disabled-dates="disabledDates" />
<neon-date-picker v-model="dateValidRange" :max="maxDate" :min="minDate" />`;

    const dateLocaleExample = '<neon-date-picker v-model="dateLocale" locale="ja-JP" />';

    const datePlacementExample = '<neon-date-picker v-model="dateLocale" placement="top-left" />';

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonDatePicker')));

    return {
      dateSizeExamples,
      dateColorExamples,
      dateDisabledExamples,
      dateLocaleExample,
      datePlacementExample,
      dateSmall,
      dateMedium,
      dateLarge,
      dateDisabled,
      datesDisabled,
      dateValidRange,
      dateInfo,
      datePrimary,
      dateLocale,
      datePlacement,
      disabledDates,
      menuModel,
      headline,
      minDate,
      maxDate,
    };
  },
});
