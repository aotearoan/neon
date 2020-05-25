import { Component, Vue } from 'vue-property-decorator';
import { NeonButtonStyle, NeonFunctionalColor, NeonResponsive, NeonSize } from '@/components';

@Component
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
