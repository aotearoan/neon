import { Component, Vue } from 'vue-property-decorator';
import { NeonResponsive } from '@/components/layout/grid/NeonResponsive';
import { NeonIconRegistry } from '@/components/design/icon/NeonIconRegistry';
import { NeonCard, NeonCardBody, NeonCardHeader, NeonGrid, NeonGridArea, NeonIcon } from '@/components';

@Component({
  components: {
    NeonGrid,
    NeonGridArea,
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

  get layouts() {
    return [
      {
        breakpoint: NeonResponsive.All,
        grid: [['icon-content']],
      },
    ];
  }
}
