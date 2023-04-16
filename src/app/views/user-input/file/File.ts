import { defineComponent, onMounted, ref } from 'vue';
import { NeonCard, NeonCardBody, NeonCardHeader, NeonFile } from '@/neon';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';
import Editor from '@/app/components/editor/Editor.vue';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'File',
  components: {
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
    NeonFile,
    ComponentDocumentation,
    Editor,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('HTML file upload input');

    const files = ref([]);

    const fileExamples = `<neon-file @update:modelValue="files = $event" label="Select file" />
<neon-file @update:modelValue="files = $event" color="brand" :multiple="true" label="Add files" icon="plus" />
<neon-file @update:modelValue="files = $event" :multiple="true" label="Add SVG files" />
<neon-file @update:modelValue="files = $event" :direct-upload="true" :multiple="true" label="Direct upload" />`;

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonFile')));

    return {
      menuModel,
      headline,
      fileExamples,
      files,
    };
  },
});
