import { Component, Vue } from 'vue-property-decorator';
import { NeonSize } from '@/common/enums/NeonSize';
import { NeonFunctionalColor } from '@/common/enums/NeonFunctionalColor';
import { NeonButtonStyle } from '@/common/enums/NeonButtonStyle';
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
