import { defineComponent, onMounted, ref } from 'vue';
import { NeonCard, NeonCardBody, NeonCardHeader, NeonFile } from '@/neon';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'File',
  components: {
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
    NeonFile,
    ComponentDocumentation,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('HTML file upload input');

    const data = ref({
      files: [],
    });

    const fileExamples = `<div class="neon-vertically-spaced">
  <neon-file @update:modelValue="files = $event" label="Select file" />
  <neon-file @update:modelValue="files = $event" color="brand" :multiple="true" label="Add files" icon="plus" />
  <neon-file @update:modelValue="files = $event" :multiple="true" label="Add SVG files" />
  <neon-file @update:modelValue="files = $event" :direct-upload="true" :multiple="true" label="Direct upload" />
</div>`;

    const examples = ref([
      {
        title: 'File example',
        template: fileExamples,
        data,
      },
    ]);

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonFile')));

    return {
      menuModel,
      headline,
      data,
      examples,
    };
  },
});
