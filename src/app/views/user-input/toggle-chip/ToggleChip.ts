import { defineComponent, onMounted, ref } from 'vue';
import { NeonCard, NeonCardBody, NeonNote, NeonStack, NeonToggleChip } from '@/neon';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';
import Editor from '@/app/components/editor/Editor.vue';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';

export default defineComponent({
  name: 'ToggleChip',
  components: {
    ComponentDocumentation,
    Editor,
    NeonCard,
    NeonCardBody,
    NeonToggleChip,
    NeonNote,
    NeonStack,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('Chips for toggling state');

    const checked1 = ref(true);
    const checked2 = ref(true);
    const checked3 = ref(true);
    const checked4 = ref(true);
    const checked5 = ref(true);
    const checked6 = ref(true);
    const checked7 = ref(true);
    const checked8 = ref(true);
    const checked9 = ref(true);
    const checked10 = ref(true);
    const checked11 = ref(true);
    const checked12 = ref(true);
    const checked13 = ref(false);
    const checked14 = ref(true);
    const checked15 = ref(false);
    const checked16 = ref(false);
    const checked17 = ref(false);

    const sizeTemplate = `<neon-toggle-chip v-model="checked1" label="Extra Small" size="xs" />
<neon-toggle-chip v-model="checked2" label="Small" size="s" />
<neon-toggle-chip v-model="checked3" label="Medium" />
<neon-toggle-chip v-model="checked4" label="Large" size="l" />`;

    const noCheckTemplate = `<neon-toggle-chip v-model="checked5" :show-check="false" label="Extra small" size="xs" />
<neon-toggle-chip v-model="checked6" :show-check="false" label="Small" size="s" />
<neon-toggle-chip v-model="checked7" :show-check="false" label="Medium" size="m" />
<neon-toggle-chip v-model="checked8" :show-check="false" label="Large" size="l" />`;

    const colorTemplate = `<neon-toggle-chip v-model="checked9" color="brand" label="Brand" />
<neon-toggle-chip v-model="checked10" color="primary" label="Primary" />
<neon-toggle-chip v-model="checked11" color="info" label="Info" />
<neon-toggle-chip v-model="checked12" color="warn" label="Warning" />`;

    const fewOptionsTemplate = `<neon-toggle-chip v-model="checked13" :show-check="false" label="Bacon" size="s" />
<neon-toggle-chip v-model="checked14" :show-check="false" label="Cheese" size="s" />
<neon-toggle-chip v-model="checked15" :show-check="false" label="Pineapple" size="s" />
<neon-toggle-chip v-model="checked16" :show-check="false" label="Mushrooms" size="s" />`;

    const stateTemplate =
      '<neon-toggle-chip v-model="checked17" :disabled="true" color="primary" label="Disabled" size="m" />';

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonToggleChip')));

    return {
      menuModel,
      headline,
      checked1,
      checked2,
      checked3,
      checked4,
      checked5,
      checked6,
      checked7,
      checked8,
      checked9,
      checked10,
      checked11,
      checked12,
      checked13,
      checked14,
      checked15,
      checked16,
      checked17,
      sizeTemplate,
      noCheckTemplate,
      colorTemplate,
      fewOptionsTemplate,
      stateTemplate,
    };
  },
});
