import { defineComponent, onMounted, ref } from 'vue';
import { NeonCard, NeonCardBody, NeonMobileMenu, NeonStack } from '@/neon';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';
import Editor from '@/app/components/editor/Editor.vue';
import { Menu, type MenuModel } from '@/app/Menu';

export default defineComponent({
  name: 'MobileMenu',
  components: {
    NeonCard,
    NeonCardBody,
    NeonMobileMenu,
    NeonStack,
    ComponentDocumentation,
    Editor,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('Bottom navigation menu for mobile devices');

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonMobileMenu')));

    const menu = ref([
      {
        key: 'mobile-menu',
        label: 'Payments',
        icon: 'currency-dollar-circle',
        href: '/navigation/mobile-menu',
      },
      {
        key: 'transfer',
        label: 'Transfers',
        icon: 'data-transfer-horizontal',
        href: '/navigation/link',
      },
      {
        key: 'mail',
        label: 'Mail',
        icon: 'envelope',
        href: '/navigation/menu',
      },
    ]);

    const menuWithDisabledItem = menu.value.map((item, index) => ({ ...item, disabled: index === 2 }));

    const onClick = (value: string) => console.log(value);

    const template = `<neon-mobile-menu :menu="menu" color="primary"/>
<neon-mobile-menu :menu="menuWithDisabledItem" color="high-contrast"/>`;

    return {
      menuModel,
      menuWithDisabledItem,
      headline,
      menu,
      template,
      onClick,
    };
  },
});
