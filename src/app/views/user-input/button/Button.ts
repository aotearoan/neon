import { Component, Vue } from 'vue-property-decorator';
import { NeonSize } from '@/components/common/NeonSize';
import { NeonFunctionalColor } from '@/components/common/NeonFunctionalColor';
import { NeonButtonStyle } from '@/components/user-input/button/NeonButtonStyle';
import { NeonButton, NeonCard, NeonCardBody, NeonCardHeader, NeonNote } from '@/components';

@Component({
  components: {
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

  private buttonName(buttonStyle: string) {
    return buttonStyle
      .split('-')
      .map((s, index) => (index === 0 ? `${s.substr(0, 1).toUpperCase()}${s.substr(1)}` : s))
      .join(' ');
  }
}
