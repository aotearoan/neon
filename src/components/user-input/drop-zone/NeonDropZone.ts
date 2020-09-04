import { Component, Prop, Vue } from 'vue-property-decorator';
import { NeonState } from '../../../common/enums/NeonState';

/**
 * Defines a file drop zone.
 */
@Component
export default class NeonDropZone extends Vue {
  $refs!: {
    dropzone: HTMLDivElement;
  };

  private active = false;

  /**
   * The state of the drop zone, used to indicate loading. ACCEPTS <em>Ready</em> and <em>Loading</em> states ONLY.
   */
  @Prop({ default: NeonState.Ready })
  state!: NeonState;

  /**
   * The disabled state of the drop zone
   */
  @Prop({ default: false })
  disabled!: boolean;

  /**
   * Display the drop zone as a circle instead of square
   */
  @Prop()
  circular?: boolean;

  private processDragOverOrEnter(event: DragEvent) {
    if (event != null && event.dataTransfer) {
      event.preventDefault();
      event.dataTransfer.effectAllowed = 'copy';
      this.active = true;
    }
    return false;
  }

  private processDragLeave() {
    this.active = false;
  }

  public mounted() {
    this.$refs.dropzone.addEventListener('dragover', this.processDragOverOrEnter);
    this.$refs.dropzone.addEventListener('dragenter', this.processDragOverOrEnter);
    this.$refs.dropzone.addEventListener('dragleave', this.processDragLeave);
    this.$refs.dropzone.addEventListener('drop', this.transferData);
  }

  public beforeDestroy() {
    this.$refs.dropzone.removeEventListener('dragover', this.processDragOverOrEnter);
    this.$refs.dropzone.removeEventListener('dragenter', this.processDragOverOrEnter);
    this.$refs.dropzone.addEventListener('dragleave', this.processDragLeave);
    this.$refs.dropzone.removeEventListener('drop', this.transferData);
  }

  private transferData(event: DragEvent) {
    if (!(this.state === 'loading') && !this.disabled && event != null && event.dataTransfer) {
      event.preventDefault();
      /**
       * Emitted when files are dropped on the drop zone
       * @type {FileList} the list of dropped files
       */
      this.$emit('files', event.dataTransfer.files);
      this.active = false;
    }

    return false;
  }
}
