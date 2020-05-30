import { Component, Vue } from 'vue-property-decorator';
import { NeonSize } from '@/components/common/NeonSize';
import { NeonFunctionalColor } from '@/components/common/NeonFunctionalColor';
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
  get sizes() {
    return Object.values(NeonSize);
  }

  get colors() {
    return Object.values(NeonFunctionalColor);
  }
}
