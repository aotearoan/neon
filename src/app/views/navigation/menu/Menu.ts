import { defineComponent, onMounted, ref } from 'vue';
import { NeonCard, NeonCardBody, NeonMenu } from '@/neon';
import type { MenuModel } from '@/app/Menu';
import { Menu as MenuGlobal } from '@/app/Menu';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';
import Editor from '@/app/components/editor/Editor.vue';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names,vue/no-reserved-component-names
  name: 'Menu',
  components: {
    NeonCard,
    NeonCardBody,
    NeonMenu,
    ComponentDocumentation,
    Editor,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('Responsive aware horizontal menu');

    const menu = ref([
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
    ]);

    const onClick = (value: string) => console.log(value);

    const sizesTemplate = `<neon-menu :menu="menu" size="s" @click="onClick" />
<neon-menu :menu="menu" size="m" @click="onClick" />
<neon-menu :menu="menu" size="l" @click="onClick" />`;

    const colorsTemplate = `<neon-menu :menu="menu" color="primary" />
<neon-menu :menu="menu" color="info" />`;

    onMounted(() => (menuModel.value = MenuGlobal.getComponentConfig('NeonMenu')));

    return {
      menuModel,
      headline,
      menu,
      sizesTemplate,
      colorsTemplate,
      onClick,
    };
  },
});
