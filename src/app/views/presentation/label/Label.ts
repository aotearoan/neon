import { Component, Vue } from 'vue-property-decorator';
import { NeonFunctionalColor } from '@/components/common/NeonFunctionalColor';
import { NeonLabelSize } from '@/components/presentation/label/NeonLabelSize';
import { NeonResponsive } from '@/components/layout/grid/NeonResponsive';
import { NeonCard, NeonCardBody, NeonCardHeader, NeonGrid, NeonGridArea, NeonLabel } from '@/components';

@Component({
  components: {
    NeonGrid,
    NeonGridArea,
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

  get layouts() {
    return [
      {
        breakpoint: NeonResponsive.All,
        grid: [['label-content']],
      },
    ];
  }
}
