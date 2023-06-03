import { defineComponent, onMounted, ref } from 'vue';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';
import Editor from '@/app/components/editor/Editor.vue';
import { NeonCard, NeonCardBody, NeonChip, NeonStack, NeonToggle } from '@/neon';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Chip',
  components: {
    NeonCard,
    NeonCardBody,
    NeonChip,
    NeonToggle,
    NeonStack,
    ComponentDocumentation,
    Editor,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('Removable chips for tagging and inputs');

    const click = () => console.log('clicked!');
    const remove = () => console.log('removed!');

    const chipSizes = `<neon-chip label="Small" size="s" />
<neon-chip label="Medium" size="m" />
<neon-chip label="Large" size="l" />`;

    const chipColors = `<neon-chip label="Neutral" />
<neon-chip label="Low Contrast" color="low-contrast" />
<neon-chip label="High Contrast" color="high-contrast" />
<neon-chip label="Brand" color="brand" />
<neon-chip label="Info" color="info" />
<neon-chip label="Success" color="success" />
<neon-chip label="Warning" color="warn" />
<neon-chip label="Error" color="error" />`;

    const chipActions = `<neon-chip label="Clickable" color="info" @click="click" />
<neon-chip action="remove" label="Removable" color="info" @close="remove" />
<neon-chip :disabled="true" action="remove" label="Disabled" color="info" />`;

    const chipIcons = `<neon-chip icon="moon" label="With icon" />`;

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonChip')));

    return {
      menuModel,
      headline,
      chipSizes,
      chipColors,
      chipActions,
      chipIcons,
      click,
      remove,
    };
  },
});
