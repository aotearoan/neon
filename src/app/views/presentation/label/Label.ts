import { Component, Vue } from 'vue-property-decorator';
import { NeonFunctionalColor } from '../../../../common/enums/NeonFunctionalColor';
import { NeonLabelSize } from '../../../../common/enums/NeonLabelSize';
import { NeonCard, NeonCardBody, NeonCardHeader, NeonLabel } from '../../../../components';

@Component({
  components: {
    NeonCard,
    NeonCardHeader,
    NeonCardBody,
    NeonLabel,
  },
})
export default class Label extends Vue {
  get neutralColors() {
    return [NeonFunctionalColor.LowContrast, NeonFunctionalColor.Neutral, NeonFunctionalColor.HighContrast];
  }

  get functionalColors() {
    return [
      NeonFunctionalColor.Brand,
      NeonFunctionalColor.Primary,
      NeonFunctionalColor.Info,
      NeonFunctionalColor.Success,
      NeonFunctionalColor.Warn,
      NeonFunctionalColor.Error,
    ];
  }

  get colors() {
    return Object.values(NeonFunctionalColor);
  }

  get labelSizes() {
    return Object.values(NeonLabelSize);
  }
}
