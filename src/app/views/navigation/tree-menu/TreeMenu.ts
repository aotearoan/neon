import { defineComponent, onMounted, ref } from 'vue';
import { NeonCard, NeonCardBody, NeonStack, NeonTreeMenu } from '@/neon';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';
import Editor from '@/app/components/editor/Editor.vue';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';

export default defineComponent({
  name: 'TreeMenu',
  components: {
    NeonCard,
    NeonCardBody,
    NeonTreeMenu,
    NeonStack,
    ComponentDocumentation,
    Editor,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('A multi-level menu for the side nav');

    const model = ref([
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
    ]);

    const template = '<neon-tree-menu :model="model" />';

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonTreeMenu')));

    return {
      menuModel,
      headline,
      model,
      template,
    };
  },
});
