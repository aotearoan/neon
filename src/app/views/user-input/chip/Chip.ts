import { defineComponent, onMounted, ref } from 'vue';
import type { MenuModel } from '../../../Menu';
import { Menu } from '../../../Menu';
import ComponentDocumentation from '../../../components/component-documentation/ComponentDocumentation.vue';
import NeonCardBody from '../../../../components/layout/card/body/NeonCardBody.vue';
import NeonCard from '../../../../components/layout/card/NeonCard.vue';
import NeonToggle from '../../../../components/user-input/toggle/NeonToggle.vue';
import NeonChip from '../../../../components/user-input/chip/NeonChip.vue';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Chip',
  components: {
    NeonCard,
    NeonCardBody,
    NeonChip,
    NeonToggle,
    ComponentDocumentation,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('Removable chips for tagging and inputs');

    const data = ref({
      click: () => console.log('clicked!'),
      remove: () => console.log('removed!'),
    });

    const chipSizes = `<div class="neon-vertically-spaced">
  <neon-chip label="Small" size="s" />
  <neon-chip label="Medium" size="m" />
  <neon-chip label="Large" size="l" />
</div>`;

    const chipColors = `<div class="neon-vertically-spaced">
  <neon-chip label="Neutral" />
  <neon-chip label="Low Contrast" color="low-contrast" />
  <neon-chip label="High Contrast" color="high-contrast" />
  <neon-chip label="Brand" color="brand" />
  <neon-chip label="Info" color="info" />
  <neon-chip label="Success" color="success" />
  <neon-chip label="Warning" color="warn" />
  <neon-chip label="Error" color="error" />
</div>`;

    const chipActions = `<div class="neon-vertically-spaced">
  <neon-chip label="Clickable" color="info" @click="click" />
  <neon-chip action="remove" label="Removable" color="info" @close="remove" />
  <neon-chip :disabled="true" action="remove" label="Disabled" color="info" />
</div>`;

    const chipIcons = `<div class="neon-vertically-spaced">
  <neon-chip icon="moon" label="With icon" />
</div>`;

    const examples = ref([
      {
        title: 'Chip sizes',
        template: chipSizes,
      },
      {
        title: 'Chip colors',
        template: chipColors,
      },
      {
        title: 'Chip actions',
        template: chipActions,
        data: data,
      },
      {
        title: 'Chip with icon',
        template: chipIcons,
      },
    ]);

    onMounted(() => menuModel.value = Menu.getComponentConfig('NeonChip'));

    return {
      menuModel,
      headline,
      data,
      examples,
    };
  },
});
