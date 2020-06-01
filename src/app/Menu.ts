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
          path: 'label',
          page: 'Label',
          component: 'NeonLabel',
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
      path: 'common',
      name: 'Models',
      component: 'NeonModels',
    },
  ];
}
