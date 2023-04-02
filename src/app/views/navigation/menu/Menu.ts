import { defineComponent, onMounted, ref } from 'vue';
import { NeonCard, NeonCardBody, NeonMenu } from '@/neon';
import type { MenuModel } from '@/app/Menu';
import { Menu as MenuGlobal } from '@/app/Menu';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';
import type { ExampleModel } from '@/app/components/example/ExampleModel';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names,vue/no-reserved-component-names
  name: 'Menu',
  components: {
    NeonCard,
    NeonCardBody,
    NeonMenu,
    ComponentDocumentation,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('Responsive aware horizontal menu');

    const data = ref({
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
    });

    const examples = ref<Array<ExampleModel>>([
      {
        title: 'Menu sizes',
        template: `
          <div class="neon-vertically-spaced">
          <neon-menu size="s" :menu="menu" @click="onClick" />
          <neon-menu size="m" :menu="menu" @click="onClick" />
          <neon-menu size="l" :menu="menu" @click="onClick" />
          </div>`,
        data,
      },
      {
        title: 'Menu colors',
        template: `
          <div class="neon-vertically-spaced">
          <neon-menu color="primary" :menu="menu" />
          <neon-menu color="info" :menu="menu" />
          </div>`,
        data,
      },
    ]);

    onMounted(() => (menuModel.value = MenuGlobal.getComponentConfig('NeonMenu')));

    return {
      menuModel,
      headline,
      data,
      examples,
    };
  },
});
