import { defineComponent, onMounted, onUnmounted, ref } from 'vue';
import { NeonState } from '../../../common/enums/NeonState';

/**
 * Defines a file drop zone.
 */
export default defineComponent({
  name: 'NeonDropZone',
  props: {
    /**
     * The state of the drop zone, used to indicate loading. ACCEPTS <em>Ready</em> and <em>Loading</em> states ONLY.
     */
    state: { type: String as () => NeonState, default: () => NeonState.Ready },
    /**
     * The disabled state of the drop zone
     */
    disabled: { type: Boolean, default: false },
    /**
     * Display the drop zone as a circle instead of square
     */
    circular: { type: Boolean, default: false },
  },
  emits: [
    /**
     * Emitted when files are dropped on the drop zone
     * @type {FileList} the list of dropped files
     */
    'files',
  ],
  setup(props, { emit }) {
    const dropzone = ref<HTMLDivElement | null>(null);
    const active = ref(false);

    const processDragOverOrEnter = (event: DragEvent) => {
      if (event?.dataTransfer) {
        event.preventDefault();
        event.dataTransfer.effectAllowed = 'copy';
        active.value = true;
      }
      return false;
    };

    const processDragLeave = () => {
      active.value = false;
    };

    const transferData = (event: DragEvent) => {
      if (!(props.state === 'loading') && !props.disabled && event != null && event.dataTransfer) {
        event.preventDefault();
        emit('files', event.dataTransfer.files);
        active.value = false;
      }

      return false;
    };

    onMounted(() => {
      if (dropzone.value) {
        dropzone.value.addEventListener('dragover', processDragOverOrEnter);
        dropzone.value.addEventListener('dragenter', processDragOverOrEnter);
        dropzone.value.addEventListener('dragleave', processDragLeave);
        dropzone.value.addEventListener('drop', transferData);
      }
    });

    onUnmounted(() => {
      if (dropzone.value) {
        dropzone.value.removeEventListener('dragover', processDragOverOrEnter);
        dropzone.value.removeEventListener('dragenter', processDragOverOrEnter);
        dropzone.value.addEventListener('dragleave', processDragLeave);
        dropzone.value.removeEventListener('drop', transferData);
      }
    });

    return {
      active,
      dropzone,
    };
  },
});
