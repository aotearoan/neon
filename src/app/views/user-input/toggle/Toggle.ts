import { Component, Vue } from 'vue-property-decorator';
import { NeonResponsive } from '@/components/layout/grid/NeonResponsive';
import {
  NeonCard,
  NeonCardBody,
  NeonCardHeader,
  NeonFunctionalColor,
  NeonGrid,
  NeonGridArea,
  NeonSize,
  NeonToggle,
} from '@/components';

@Component({
  components: {
    NeonGrid,
    NeonGridArea,
    NeonCard,
    NeonCardHeader,
    NeonCardBody,
    NeonToggle,
  },
})
export default class Toggle extends Vue {
  private model = [
    {
      key: 'key-1',
      label: 'Label 1',
    },
    {
      key: 'key-2',
      label: 'Label 2',
    },
    {
      key: 'key-3',
      label: 'Label 3',
      disabled: true,
    },
  ];

  private iconModel = [
    {
      key: 'left',
      icon: 'align-left',
    },
    {
      key: 'centered',
      icon: 'align-center',
    },
    {
      key: 'right',
      icon: 'align-right',
      disabled: true,
    },
  ];

  private selected = this.model[1].key;
  private iconSelected = this.iconModel[1].key;

  get colors() {
    return Object.values(NeonFunctionalColor);
  }

  get sizes() {
    return Object.values(NeonSize);
  }

  get layouts() {
    return [
      {
        breakpoint: NeonResponsive.All,
        grid: [['toggle-content'], ['radio-buttons-content']],
      },
    ];
  }
}
