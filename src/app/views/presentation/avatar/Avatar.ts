import { defineComponent, onMounted, ref } from 'vue';
import { NeonAvatar, NeonBadgeSize, NeonCard, NeonCardBody, NeonFunctionalColor, NeonInline, NeonStack } from '@/neon';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';
import Editor from '@/app/components/editor/Editor.vue';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';

export default defineComponent({
  name: 'Avatar',
  components: {
    NeonCard,
    NeonCardBody,
    NeonAvatar,
    NeonStack,
    NeonInline,
    ComponentDocumentation,
    Editor,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('Display user avatars and profile pictures');

    const baseExample = `<neon-avatar name="John Doe" />
<neon-avatar image-url="/path/to/image.jpg" />`;

    const sizesExample = `<neon-avatar name="John Doe" size="s" />
<neon-avatar name="John Doe" size="m" />
<neon-avatar name="John Doe" size="l" />
<neon-avatar name="John Doe" size="xl" />
<neon-avatar name="John Doe" size="xxl" />
<neon-avatar name="John Doe" size="xxxl" />`;

    const initialsExample = `<!-- Full name generates two initials from first and last name -->
<neon-avatar name="John Doe" />
<!-- Single name generates first two letters -->
<neon-avatar name="John" />
<!-- Long names still use first and last initials -->
<neon-avatar name="Johann Sebastian Bach" />`;

    const shapesExample = `<!-- Circular avatar (default) -->
<neon-avatar name="John Doe" />
<!-- Square avatar -->
<neon-avatar name="John Doe" :circular="false" />`;

    const colorExample = `<neon-avatar name="John Doe" color="brand" />
<neon-avatar name="John Doe" color="accent" />
<neon-avatar name="John Doe" color="primary" />`;

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonAvatar')));

    return {
      baseUrl: import.meta.env.VITE_BASE_URL,
      menuModel,
      headline,
      baseExample,
      sizesExample,
      initialsExample,
      shapesExample,
      colorExample,
      NeonBadgeSize,
      NeonFunctionalColor,
    };
  },
});
