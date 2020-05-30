import { Component, Vue } from 'vue-property-decorator';
import { NeonCard, NeonCardBody, NeonCardHeader, NeonTreeMenu, NeonTreeMenuItem } from '@/components';

@Component({
  components: {
    NeonCard,
    NeonCardHeader,
    NeonCardBody,
    NeonTreeMenu,
    NeonTreeMenuItem,
  },
})
export default class TreeMenu extends Vue {
  get model() {
    return [
      {
        label: 'Menu 1',
        key: 'menu-1',
        children: [
          {
            label: 'Menu 1-1',
            key: 'menu-1-1',
            href: '/menu-1/1',
            children: [
              {
                label: 'Menu 1-1-1',
                key: 'menu-1-1-1',
                href: '/menu-1/1/1',
              },
              {
                label: 'Menu 1-1-2',
                key: 'menu-1-1-2',
                href: '/menu-1/1/2',
              },
            ],
          },
          {
            label: 'Menu 1-2',
            key: 'menu-1-2',
            href: '/menu-1/2',
            children: [
              {
                label: 'Menu 1-2-1',
                key: 'menu-1-2-1',
                href: '/menu-1/2/1',
              },
              {
                label: 'Menu 1-2-2',
                key: 'menu-1-2-2',
                href: '/menu-1/2/2',
              },
            ],
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
      {
        label: 'Menu 3 (With href)',
        key: 'menu-3',
        href: '/menu-3',
      },
    ];
  }
}
