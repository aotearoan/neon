import { Component, Vue } from 'vue-property-decorator';
import { NeonResponsive } from '@/components/layout/grid/NeonResponsive';
import { NeonCard, NeonCardBody, NeonCardHeader, NeonGrid, NeonGridArea, NeonLink } from '@/components';

@Component({
  components: {
    NeonGrid,
    NeonGridArea,
    NeonCard,
    NeonCardHeader,
    NeonCardBody,
    NeonLink,
  },
})
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
