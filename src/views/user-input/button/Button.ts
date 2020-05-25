import { Component, Vue } from 'vue-property-decorator';
import { NeonSize } from '@/components/common/NeonSize';
import { NeonFunctionalColor } from '@/components/common/NeonFunctionalColor';
import { NeonButtonStyle } from '@/components/user-input/button/NeonButtonStyle';
import { NeonResponsive } from '@/components/layout/grid/NeonResponsive';
import { NeonButton, NeonCard, NeonCardBody, NeonCardHeader, NeonGrid, NeonGridArea, NeonNote } from '@/components';

@Component({
  components: {
    NeonGrid,
    NeonGridArea,
    NeonCard,
    NeonCardHeader,
    NeonCardBody,
    NeonButton,
    NeonNote,
  },
})
export default class Button extends Vue {
  get sizes() {
    return Object.values(NeonSize);
  }

  get colors() {
    return Object.values(NeonFunctionalColor);
  }

  get buttonStyles() {
    return Object.values(NeonButtonStyle);
  }

  get layouts() {
    return [
      {
        breakpoint: NeonResponsive.All,
        grid: [['button-content']],
      },
    ];
  }
}
