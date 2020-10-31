import { Component, Vue } from 'vue-property-decorator';
import { NeonCard, NeonCardBody, NeonMenu } from '../../../../components';
import { Menu as MenuGlobal, MenuModel } from '../../../Menu';
import ComponentDocumentation from '../../../components/component-documentation/ComponentDocumentation.vue';
import { ExampleModel } from '../../../components/example/ExampleModel';

@Component({
  components: {
    NeonCard,
    NeonCardBody,
    NeonMenu,
    ComponentDocumentation,
  },
})
export default class Menu extends Vue {
  private menuModel: MenuModel | null = null;

  private headline = 'Responsive aware horizontal menu';

  private data = {
    menu: [
      {
        key: 'action-menu',
        label: 'Action Menu',
        href: '/navigation/action-menu',
      },
      {
        key: 'link',
        label: 'Link',
        href: '/navigation/link',
      },
      {
        key: 'menu',
        label: 'Menu',
        href: '/navigation/menu',
      },
      {
        key: 'click-link',
        icon: 'contrast',
        label: 'Click link',
      },
      {
        key: 'disabled',
        label: 'Disabled',
        disabled: true,
      },
      {
        key: 'tree-menu',
        label: 'Tree Menu',
        href: '/navigation/tree-menu',
        children: [
          {
            key: 'tree-menu-description',
            label: 'Description',
            href: '/navigation/tree-menu#description',
          },
          {
            key: 'tree-menu-api',
            label: 'API',
            href: '/navigation/tree-menu#api',
          },
          {
            key: 'tree-menu-examples',
            label: 'Examples',
            href: '/navigation/tree-menu#examples',
          },
        ],
      },
    ],
    onClick: (value: string) => console.log(value),
  };

  private examples: ExampleModel[] = [
    {
      title: 'Menu sizes',
      template: `<div class="neon-vertically-spaced">
  <neon-menu size="s" :menu="menu" @click="onClick" />
  <neon-menu size="m" :menu="menu" @click="onClick" />
  <neon-menu size="l" :menu="menu" @click="onClick" />
</div>`,
      data: this.data,
    },
    {
      title: 'Menu colors',
      template: `<div class="neon-vertically-spaced">
  <neon-menu color="primary" :menu="menu" />
  <neon-menu color="info" :menu="menu" />
</div>`,
      data: this.data,
    },
  ];

  public mounted() {
    this.menuModel = MenuGlobal.getComponentConfig('NeonMenu');
  }
}
