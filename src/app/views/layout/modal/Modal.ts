import { Component, Vue } from 'vue-property-decorator';
import { NeonButton, NeonCard, NeonCardBody, NeonCardHeader, NeonModal } from '@/components';

@Component({
  components: {
    NeonButton,
    NeonModal,
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
  },
})
export default class Modal extends Vue {
  private open = false;
}
