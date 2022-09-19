import { defineComponent, onMounted, ref } from 'vue';
import { NeonCard, NeonCardBody, NeonSwitch } from '@/neon';
import ComponentDocumentation from '../../../components/component-documentation/ComponentDocumentation.vue';
import type { MenuModel } from '../../../Menu';
import { Menu } from '../../../Menu';

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
      checked13: true,
      checked14: true,
      indeterminate: true,
    });

    const sizeTemplate = `<div>
  <neon-switch size="s" label="Small" v-model="checked1" />
  <neon-switch label="Medium" v-model="checked2" />
  <neon-switch size="l" label="Large" v-model="checked3" />
</div>`;

    const colorTemplate = `<div>
  <neon-switch size="m" label="Low contrast" color="low-contrast" v-model="checked4" />
  <neon-switch size="m" label="Info" color="info" v-model="checked5" />
</div>`;

    const labelTemplate = `<div>
  <neon-switch size="m" label="Right label" color="primary" v-model="checked6" />
  <neon-switch size="m" label="Left label" color="primary" label-position="left" v-model="checked7" />
</div>`;

    const stateTemplate = `<div>
  <neon-switch size="m" label="Disabled" color="primary" :disabled="true" v-model="checked8" />
</div>`;

    const checkboxTemplate = `<div>
  <neon-switch size="s" label="Small checkbox" v-model="checked9" switch-style="checkbox" />
  <neon-switch label="Medium checkbox" v-model="checked10" switch-style="checkbox" />
  <neon-switch size="l" label="Large checkbox" v-model="checked11" switch-style="checkbox" />
  <neon-switch label="Left label" v-model="checked12" label-position="left" switch-style="checkbox" />
  <neon-switch
    label="Indeterminate checkbox"
    v-model="checked13"
    :indeterminate="indeterminate"
    @indeterminate-change="indeterminate = false"
    switch-style="checkbox"
  />
  <neon-switch label="Disabled checkbox" v-model="checked14" :disabled="true" switch-style="checkbox" />
</div>`;

    const examples = ref([
      {
        title: 'Switch sizes',
        template: sizeTemplate,
        data: data.value,
      },
      {
        title: 'Switch colors',
        template: colorTemplate,
        data: data.value,
      },
      {
        title: 'Label position',
        template: labelTemplate,
        data: data.value,
      },
      {
        title: 'Disabled switch',
        template: stateTemplate,
        data: data.value,
      },
      {
        title: 'Checkbox style',
        template: checkboxTemplate,
        data: data.value,
      },
    ]);

    onMounted(() => menuModel.value = Menu.getComponentConfig('NeonSwitch'));

    return {
      menuModel,
      headline,
      data,
      examples,
    };
  },
});
