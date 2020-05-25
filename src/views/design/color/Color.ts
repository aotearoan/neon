import { Component, Vue } from 'vue-property-decorator';
import { NeonFunctionalColor, NeonResponsive } from '@/components';

@Component
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
