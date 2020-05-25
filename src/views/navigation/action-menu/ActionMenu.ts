import { Component, Vue } from 'vue-property-decorator';
import { NeonResponsive } from '@/components';

@Component
export default class ActionMenu extends Vue {
  private selected = 'option-1';

  private model = [
    {
      label: 'Option 1',
      key: 'option-1',
    },
    {
      label: 'Option 2',
      key: 'option-2',
    },
    {
      label: 'Option 3',
      key: 'option-3',
      disabled: true,
    },
  ];

  get layouts() {
    return [
      {
        breakpoint: NeonResponsive.All,
        grid: [['action-menu-content']],
      },
    ];
  }
}
