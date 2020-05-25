import { Component, Vue } from 'vue-property-decorator';
import { NeonFunctionalColor, NeonResponsive, NeonSize } from '@/components';

@Component
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
