import { TranslateResult } from 'vue-i18n';

export interface MenuModel {
  path: string;
  page?: string;
  keywords?: string;
  name?: TranslateResult;
  component?: string;
  children?: MenuModel[];
}

export class Menu {
  public static menu: MenuModel[] = [
    {
      path: 'design',
      name: 'Design',
      children: [
        {
          path: 'color',
          page: 'Color',
        },
        {
          path: 'dark-mode',
          page: 'DarkMode',
          name: 'Dark Mode',
          keywords: 'color scheme',
        },
        {
          path: 'icons',
          page: 'Icons',
          component: 'NeonIcon',
        },
        {
          path: 'logo',
          page: 'Logo',
          component: 'NeonLogo',
        },
        {
          path: 'typography',
          page: 'Typography',
        },
      ],
    },
    {
      path: 'feedback',
      name: 'Feedback',
      children: [
        {
          path: 'alert',
          page: 'Alert',
          component: 'NeonAlert',
        },
        {
          path: 'note',
          page: 'Note',
          component: 'NeonNote',
        },
      ],
    },
    {
      path: 'layout',
      name: 'Layout',
      children: [
        {
          path: 'card',
          page: 'Card',
          component: 'NeonCard',
        },
        {
          path: 'drawer',
          page: 'Drawer',
          keywords: 'slide out panel',
          component: 'NeonDrawer',
        },
        {
          path: 'footer',
          page: 'Footer',
          component: 'NeonFooter',
        },
        {
          path: 'grid',
          page: 'Grid',
          component: 'NeonGrid',
        },
        {
          path: 'modal',
          page: 'Modal',
          keywords: 'dialog',
          component: 'NeonModal',
        },
        {
          path: 'page',
          page: 'Page',
          component: 'NeonPage',
        },
        {
          path: 'side-nav',
          page: 'SideNav',
          name: 'Side Nav',
          component: 'NeonSideNav',
        },
        {
          path: 'top-nav',
          page: 'TopNav',
          name: 'Top Nav',
          component: 'NeonTopNav',
        },
      ],
    },
    {
      path: 'navigation',
      name: 'Navigation',
      children: [
        {
          path: 'action-menu',
          page: 'ActionMenu',
          name: 'Action Menu',
          component: 'NeonActionMenu',
        },
        {
          path: 'link',
          page: 'Link',
          component: 'NeonLink',
        },
        {
          path: 'tree-menu',
          page: 'TreeMenu',
          name: 'Tree Menu',
          component: 'NeonTreeMenu',
        },
      ],
    },
    {
      path: 'presentation',
      name: 'Presentation',
      children: [
        {
          path: 'badge',
          page: 'Badge',
          component: 'NeonBadge',
        },
        {
          path: 'dropdown',
          page: 'Dropdown',
          keywords: 'popup',
          component: 'NeonDropdown',
        },
        {
          path: 'dropdown-menu',
          page: 'DropdownMenu',
          name: 'Dropdown Menu',
          keywords: 'select',
          component: 'NeonDropdownMenu',
        },
        {
          path: 'expansion-indicator',
          page: 'ExpansionIndicator',
          name: 'Expansion Indicator',
          keywords: 'dropdown select menu',
          component: 'NeonExpansionIndicator',
        },
        {
          path: 'label',
          page: 'Label',
          component: 'NeonLabel',
        },
        {
          path: 'notification-counter',
          page: 'NotificationCounter',
          name: 'Notification Counter',
          keywords: 'badge',
          component: 'NeonNotificationCounter',
        },
      ],
    },
    {
      path: 'user-input',
      name: 'User Input',
      children: [
        {
          path: 'button',
          page: 'Button',
          component: 'NeonButton',
        },
        {
          path: 'drop-zone',
          page: 'DropZone',
          name: 'Drop Zone',
          keywords: 'drag upload file input',
          component: 'NeonDropZone',
        },
        {
          path: 'file',
          page: 'File',
          keywords: 'input multiple',
          component: 'NeonFile',
        },
        {
          path: 'input',
          page: 'Input',
          name: 'Input / Textarea',
          component: 'NeonInput',
        },
        {
          path: 'password',
          page: 'Password',
          keywords: 'input',
          component: 'NeonPassword',
        },
        {
          path: 'switch',
          page: 'SwitchExample',
          name: 'Switch / Checkbox',
          component: 'NeonSwitch',
        },
        {
          path: 'toggle',
          page: 'Toggle',
          name: 'Toggle / Radio buttons',
          component: 'NeonToggle',
        },
      ],
    },
    {
      path: 'enums',
      name: 'Enums',
      children: [
        {
          path: 'NeonButtonStyle',
        },
        {
          path: 'NeonDropdownPlacement',
        },
        {
          path: 'NeonDropdownStyle',
        },
        {
          path: 'NeonFunctionalColor',
        },
        {
          path: 'NeonHorizontalPosition',
        },
        {
          path: 'NeonInputType',
        },
        {
          path: 'NeonLabelSize',
        },
        {
          path: 'NeonMode',
        },
        {
          path: 'NeonOrientation',
        },
        {
          path: 'NeonPlacement',
        },
        {
          path: 'NeonPosition',
        },
        {
          path: 'NeonResponsive',
        },
        {
          path: 'NeonSize',
        },
        {
          path: 'NeonState',
        },
        {
          path: 'NeonSwitchStyle',
        },
        {
          path: 'NeonToggleStyle',
        },
      ],
    },
    {
      path: 'models',
      name: 'Models',
      children: [
        {
          path: 'NeonActionMenuModel',
        },
        {
          path: 'NeonAvailableSpace',
        },
        {
          path: 'NeonDropdownMenuItem',
        },
        {
          path: 'NeonDropdownPlacementObject',
        },
        {
          path: 'NeonFormattedDate',
        },
        {
          path: 'NeonGridModel',
        },
        {
          path: 'NeonToggleModel',
        },
        {
          path: 'NeonTreeMenuModel',
        },
      ],
    },
    {
      path: 'utils',
      name: 'Utils',
      children: [
        {
          path: 'NeonClosableUtils',
        },
        {
          path: 'NeonDateUtils',
        },
        {
          path: 'NeonDropdownPlacementUtils',
        },
        {
          path: 'NeonIconRegistry',
        },
        {
          path: 'NeonModeUtils',
        },
        {
          path: 'NeonPlacementUtils',
        },
        {
          path: 'NeonResponsiveUtils',
        },
        {
          path: 'RegisterIcons',
        },
      ],
    },
  ];

  public static getComponentConfig(componentName: string): MenuModel | null {
    function findComponent(item: MenuModel, parentPath = ''): MenuModel | null {
      const path = `${parentPath ? parentPath + '/' : ''}${item.path}`;
      if (item.component === componentName) {
        return { ...item, path };
      } else if (item.children) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const [head, ...tail] = item.children
          .map((child) => findComponent(child, path))
          .filter((child) => child !== null);
        return head || null;
      }
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [head, ...tail] = Menu.menu.map((item) => findComponent(item)).filter((item) => item !== null);
    return head;
  }
}
