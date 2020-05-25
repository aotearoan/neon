import { Component, Vue } from 'vue-property-decorator';
import { NeonResponsive } from '@/components/layout/grid/NeonResponsive';
import { NeonFunctionalColor } from '@/components/common/NeonFunctionalColor';
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
export default class Color extends Vue {
  get colors() {
    return Object.values(NeonFunctionalColor);
  }

  get layouts() {
    return [
      {
        breakpoint: NeonResponsive.All,
        grid: [['color-content']],
      },
    ];
  }
}
