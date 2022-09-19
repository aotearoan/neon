import { defineComponent, onMounted, ref } from 'vue';
import { NeonCard, NeonCardBody, NeonTreeMenu } from '@/neon';
import ComponentDocumentation from '../../../components/component-documentation/ComponentDocumentation.vue';
import type { MenuModel } from '../../../Menu';
import { Menu } from '../../../Menu';

export default defineComponent({
  name: 'TreeMenu',
  components: {
    NeonCard,
    NeonCardBody,
    NeonTreeMenu,
    ComponentDocumentation,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('A multi-level menu for the side nav');

    const data = ref({
      model: [
        {
          key: 'feedback',
          label: 'Feedback',
          expanded: false,
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
              href: '/navigation/dropdown-menu',
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
    });

    const examples = ref([
      {
        template: `
          <neon-tree-menu :model="model"></neon-tree-menu>`,
        data: data.value,
      },
    ]);

    onMounted(() => menuModel.value = Menu.getComponentConfig('NeonTreeMenu'));

    return {
      menuModel,
      headline,
      data,
      examples,
    };
  },
});
