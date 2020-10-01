import { Component, Vue } from 'vue-property-decorator';
import { NeonCard, NeonCardBody, NeonDropdownMenu } from '../../../../components';
import { Menu, MenuModel } from '../../../Menu';
import ComponentDocumentation from '../../../components/component-documentation/ComponentDocumentation.vue';

@Component({
  components: {
    NeonCard,
    NeonCardBody,
    NeonDropdownMenu,
    ComponentDocumentation,
  },
})
export default class DropdownMenu extends Vue {
  private menuModel: MenuModel | null = null;

  private headline = 'Display navigation and actions in a dropdown';

  private data = {
    model: [
      {
        key: 'k1',
        label: 'Clickable option',
        separatorBefore: true,
      },
      {
        key: 'k2',
        label: 'External link',
        href: 'http://getskeleton.com',
        separatorBefore: true,
      },
      {
        key: 'k3',
        label: 'Internal link',
        href: '/presentation/dropdown',
        separatorBefore: true,
      },
      {
        key: 'k4',
        label: 'Disabled link',
        href: '/presentation/dropdown',
        separatorBefore: true,
        disabled: true,
      },
    ],
    modelWithIcons: [
      {
        key: 'k1',
        label: 'Clickable option',
        icon: 'user',
        separatorBefore: true,
      },
      {
        key: 'k2',
        label: 'External link',
        href: 'http://getskeleton.com',
        icon: 'download',
        separatorBefore: true,
      },
      {
        key: 'k3',
        label: 'Internal link',
        href: '/presentation/dropdown',
        icon: 'images',
        separatorBefore: true,
      },
      {
        key: 'k4',
        label: 'Disabled link',
        href: '/presentation/dropdown',
        icon: 'lock',
        separatorBefore: true,
        disabled: true,
      },
    ],
  };

  private examples = [
    {
      title: 'Dropdown sizes',
      template: `<div class="neon-vertically-spaced">
  <neon-dropdown-menu size="s" label="Small menu" :model="model" />
  <neon-dropdown-menu size="m" label="Medium menu" :model="model" />
  <neon-dropdown-menu size="l" label="Large menu" :model="model" />
</div>`,
      data: this.data,
    },
    {
      title: 'Dropdowns with colors and icons',
      template: `<div class="neon-vertically-spaced">
  <neon-dropdown-menu color="brand" label="Brand" :model="modelWithIcons" />
  <neon-dropdown-menu color="primary" label="Primary" :model="modelWithIcons" />
  <neon-dropdown-menu color="info" label="Info" :model="modelWithIcons" />
  <neon-dropdown-menu color="warn" label="Warning" :model="modelWithIcons" />
  <neon-dropdown-menu color="error" label="Error" :model="modelWithIcons" />
</div>`,
      data: this.data,
    },
  ];

  public mounted() {
    this.menuModel = Menu.getComponentConfig('NeonDropdownMenu');
  }
}
