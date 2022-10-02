import { defineComponent, onMounted, ref } from 'vue';
import { NeonCard, NeonCardBody, NeonDropdownMenu, NeonLink } from '@/neon';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';

export default defineComponent({
  name: 'DropdownMenu',
  components: {
    NeonCard,
    NeonCardBody,
    NeonDropdownMenu,
    NeonLink,
    ComponentDocumentation,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('Display navigation and actions in a dropdown');

    const data = ref({
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
    });

    const examples = ref([
      {
        title: 'Dropdown sizes',
        template: `
          <div class="neon-vertically-spaced">
          <neon-dropdown-menu size="s" label="Small menu" :model="model" />
          <neon-dropdown-menu size="m" label="Medium menu" :model="model" />
          <neon-dropdown-menu size="l" label="Large menu" :model="model" />
          </div>`,
        data: data.value,
      },
      {
        title: 'Dropdowns with colors and icons',
        template: `
          <div class="neon-vertically-spaced">
          <neon-dropdown-menu color="brand" label="Brand" :model="modelWithIcons" />
          <neon-dropdown-menu color="primary" label="Primary" :model="modelWithIcons" />
          <neon-dropdown-menu color="info" label="Info" :model="modelWithIcons" />
          <neon-dropdown-menu color="success" label="Success" :model="modelWithIcons" />
          <neon-dropdown-menu color="warn" label="Warning" :model="modelWithIcons" />
          <neon-dropdown-menu color="error" label="Error" :model="modelWithIcons" />
          </div>`,
        data: data.value,
      },
    ]);

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonDropdownMenu')));

    return {
      menuModel,
      headline,
      examples,
      data,
    };
  },
});
