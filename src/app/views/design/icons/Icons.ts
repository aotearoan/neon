import { Component, Vue } from 'vue-property-decorator';
import { NeonIconRegistry } from '@/components/design/icon/NeonIconRegistry';
import { NeonCard, NeonCardBody, NeonCardHeader, NeonIcon } from '@/components';

@Component({
  components: {
    NeonCard,
    NeonCardHeader,
    NeonCardBody,
    NeonIcon,
  },
})
export default class Icons extends Vue {
  get icons() {
    return NeonIconRegistry.list();
  }
}
