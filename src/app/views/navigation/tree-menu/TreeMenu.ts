import { Component, Vue } from 'vue-property-decorator';
import { NeonCard, NeonCardBody, NeonTreeMenu } from '../../../../components';
import ComponentDocumentation from '../../../components/component-documentation/ComponentDocumentation.vue';
import { Menu, MenuModel } from '../../../Menu';

@Component({
  components: {
    NeonCard,
    NeonCardBody,
    NeonTreeMenu,
    ComponentDocumentation,
  },
})
export default class TreeMenu extends Vue {
  private menuModel: MenuModel | null = null;

  private headline = 'A multi-level menu for the side nav';

  private data = {
    model: [
      {
        key: 'feedback',
        label: 'Feedback',
        group: 'Components',
        children: [
          {
            key: 'alert',
            label: 'Alert',
            href: '/feedback/alert',
            anchors: ['Description', 'API', 'Examples'],
          },
          {
            key: 'note',
            label: 'Note',
            href: '/feedback/note',
            anchors: ['Description', 'API', 'Examples'],
          },
          {
            key: 'notification-counter',
            label: 'Notification Counter',
            href: '/feedback/notification-counter',
            anchors: ['Description', 'API', 'Examples'],
          },
        ],
      },
      {
        key: 'navigation',
        label: 'Navigation',
        expanded: true,
        children: [
          {
            key: 'action-menu',
            label: 'Action Menu',
            href: '/navigation/action-menu',
            anchors: ['Description', 'API', 'Examples'],
          },
          {
            key: 'dropdown-menu',
            label: 'Dropdown Menu',
            href: '/navigation/action-menu',
            anchors: ['Description', 'API', 'Examples'],
          },
          {
            key: 'link',
            label: 'Link',
            href: '/navigation/link',
            anchors: ['Description', 'API', 'Examples'],
          },
          {
            key: 'tree-menu',
            label: 'Tree Menu',
            href: '/navigation/tree-menu',
            anchors: ['Description', 'API', 'Examples'],
          },
        ],
      },
    ],
  };

  private examples = [
    {
      template: `<neon-tree-menu :model="model"></neon-tree-menu>`,
      data: this.data,
    },
  ];

  public mounted() {
    this.menuModel = Menu.getComponentConfig('NeonTreeMenu');
  }
}
