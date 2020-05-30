import { Component, Vue } from 'vue-property-decorator';
import { NeonFunctionalColor } from '@/components/common/NeonFunctionalColor';
import { NeonLabelSize } from '@/components/presentation/label/NeonLabelSize';
import { NeonCard, NeonCardBody, NeonCardHeader, NeonLabel } from '@/components';

@Component({
  components: {
    NeonCard,
    NeonCardHeader,
    NeonCardBody,
    NeonLabel,
  },
})
export default class Label extends Vue {
  get colors() {
    return Object.values(NeonFunctionalColor);
  }

  get labelSizes() {
    return Object.values(NeonLabelSize);
  }
}
