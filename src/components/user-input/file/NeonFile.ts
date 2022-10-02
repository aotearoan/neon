import { computed, defineComponent, ref } from 'vue';
import { NeonSize } from '@/common/enums/NeonSize';
import { NeonFunctionalColor } from '@/common/enums/NeonFunctionalColor';
import { NeonState } from '@/common/enums/NeonState';
import NeonButton from '@/components/button/NeonButton.vue';
import NeonInput from '@/components/input/NeonInput.vue';
import NeonList from '@/components/list/NeonList.vue';

/**
 * A file upload component. This is a wrapper around an HTML file input. It can display multiple files as well as
 * providing a convenient UI for removing/clearing files from the list.
 */
export default defineComponent({
  name: 'NeonFile',
  components: {
    NeonButton,
    NeonInput,
    NeonList,
  },
  props: {
    /**
     * The disabled state of the component
     */
    disabled: { type: Boolean, default: false },
    /**
     * Files are uploaded directly once added, there is no waiting to click a confirmation button
     */
    directUpload: { type: Boolean, default: false },
    /**
     * Support multiple files.
     */
    multiple: { type: Boolean, default: false },
    /**
     * HTML file input accept property for filtering the files the user is allowed to select. THis is a mime type,
     * e.g. 'application/pdf'.
     */
    accept: { type: String, default: null },
    /**
     * Provide an id to attach to the internal HTML input[file] (also adds an aria-controls link between the button and
     * the hidden input).
     */
    id: { type: String, default: null },
    /**
     * The file component size
     */
    size: { type: String as () => NeonSize, default: NeonSize.Medium },
    /**
     * The state of the input, used to indicate loading, success and error states
     */
    state: { type: String as () => NeonState, default: NeonState.Ready },
    /**
     * The file component color
     */
    color: { type: String as () => NeonFunctionalColor, default: NeonFunctionalColor.LowContrast },
    /**
     * The label of the file component button
     */
    label: { type: String, default: null },
    /**
     * The icon of the file component button
     */
    icon: { type: String, default: null },
  },
  emits: [
    /**
     * Emitted when files are selected and uploaded
     * @type {File | File[]} either a single File (multiple = false) or a list of File objects (multiple = true)
     */
    'update:modelValue',
  ],
  setup(props, { emit }) {
    const fileInput = ref<HTMLInputElement | null>(null);
    const files = ref<Array<File>>([]);
    const fileInputModel = ref('');

    const fileList = computed(() => {
      return files.value.map((file) => ({ key: file.name, label: file.name }));
    });

    const emitFiles = () => {
      emit('update:modelValue', props.multiple ? files.value : files.value[0]);
      if (props.directUpload) {
        files.value = [];
      }
    };

    const remove = (filename: string) => {
      if (!props.disabled) {
        files.value = files.value.filter((f) => f.name !== filename);
        emitFiles();
      }
    };

    const clearAll = () => {
      if (!props.disabled) {
        files.value = [];
        emitFiles();
      }
    };

    const openFileDialog = () => {
      fileInput.value?.click();
    };

    const onInput = (event: Event) => {
      if (event?.target) {
        const theFiles = (event.target as HTMLInputElement).files;
        const newFiles = theFiles
          ? Array.from(theFiles).filter((file) => !files.value.find((f) => f.name === file.name))
          : [];
        files.value = props.multiple ? [...files.value, ...newFiles] : newFiles;
        emitFiles();
      }
    };

    return {
      fileInput,
      files,
      fileList,
      fileInputModel,
      remove,
      clearAll,
      openFileDialog,
      onInput,
    };
  },
});
