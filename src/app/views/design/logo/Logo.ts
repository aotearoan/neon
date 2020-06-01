import { Component, Vue } from 'vue-property-decorator';
import { NeonButton, NeonCard, NeonCardBody, NeonCardHeader, NeonLogo } from '@/components';

@Component({
  components: {
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
    NeonLogo,
    NeonButton,
  },
})
export default class Logo extends Vue {
  private template = `<neon-logo />`;
}
