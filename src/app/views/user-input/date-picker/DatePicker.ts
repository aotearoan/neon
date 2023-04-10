import { defineComponent, onMounted, ref } from 'vue';
import { NeonCard, NeonCardBody, NeonCardHeader, NeonDatePicker, NeonDateUtils, NeonLink } from '@/neon';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';

export default defineComponent({
  name: 'DatePicker',
  components: {
    ComponentDocumentation,
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

    const dateSizeExamples = `<neon-date-picker size="s" v-model="dateSmall" />
<neon-date-picker size="m" v-model="dateMedium" />
<neon-date-picker size="l" v-model="dateLarge" />`;

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonDatePicker')));

    return {
      dateSizeExamples,
      dateSmall,
      dateMedium,
      dateLarge,
      dateDisabled,
      datesDisabled,
      dateValidRange,
      disabledDates,
      menuModel,
      headline,
      minDate,
      maxDate,
    };
  },
});
