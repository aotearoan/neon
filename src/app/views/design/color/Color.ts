import { Component, Vue } from 'vue-property-decorator';
import { NeonFunctionalColor } from '../../../../common/enums/NeonFunctionalColor';
import { NeonCard, NeonCardBody, NeonCardHeader } from '../../../../components';
import AppPre from '../../../components/pre/AppPre.vue';

@Component({
  components: {
    NeonCard,
    NeonCardHeader,
    NeonCardBody,
    AppPre,
  },
})
export default class Color extends Vue {
  get neutralColors() {
    return [NeonFunctionalColor.LowContrast, NeonFunctionalColor.Neutral, NeonFunctionalColor.HighContrast];
  }

  get brandColors() {
    return [NeonFunctionalColor.Brand, NeonFunctionalColor.Primary];
  }

  get functionalColors() {
    return [NeonFunctionalColor.Info, NeonFunctionalColor.Success, NeonFunctionalColor.Warn, NeonFunctionalColor.Error];
  }
}
