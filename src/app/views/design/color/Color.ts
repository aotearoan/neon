import { Component, Vue } from 'vue-property-decorator';
import { NeonFunctionalColor } from '@/components/common/NeonFunctionalColor';
import { NeonCard, NeonCardBody, NeonCardHeader } from '@/components';

@Component({
  components: {
    NeonCard,
    NeonCardHeader,
    NeonCardBody,
  },
})
export default class Color extends Vue {
  get colors() {
    return Object.values(NeonFunctionalColor);
  }
}
