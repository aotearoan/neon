import { defineComponent, onMounted, ref } from 'vue';
import { NeonCard, NeonCardBody, NeonSwitch } from '@/neon';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';

export default defineComponent({
  name: 'SwitchExample',
  components: {
    ComponentDocumentation,
    NeonCard,
    NeonCardBody,
    NeonSwitch,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('Switch and toggle on or off');

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
      checked13: true,
      checked14: true,
      indeterminate: true,
      toggleSwitch: (key: string) => {
        data.value[key] = !data.value[key];
        data.value = { ...data.value };
      },
      setIndeterminate: () => {
        data.value = { ...data.value, indeterminate: false };
      },
    });

    const sizeTemplate = `<div>
  <neon-switch size="s" label="Small" :model-value="checked1" @update:modelValue="toggleSwitch('checked1')" />
  <neon-switch label="Medium" :model-value="checked2" @update:modelValue="toggleSwitch('checked2')" />
  <neon-switch size="l" label="Large" :model-value="checked3" @update:modelValue="toggleSwitch('checked3')" />
</div>`;

    const colorTemplate = `<div>
  <neon-switch size="m" label="Low contrast" color="low-contrast" :model-value="checked4" @update:modelValue="toggleSwitch('checked4')" />
  <neon-switch size="m" label="Info" color="info" :model-value="checked5" @update:modelValue="toggleSwitch('checked5')" />
</div>`;

    const labelTemplate = `<div>
  <neon-switch size="m" label="Right label" color="primary" :model-value="checked6" @update:modelValue="toggleSwitch('checked6')" />
  <neon-switch size="m" label="Left label" color="primary" label-position="left" :model-value="checked7" @update:modelValue="toggleSwitch('checked7')" />
</div>`;

    const stateTemplate = `<div>
  <neon-switch size="m" label="Disabled" color="primary" :disabled="true" :model-value="checked8" @update:modelValue="toggleSwitch('checked8')" />
</div>`;

    const checkboxTemplate = `<div>
  <neon-switch size="s" label="Small checkbox" :model-value="checked9" switch-style="checkbox" @update:modelValue="toggleSwitch('checked9')" />
  <neon-switch label="Medium checkbox" :model-value="checked10" switch-style="checkbox" @update:modelValue="toggleSwitch('checked10')" />
  <neon-switch size="l" label="Large checkbox" :model-value="checked11" switch-style="checkbox" @update:modelValue="toggleSwitch('checked11')" />
  <neon-switch label="Left label" :model-value="checked12" label-position="left" switch-style="checkbox" @update:modelValue="toggleSwitch('checked12')" />
  <neon-switch
    label="Indeterminate checkbox"
    :model-value="checked13"
    :indeterminate="indeterminate"
    @indeterminate-change="setIndeterminate()"
    switch-style="checkbox"
    @update:modelValue="toggleSwitch('checked13')"
  />
  <neon-switch label="Disabled checkbox" :model-value="checked14" :disabled="true" switch-style="checkbox" @update:modelValue="toggleSwitch('checked14')" />
</div>`;

    const examples = ref([
      {
        title: 'Switch sizes',
        template: sizeTemplate,
        data,
      },
      {
        title: 'Switch colors',
        template: colorTemplate,
        data,
      },
      {
        title: 'Label position',
        template: labelTemplate,
        data,
      },
      {
        title: 'Disabled switch',
        template: stateTemplate,
        data,
      },
      {
        title: 'Checkbox style',
        template: checkboxTemplate,
        data,
      },
    ]);

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonSwitch')));

    return {
      menuModel,
      headline,
      data,
      examples,
    };
  },
});
