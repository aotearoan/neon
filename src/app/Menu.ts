import { TranslateResult } from 'vue-i18n';
import { enumList, modelList, utilsList } from './SupportingClasses';

export interface MenuModel {
  anchors?: string[];
  path: string;
  page?: string;
  keywords?: string;
  name?: TranslateResult;
  component?: string;
  subComponents?: SubComponent[];
  group?: TranslateResult;
  children?: MenuModel[];
}

export interface SubComponent {
  path: string;
  name: string;
}

export class Menu {
  public static menu(): MenuModel[] {
    const menu: MenuModel[] = [
      {
        path: 'for-developers',
        name: 'For Developers',
        group: 'Introduction',
        children: [
          {
            path: 'getting-started',
            page: 'GettingStarted',
            name: 'Getting Started',
            keywords: 'installation sass css scss instructions yarn npm',
            anchors: ['Installation', 'Typescript', 'SASS'],
          },
          {
            path: 'technical-details',
            page: 'TechnicalDetails',
            name: 'Technical Details',
            keywords: 'vue stack internet explorer chrome safari firefox',
            anchors: ['Browser Support', 'Framework Support'],
          },
        ],
      },
      {
        path: 'design',
        name: 'Design',
        group: 'Introduction',
        children: [
          {
            path: 'color',
            page: 'Color',
            anchors: ['Introduction', 'Brand palettes', 'Functional palettes', 'Neutral palettes', 'Color classes'],
          },
          {
            path: 'theming',
            page: 'Theming',
            keywords: 'style styling customization light',
            anchors: ['Themes', 'Dark mode'],
          },
          {
            path: 'typography',
            page: 'Typography',
            keywords: 'font stack headings text',
            anchors: ['Headings', 'Body Text'],
          },
        ],
      },
      {
        path: 'feedback',
        name: 'Feedback',
        group: 'Components',
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
          {
            path: 'notification-counter',
            page: 'NotificationCounter',
            name: 'Notification Counter',
            keywords: 'badge label alert',
            component: 'NeonNotificationCounter',
          },
        ],
      },
      {
        path: 'layout',
        name: 'Layout',
        group: 'Components',
        children: [
          {
            path: 'card',
            page: 'Card',
            keywords: 'section container',
            component: 'NeonCard',
            subComponents: [
              {
                path: 'header',
                name: 'NeonCardHeader',
              },
              {
                path: 'body',
                name: 'NeonCardBody',
              },
              {
                path: 'footer',
                name: 'NeonCardFooter',
              },
            ],
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
        group: 'Components',
        children: [
          {
            path: 'action-menu',
            page: 'ActionMenu',
            name: 'Action Menu',
            component: 'NeonActionMenu',
          },
          {
            path: 'dropdown-menu',
            page: 'DropdownMenu',
            name: 'Dropdown Menu',
            keywords: 'select',
            component: 'NeonDropdownMenu',
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
        group: 'Components',
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
            path: 'expansion-indicator',
            page: 'ExpansionIndicator',
            name: 'Expansion Indicator',
            keywords: 'dropdown select menu',
            component: 'NeonExpansionIndicator',
          },
          {
            path: 'icon',
            page: 'Icon',
            name: 'Icons',
            component: 'NeonIcon',
          },
          {
            path: 'label',
            page: 'Label',
            component: 'NeonLabel',
          },
          {
            path: 'logo',
            page: 'Logo',
            component: 'NeonLogo',
          },
          {
            path: 'tabs',
            page: 'Tabs',
            component: 'NeonTabs',
            subComponents: [
              {
                path: 'tab',
                name: 'NeonTab',
              },
            ],
          },
        ],
      },
      {
        path: 'user-input',
        name: 'User Input',
        group: 'Components',
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
            name: 'Toggle / Radio Buttons',
            component: 'NeonToggle',
          },
        ],
      },
      {
        path: 'enums',
        name: 'Enums',
        group: 'Source',
        children: enumList.map((e) => ({ path: e })),
      },
      {
        path: 'models',
        name: 'Models',
        group: 'Source',
        children: modelList.map((e) => ({ path: e })),
      },
      {
        path: 'utils',
        name: 'Utils',
        group: 'Source',
        children: utilsList.map((e) => ({ path: e })),
      },
    ];

    // inject tabs as fragments for component pages
    menu.forEach((menuGroup) => {
      if (menuGroup.group === 'Components' && menuGroup.children) {
        menuGroup.children.forEach((page) => {
          page.anchors = ['Description', 'API', 'Examples'];
        });
      }
    });

    return menu;
  }

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
    const [head, ...tail] = Menu.menu()
      .map((item) => findComponent(item))
      .filter((item) => item !== null);
    return head;
  }
}
