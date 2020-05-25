import { Component, Vue } from 'vue-property-decorator';
import { NeonIconRegistry, NeonResponsive } from '@/components';

@Component
export default class Icons extends Vue {
  get icons() {
    return NeonIconRegistry.list();
  }

  get layouts() {
    return [
      {
        breakpoint: NeonResponsive.All,
        grid: [['icon-content']],
      },
    ];
  }
}
