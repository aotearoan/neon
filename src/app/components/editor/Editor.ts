import { defineComponent, onMounted, ref } from 'vue';
import { PrismEditor } from 'vue-prism-editor';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Prism from 'prismjs';
import 'vue-prism-editor/dist/prismeditor.min.css';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-scss';
import 'prismjs/components/prism-typescript';
import 'prismjs/themes/prism-tomorrow.css';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Normalizer from 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace';
import { NeonButton, NeonClipboardService, NeonIcon, NeonToastService } from '@/neon';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Editor',
  components: {
    NeonButton,
    NeonIcon,
    PrismEditor,
  },
  props: {
    modelValue: { type: String, required: true },
    readOnly: { type: Boolean, default: true },
    language: { type: String, default: 'html' },
    ghLink: { type: String, default: null },
  },
  setup(props, { emit }) {
    const clipboard = ref(NeonClipboardService);

    onMounted(() => {
      Prism.plugins.NormalizeWhitespace = new Normalizer({
        'remove-trailing': true,
        'left-trim': true,
        'right-trim': true,
      });
    });

    const highlighter = (code: string) => Prism.highlight(code, Prism.languages[props.language], props.language);

    const onEdit = (newValue: string) => emit('update:modelValue', newValue);

    const copyText = () =>
      clipboard.value.copyTo(props.modelValue).then(() => {
        NeonToastService.success({ title: 'Copied text' });
      });

    return {
      clipboard,
      highlighter,
      onEdit,
      copyText,
    };
  },
});
