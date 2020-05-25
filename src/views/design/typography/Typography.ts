import { Component, Vue } from 'vue-property-decorator';
import { NeonResponsive } from '@/components/layout/grid/NeonResponsive';
import { NeonCard, NeonCardBody, NeonCardHeader, NeonGrid, NeonGridArea } from '@/components';

@Component({
  components: {
    NeonGrid,
    NeonGridArea,
    NeonCard,
    NeonCardHeader,
    NeonCardBody,
  },
})
export default class Typography extends Vue {
  get layouts() {
    return [
      {
        breakpoint: NeonResponsive.All,
        grid: [['typography-content']],
      },
    ];
  }
}
