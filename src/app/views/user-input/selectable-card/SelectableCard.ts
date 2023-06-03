import { defineComponent, onMounted, ref } from 'vue';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';
import { NeonCard, NeonCardBody, NeonSelectableCard, NeonStack } from '@/neon';
import Editor from '@/app/components/editor/Editor.vue';

export default defineComponent({
  name: 'SelectableCard',
  components: {
    NeonCard,
    NeonCardBody,
    NeonSelectableCard,
    NeonStack,
    ComponentDocumentation,
    Editor,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('A card which can be selected');

    const cardCount = 3;
    const selected = ref<Array<boolean>>(new Array(cardCount).fill(false));
    const selectedColor = ref<boolean>(true);
    const selectedSize = ref<boolean>(true);
    const selectedDisabled = ref<boolean>(true);

    const example = `<neon-selectable-card v-model="selected">
  <neon-card-body>
    <span>Pig doner tri-tip tongue pork, shank kevin pork belly shoulder</span>
  </neon-card-body>
</neon-selectable-card>`;

    const exampleColor = `<neon-selectable-card v-model="selected" color="info">
  <neon-card-body>
    <span>Pig doner tri-tip tongue pork, shank kevin pork belly shoulder</span>
  </neon-card-body>
</neon-selectable-card>`;

    const exampleSize = `<neon-selectable-card v-model="selected" size="m">
  <neon-card-body>
    <span>Pig doner tri-tip tongue pork, shank kevin pork belly shoulder</span>
  </neon-card-body>
</neon-selectable-card>`;

    const exampleDisabled = `<neon-selectable-card v-model="selected" :disabled="true">
  <neon-card-body>
    <span>Pig doner tri-tip tongue pork, shank kevin pork belly shoulder</span>
  </neon-card-body>
</neon-selectable-card>`;

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonSelectableCard')));

    return {
      example,
      exampleColor,
      exampleSize,
      exampleDisabled,
      menuModel,
      headline,
      selected,
      selectedColor,
      selectedSize,
      selectedDisabled,
      cardCount,
    };
  },
});
