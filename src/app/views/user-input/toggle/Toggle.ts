import { defineComponent, onMounted, ref } from 'vue';
import { NeonCard, NeonCardBody, NeonToggle } from '@/neon';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';
import { NeonFunctionalColor } from '@/common/enums/NeonFunctionalColor';
import { NeonSize } from '@/common/enums/NeonSize';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Toggle',
  components: {
    NeonCard,
    NeonCardBody,
    NeonToggle,
    ComponentDocumentation,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('For selecting one of several items');

    const data = ref({
      model: [
        {
          key: 'key-1',
          label: 'Label 1',
        },
        {
          key: 'key-2',
          label: 'Label 2',
          disabled: true,
        },
        {
          key: 'key-3',
          label: 'Label 3',
        },
        {
          key: 'key-4',
          label: 'Label 4',
          disabled: true,
        },
      ],
      iconModel: [
        {
          key: 'left',
          icon: 'align-left',
        },
        {
          key: 'centered',
          icon: 'align-center',
        },
        {
          key: 'right',
          icon: 'align-right',
        },
      ],
      selected1: 'key-2',
      selected2: 'key-2',
      selected3: 'key-2',
      selected4: 'key-2',
      selected5: 'key-2',
      selected6: 'key-2',
      selected7: 'left',
      selected8: 'key-2',
      selected9: 'key-2',
      selected10: 'key-2',
      iconSelected: 'centered',
      colors: Object.values(NeonFunctionalColor),
      sizes: Object.values(NeonSize),
    });

    const toggleSizes = `<div class="neon-vertically-spaced">
  <neon-toggle name="toggle-1" size="s" :model="model" v-model="selected1" />
  <neon-toggle name="toggle-2" size="m" :model="model" v-model="selected2" />
  <neon-toggle name="toggle-3" size="l" :model="model" v-model="selected3" />
</div>`;

    const toggleColors = `<div class="neon-vertically-spaced">
  <neon-toggle name="toggle-4" :model="model" v-model="selected4" />
  <neon-toggle name="toggle-5" color="info" :model="model" v-model="selected5" />
  <neon-toggle name="toggle-6" color="success" :model="model" v-model="selected6" />
</div>`;

    const toggleIcons = '<neon-toggle name="toggle-7" :model="iconModel" v-model="selected7" />';

    const radioButtons = `<div class="neon-vertically-spaced">
  <neon-toggle name="toggle-8" orientation="horizontal" toggle-style="radio-buttons" :model="model" color="success" v-model="selected8" />
  <neon-toggle name="toggle-9" toggle-style="radio-buttons" :model="model" v-model="selected9" />
</div>`;

    const examples = ref([
      {
        title: 'Toggle sizes',
        template: toggleSizes,
        data: data.value,
      },
      {
        title: 'Toggle colors',
        template: toggleColors,
        data: data.value,
      },
      {
        title: 'Toggle with icons',
        template: toggleIcons,
        data: data.value,
      },
      {
        title: 'Radio buttons',
        template: radioButtons,
        data: data.value,
      },
    ]);

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonToggle')));

    return {
      menuModel,
      headline,
      data,
      examples,
    };
  },
});
