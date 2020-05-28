import { Component, Vue } from 'vue-property-decorator';
import { NeonSize } from '@/components/common/NeonSize';
import { NeonFunctionalColor } from '@/components/common/NeonFunctionalColor';
import { NeonResponsive } from '@/components/layout/grid/NeonResponsive';
import { NeonBadge, NeonCard, NeonCardBody, NeonCardHeader, NeonGrid, NeonGridArea } from '@/components';

@Component({
  components: {
    NeonGrid,
    NeonGridArea,
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

  get layouts() {
    return [
      {
        breakpoint: NeonResponsive.All,
        grid: [['badge-content']],
      },
    ];
  }
}
