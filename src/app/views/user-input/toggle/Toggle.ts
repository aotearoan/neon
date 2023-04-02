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

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data = ref<Record<string, any>>({
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
      updateSelected: (key: string, value: string) => {
        data.value[key] = value;
        data.value = { ...data.value };
      },
    });

    const toggleSizes = `<div class="neon-vertically-spaced">
  <neon-toggle name="toggle-1" size="s" :model="model" :model-value="selected1" @update:modelValue="updateSelected('selected1', $event)" />
  <neon-toggle name="toggle-2" size="m" :model="model" :model-value="selected2" @update:modelValue="updateSelected('selected2', $event)" />
  <neon-toggle name="toggle-3" size="l" :model="model" :model-value="selected3" @update:modelValue="updateSelected('selected3', $event)" />
</div>`;

    const toggleColors = `<div class="neon-vertically-spaced">
  <neon-toggle name="toggle-4" :model="model" :model-value="selected4" @update:modelValue="updateSelected('selected4', $event)" />
  <neon-toggle name="toggle-5" color="info" :model="model" :model-value="selected5" @update:modelValue="updateSelected('selected5', $event)" />
  <neon-toggle name="toggle-6" color="success" :model="model" :model-value="selected6" @update:modelValue="updateSelected('selected6', $event)" />
</div>`;

    const toggleIcons = `<neon-toggle name="toggle-7" :model="iconModel" :model-value="selected7" @update:modelValue="updateSelected('selected7', $event)" />`;

    const radioButtons = `<div class="neon-vertically-spaced">
  <neon-toggle name="toggle-8" orientation="horizontal" toggle-style="radio-buttons" :model="model" color="success" :model-value="selected8" @update:modelValue="updateSelected('selected8', $event)" />
  <neon-toggle name="toggle-9" toggle-style="radio-buttons" :model="model" :model-value="selected9" @update:modelValue="updateSelected('selected9', $event)" />
</div>`;

    const examples = ref([
      {
        title: 'Toggle sizes',
        template: toggleSizes,
        data,
      },
      {
        title: 'Toggle colors',
        template: toggleColors,
        data,
      },
      {
        title: 'Toggle with icons',
        template: toggleIcons,
        data,
      },
      {
        title: 'Radio buttons',
        template: radioButtons,
        data,
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
