import { Component, Vue } from 'vue-property-decorator';
import { NeonCard, NeonCardBody, NeonCardHeader, NeonTreeMenu } from '../../../../components';

@Component({
  components: {
    NeonCard,
    NeonCardHeader,
    NeonCardBody,
    NeonTreeMenu,
  },
})
export default class TreeMenu extends Vue {
  get model() {
    return [
      {
        label: 'Menu 1',
        key: 'menu-1',
        expanded: true,
        children: [
          {
            label: 'Menu 1-1',
            key: 'menu-1-1',
            href: '/menu-1/1',
          },
          {
            label: 'Menu 1-2',
            key: 'menu-1-2',
            href: '/menu-1/2',
          },
        ],
      },
      {
        label: 'Menu 2',
        key: 'menu-2',
        children: [
          {
            label: 'Menu 1-1',
            key: 'menu-1-1',
            href: '/navigation/index',
          },
        ],
      },
    ];
  }
}
