import { defineComponent, ref } from 'vue';
import { NeonAnchor, NeonCard, NeonCardBody, NeonCardHeader, NeonLink, NeonStack } from '@/neon';
import Editor from '@/app/components/editor/Editor.vue';

export default defineComponent({
  name: 'GettingStarted',
  components: {
    NeonAnchor,
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
    NeonLink,
    NeonStack,
    Editor,
  },
  setup() {
    const darkModeExample = ref('<html class="app neon neon-mode--dark">');
    const appClassExample = ref('<div id="app" class="neon-app">');

    const importComponents = ref(`import { NeonButton } from '@aotearoan/neon';

export default defineComponent({
  name: 'SomeComponent',
  components: {
    NeonButton,
  },
  ...
});`);

    const allTheSass = ref(`@use '@aotearoan/neon/theme' with (
  $neon-components: (
      NeonAlert,
      NeonButton,
      NeonCard,
      NeonCardBody,
      NeonCardFooter,
      NeonCardHeader,
      NeonDrawer,
  ),
);`);

    return {
      darkModeExample,
      appClassExample,
      importComponents,
      allTheSass,
    };
  },
});
