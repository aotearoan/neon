import { defineComponent, onMounted, ref } from 'vue';
import { NeonCard, NeonCardBody, NeonDropdownMenu, NeonLink, NeonStack } from '@/neon';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';
import Editor from '@/app/components/editor/Editor.vue';

export default defineComponent({
  name: 'DropdownMenu',
  components: {
    NeonCard,
    NeonCardBody,
    NeonDropdownMenu,
    NeonLink,
    NeonStack,
    ComponentDocumentation,
    Editor,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('Display navigation and actions in a dropdown');

    const model = ref([
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
    ]);

    const modelWithIcons = ref([
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
    ]);

    const sizeTemplate = `<neon-dropdown-menu size="s" label="Small menu" :model="model" />
<neon-dropdown-menu size="m" label="Medium menu" :model="model" />
<neon-dropdown-menu size="l" label="Large menu" :model="model" />`;

    const colorTemplate = `<neon-dropdown-menu color="brand" label="Brand" :model="modelWithIcons" />
<neon-dropdown-menu color="primary" label="Primary" :model="modelWithIcons" />
<neon-dropdown-menu color="info" label="Info" :model="modelWithIcons" />
<neon-dropdown-menu color="success" label="Success" :model="modelWithIcons" />
<neon-dropdown-menu color="warn" label="Warning" :model="modelWithIcons" />
<neon-dropdown-menu color="error" label="Error" :model="modelWithIcons" />`;

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonDropdownMenu')));

    return {
      menuModel,
      headline,
      model,
      modelWithIcons,
      sizeTemplate,
      colorTemplate,
    };
  },
});
