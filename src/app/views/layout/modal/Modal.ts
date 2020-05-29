import { Component, Vue } from 'vue-property-decorator';
import { NeonResponsive } from '@/components/layout/grid/NeonResponsive';
import { NeonButton, NeonCard, NeonCardBody, NeonCardHeader, NeonGrid, NeonGridArea, NeonModal } from '@/components';

@Component({
  components: {
    NeonGrid,
    NeonGridArea,
    NeonButton,
    NeonModal,
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
  },
})
export default class Modal extends Vue {
  private open = false;

  get layouts() {
    return [
      {
        breakpoint: NeonResponsive.All,
        grid: [['modal-content']],
      },
    ];
  }
}
