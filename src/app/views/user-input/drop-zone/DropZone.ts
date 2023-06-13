import { defineComponent, onMounted, ref } from 'vue';
import { NeonCard, NeonCardBody, NeonCardHeader, NeonDropZone, NeonInline, NeonInput, NeonStack } from '@/neon';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';
import Editor from '@/app/components/editor/Editor.vue';

export default defineComponent({
  name: 'DropZone',
  components: {
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
    NeonInput,
    NeonDropZone,
    NeonInline,
    NeonStack,
    ComponentDocumentation,
    Editor,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('A target for uploading files');

    const dropZoneExamples = `<neon-drop-zone>
  <span>Drop files here to upload</span>
</neon-drop-zone>
<neon-drop-zone :circular="true" :disabled="false">
  <span>Circular drop zone</span>
</neon-drop-zone>`;

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonDropZone')));

    return {
      menuModel,
      headline,
      dropZoneExamples,
    };
  },
});
