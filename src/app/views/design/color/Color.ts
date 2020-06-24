import { Component, Vue } from 'vue-property-decorator';
import { NeonFunctionalColor } from '@/common/enums/NeonFunctionalColor';
import { NeonCard, NeonCardBody, NeonCardHeader } from '@/components';

@Component({
  components: {
    NeonCard,
    NeonCardHeader,
    NeonCardBody,
  },
})
export default class Color extends Vue {
  get neutralColors() {
    return [NeonFunctionalColor.LowContrast, NeonFunctionalColor.Neutral, NeonFunctionalColor.HighContrast];
  }

  get functionalColors() {
    return [
      NeonFunctionalColor.Primary,
      NeonFunctionalColor.Info,
      NeonFunctionalColor.Success,
      NeonFunctionalColor.Warn,
      NeonFunctionalColor.Error,
    ];
  }
}
