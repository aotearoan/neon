import { Component, Vue } from 'vue-property-decorator';
import { NeonResponsive } from '@/components';

@Component
export default class Card extends Vue {
  get layouts() {
    return [
      {
        breakpoint: NeonResponsive.All,
        grid: [['card-content']],
      },
    ];
  }
}
