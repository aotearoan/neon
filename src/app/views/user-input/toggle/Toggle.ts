import { defineComponent, onMounted, ref } from 'vue';
import { NeonCard, NeonCardBody, NeonFunctionalColor, NeonSize, NeonStack, NeonToggle } from '@/neon';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';
import Editor from '@/app/components/editor/Editor.vue';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Toggle',
  components: {
    NeonCard,
    NeonCardBody,
    NeonToggle,
    NeonStack,
    ComponentDocumentation,
    Editor,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('For selecting one of several items');

    const model = ref([
      {
        key: 'key-1',
        label: 'Label 1',
        icon: 'chevron-left',
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
    ]);

    const iconModel = ref([
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
    ]);

    const selected1 = ref('key-2');
    const selected2 = ref('key-2');
    const selected3 = ref('key-2');
    const selected4 = ref('key-2');
    const selected5 = ref('key-2');
    const selected6 = ref('key-2');
    const selected7 = ref('left');
    const selected8 = ref('key-2');
    const selected9 = ref('key-2');
    const selected10 = ref('key-2');
    const iconSelected = ref('centered');
    const colors = ref(Object.values(NeonFunctionalColor));
    const sizes = ref(Object.values(NeonSize));

    const toggleSizes = `<neon-toggle v-model="selected1" :model="model" name="toggle-1" size="s" />
<neon-toggle v-model="selected2" :model="model" name="toggle-2" size="m" />
<neon-toggle v-model="selected3" :model="model" name="toggle-3" size="l" />`;

    const toggleColors = `<neon-toggle v-model="selected4" :model="model" name="toggle-4" />
<neon-toggle v-model="selected5" :model="model" color="info" name="toggle-5" />
<neon-toggle v-model="selected6" :model="model" color="success" name="toggle-6" />`;

    const toggleIcons = '<neon-toggle v-model="selected7" :model="iconModel" name="toggle-7" />';

    const radioButtons = `<neon-toggle v-model="selected8"
             :model="model"
             color="success"
             name="toggle-8"
             orientation="horizontal"
             toggle-style="radio-buttons" />
<neon-toggle v-model="selected9" :model="model" name="toggle-9" toggle-style="radio-buttons" />`;

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonToggle')));

    return {
      menuModel,
      headline,
      model,
      iconModel,
      selected1,
      selected2,
      selected3,
      selected4,
      selected5,
      selected6,
      selected7,
      selected8,
      selected9,
      selected10,
      iconSelected,
      colors,
      sizes,
      toggleSizes,
      toggleColors,
      toggleIcons,
      radioButtons,
    };
  },
});
