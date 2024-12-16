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
          },
          {
            key: 'note',
            label: 'Note',
            href: '/feedback/note',
          },
          {
            key: 'notification-counter',
            label: 'Notification Counter',
            href: '/feedback/notification-counter',
          },
        ],
      },
      {
        key: 'layoutCard',
        label: 'Layout Card',
        href: '/layout/Card',
        expanded: false,
      },
      {
        key: 'navigation',
        label: 'Navigation',
        expanded: true,
        children: [
          {
            key: 'action-menu',
            label: 'Action Menu',
          },
          {
            key: 'dropdown-menu',
            label: 'Dropdown Menu',
            href: '/navigation/dropdown-menu',
          },
          {
            key: 'link',
            label: 'Link',
            href: '/navigation/link',
          },
          {
            key: 'tree-menu',
            label: 'Tree Menu',
            href: '/navigation/tree-menu',
          },
        ],
      },
      {
        key: 'presentation',
        label: 'Presentation',
        href: '/navigation/tree-menu',
        expanded: true,
        children: [
          {
            key: 'tree-menu',
            label: 'Tree Menu',
            href: '/navigation/tree-menu',
            anchors: ['Examples', 'API'],
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
