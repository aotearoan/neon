import { Component, Vue } from 'vue-property-decorator';
import { NeonCard, NeonCardBody, NeonSkeletonLoader } from '../../../../components';
import ComponentDocumentation from '../../../components/component-documentation/ComponentDocumentation.vue';
import { Menu, MenuModel } from '../../../Menu';

@Component({
  components: {
    NeonCard,
    NeonCardBody,
    NeonSkeletonLoader,
    ComponentDocumentation,
  },
})
export default class SkeletonLoader extends Vue {
  private menuModel: MenuModel | null = null;

  private headline = 'Indicate initial loading progress';

  private example = `<div class="example--vertical">
  <neon-skeleton-loader :count="5" />
</div>`;

  private examples = [
    {
      title: 'Skeleton loader with 5 rows',
      template: this.example,
    },
  ];

  public mounted() {
    this.menuModel = Menu.getComponentConfig('NeonSkeletonLoader');
  }
}
