import { Component, Vue } from 'vue-property-decorator';
import { NeonFunctionalColor, NeonLabelSize, NeonResponsive } from '@/components';

@Component
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
