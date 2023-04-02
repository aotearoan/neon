import { defineComponent, onMounted, ref } from 'vue';
import { NeonCard, NeonCardBody, NeonToggleChip } from '@/neon';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';

export default defineComponent({
  name: 'ToggleChip',
  components: {
    ComponentDocumentation,
    NeonCard,
    NeonCardBody,
    NeonToggleChip,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('Chips for toggling state');

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data = ref<Record<string, any>>({
      checked1: true,
      checked2: true,
      checked3: true,
      checked4: true,
      checked5: true,
      checked6: true,
      checked7: true,
      checked8: true,
      checked9: true,
      checked10: true,
      checked11: true,
      checked12: true,
      checked13: false,
      checked14: true,
      checked15: false,
      checked16: false,
      checked17: false,
      toggleChecked: (key: string) => {
        data.value[key] = !data.value[key];
        data.value = { ...data.value };
      },
    });

    const sizeTemplate = `<div class="example--vertical">
  <neon-toggle-chip size="xs" label="Extra Small" :model-value="checked1" @update:modelValue="toggleChecked('checked1')"/>
  <neon-toggle-chip size="s" label="Small" :model-value="checked2" @update:modelValue="toggleChecked('checked2')"/>
  <neon-toggle-chip label="Medium" :model-value="checked3" @update:modelValue="toggleChecked('checked3')"/>
  <neon-toggle-chip size="l" label="Large" :model-value="checked4" @update:modelValue="toggleChecked('checked4')"/>
</div>`;

    const noCheckTemplate = `<div class="example--vertical">
  <neon-toggle-chip :show-check="false" size="xs" label="Extra small" :model-value="checked5" @update:modelValue="toggleChecked('checked5')"/>
  <neon-toggle-chip :show-check="false" size="s" label="Small" :model-value="checked6" @update:modelValue="toggleChecked('checked6')"/>
  <neon-toggle-chip :show-check="false" size="m" label="Medium" :model-value="checked7" @update:modelValue="toggleChecked('checked7')"/>
  <neon-toggle-chip :show-check="false" size="l" label="Large" :model-value="checked8" @update:modelValue="toggleChecked('checked8')"/>
</div>`;

    const colorTemplate = `<div class="example--vertical">
  <neon-toggle-chip label="Brand" color="brand" :model-value="checked9" @update:modelValue="toggleChecked('checked9')"/>
  <neon-toggle-chip label="Primary" color="primary" :model-value="checked10" @update:modelValue="toggleChecked('checked10')"/>
  <neon-toggle-chip label="Info" color="info" :model-value="checked11" @update:modelValue="toggleChecked('checked11')"/>
  <neon-toggle-chip label="Warning" color="warn" :model-value="checked12" @update:modelValue="toggleChecked('checked12')"/>
</div>`;

    const fewOptionsTemplate = `<div class="example--horizontal">
  <neon-toggle-chip :show-check="false" size="s" label="Bacon" :model-value="checked13" @update:modelValue="toggleChecked('checked13')"/>
  <neon-toggle-chip :show-check="false" size="s" label="Cheese" :model-value="checked14" @update:modelValue="toggleChecked('checked14')"/>
  <neon-toggle-chip :show-check="false" size="s" label="Pineapple" :model-value="checked15" @update:modelValue="toggleChecked('checked15')"/>
  <neon-toggle-chip :show-check="false" size="s" label="Mushrooms" :model-value="checked16" @update:modelValue="toggleChecked('checked16')"/>
</div>`;

    const stateTemplate = `<div class="example--vertical">
  <neon-toggle-chip size="m" label="Disabled" color="primary" :disabled="true" :model-value="checked17" @update:modelValue="toggleChecked('checked17')"/>
</div>`;

    const examples = ref([
      {
        title: 'Toggle chip sizes',
        template: sizeTemplate,
        data,
      },
      {
        title: 'Toggle chip with no check',
        template: noCheckTemplate,
        data,
      },
      {
        title: 'Toggle chip colors',
        template: colorTemplate,
        data,
      },
      {
        title: 'Group toggle chips',
        tip: 'Use toggle chips as an alternative to a multi-select with only a few options',
        template: fewOptionsTemplate,
        data,
      },
      {
        title: 'Disabled toggle chip',
        template: stateTemplate,
        data,
      },
    ]);

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonToggleChip')));

    return {
      menuModel,
      headline,
      data,
      examples,
    };
  },
});
