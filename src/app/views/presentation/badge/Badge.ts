import { Component, Vue } from 'vue-property-decorator';
import { NeonSize } from '@/common/enums/NeonSize';
import { NeonFunctionalColor } from '@/common/enums/NeonFunctionalColor';
import { NeonBadge, NeonCard, NeonCardBody, NeonCardHeader } from '@/components';

@Component({
  components: {
    NeonCard,
    NeonCardHeader,
    NeonCardBody,
    NeonBadge,
  },
})
export default class Badge extends Vue {
  get imgUrl() {
    return `${process.env.VUE_APP_BASE_URL}images/doge.jpg`;
  }

  get sizes() {
    return Object.values(NeonSize);
  }

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
