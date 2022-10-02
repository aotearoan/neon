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

    const data = ref({
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
    });

    const sizeTemplate = `<div class="example--vertical">
  <neon-toggle-chip size="xs" label="Extra Small" v-model="checked1" />
  <neon-toggle-chip size="s" label="Small" v-model="checked2" />
  <neon-toggle-chip label="Medium" v-model="checked3" />
  <neon-toggle-chip size="l" label="Large" v-model="checked4" />
</div>`;

    const noCheckTemplate = `<div class="example--vertical">
  <neon-toggle-chip :show-check="false" size="xs" label="Extra small" v-model="checked5" />
  <neon-toggle-chip :show-check="false" size="s" label="Small" v-model="checked6" />
  <neon-toggle-chip :show-check="false" size="m" label="Medium" v-model="checked7" />
  <neon-toggle-chip :show-check="false" size="l" label="Large" v-model="checked8" />
</div>`;

    const colorTemplate = `<div class="example--vertical">
  <neon-toggle-chip label="Brand" color="brand" v-model="checked9" />
  <neon-toggle-chip label="Primary" color="primary" v-model="checked10" />
  <neon-toggle-chip label="Info" color="info" v-model="checked11" />
  <neon-toggle-chip label="Warning" color="warn" v-model="checked12" />
</div>`;

    const fewOptionsTemplate = `<div class="example--horizontal">
  <neon-toggle-chip :show-check="false" size="s" label="Bacon" v-model="checked13" />
  <neon-toggle-chip :show-check="false" size="s" label="Cheese" v-model="checked14" />
  <neon-toggle-chip :show-check="false" size="s" label="Pineapple" v-model="checked15" />
  <neon-toggle-chip :show-check="false" size="s" label="Mushrooms" v-model="checked16" />
</div>`;

    const stateTemplate = `<div class="example--vertical">
  <neon-toggle-chip size="m" label="Disabled" color="primary" :disabled="true" v-model="checked17" />
</div>`;

    const examples = ref([
      {
        title: 'Toggle chip sizes',
        template: sizeTemplate,
        data: data.value,
      },
      {
        title: 'Toggle chip with no check',
        template: noCheckTemplate,
        data: data.value,
      },
      {
        title: 'Toggle chip colors',
        template: colorTemplate,
        data: data.value,
      },
      {
        title: 'Group toggle chips',
        tip: 'Use toggle chips as an alternative to a multi-select with only a few options',
        template: fewOptionsTemplate,
        data: data.value,
      },
      {
        title: 'Disabled toggle chip',
        template: stateTemplate,
        data: data.value,
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
