import { Component, Prop, Vue } from 'vue-property-decorator';
import { NeonState } from '../../common/NeonState';

@Component
export default class NeonDropZone extends Vue {
  $refs!: {
    dropzone: HTMLDivElement;
  };

  private active = false;

  @Prop({ default: NeonState.Ready })
  state?: NeonState.Ready | NeonState.Loading;

  @Prop()
  disabled?: boolean;

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
      this.$emit('files', event.dataTransfer.files);
      this.active = false;
    }

    return false;
  }
}
