import { Component, Vue } from 'vue-property-decorator';
import { NeonResponsive } from '@/components';

@Component
export default class TopNav extends Vue {
  get layouts() {
    return [
      {
        breakpoint: NeonResponsive.All,
        grid: [['top-nav-content']],
      },
    ];
  }
}
