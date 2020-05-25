import { Component, Vue } from 'vue-property-decorator';
import { NeonResponsive } from '@/components';

@Component
export default class Link extends Vue {
  private handleClick() {
    console.log('clicked!');
  }

  get layouts() {
    return [
      {
        breakpoint: NeonResponsive.All,
        grid: [['link-content']],
      },
    ];
  }
}
