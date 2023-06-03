import { defineComponent, onMounted, ref } from 'vue';
import { NeonCard, NeonCardBody, NeonStack, NeonSwitch } from '@/neon';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';
import Editor from '@/app/components/editor/Editor.vue';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';

export default defineComponent({
  name: 'SwitchExample',
  components: {
    ComponentDocumentation,
    Editor,
    NeonCard,
    NeonCardBody,
    NeonSwitch,
    NeonStack,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('Switch and toggle on or off');

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
    const checked13 = ref(true);
    const checked14 = ref(true);
    const indeterminate = ref(true);

    const setIndeterminate = () => {
      indeterminate.value = false;
    };

    const sizeTemplate = `<neon-switch v-model="checked1" label="Small" size="s" />
<neon-switch v-model="checked2" label="Medium" />
<neon-switch v-model="checked3" label="Large" size="l" />`;

    const colorTemplate = `<neon-switch v-model="checked4" color="low-contrast" label="Low contrast" size="m" />
<neon-switch v-model="checked5" color="info" label="Info" size="m" />`;

    const labelTemplate = `<neon-switch v-model="checked6" color="primary" label="Right label" size="m" />
<neon-switch v-model="checked7" color="primary" label="Left label" label-position="left" size="m" />`;

    const stateTemplate =
      '<neon-switch v-model="checked8" :disabled="true" color="primary" label="Disabled" size="m" />';

    const checkboxTemplate = `<neon-switch v-model="checked9" label="Small checkbox" size="s" switch-style="checkbox" />
<neon-switch v-model="checked10" label="Medium checkbox" switch-style="checkbox" />
<neon-switch v-model="checked11" label="Large checkbox" size="l" switch-style="checkbox" />
<neon-switch v-model="checked12" label="Left label" label-position="left" switch-style="checkbox" />
<neon-switch
  v-model="checked13"
  :indeterminate="indeterminate"
  label="Indeterminate checkbox"
  switch-style="checkbox"
  @indeterminate-change="setIndeterminate()"
/>
<neon-switch v-model="checked14" :disabled="true" label="Disabled checkbox" switch-style="checkbox" />`;

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonSwitch')));

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
      indeterminate,
      sizeTemplate,
      colorTemplate,
      labelTemplate,
      stateTemplate,
      checkboxTemplate,
      setIndeterminate,
    };
  },
});
