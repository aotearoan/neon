import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class NeonModal extends Vue {
  $refs!: {
    modal: HTMLDivElement;
  };

  @Prop({ required: true })
  public open!: boolean;

  @Prop({ default: true })
  public dismissable!: boolean;

  public mounted() {
    if (this.dismissable) {
      document.addEventListener('keyup', this.escapeKeyListener);
      document.addEventListener('mousedown', this.handleOutsideClick);
      document.addEventListener('touchstart', this.handleOutsideClick);
    }
  }

  public beforeDestroy() {
    if (this.dismissable) {
      document.removeEventListener('keyup', this.escapeKeyListener);
      document.removeEventListener('mousedown', this.handleOutsideClick);
      document.removeEventListener('touchstart', this.handleOutsideClick);
    }
  }

  public onClose() {
    /**
     * close event is emitted when the element is closed.
     * @type {void}
     */
    this.$emit('close');
  }

  private escapeKeyListener(event: KeyboardEvent) {
    if (event.key === 'Escape' && this.open) {
      this.close();
    }
  }

  private handleOutsideClick(event: MouseEvent | TouchEvent) {
    const target = event.target && (event.target as Element);
    if (target && !this.$refs.modal.contains(target) && this.open) {
      this.close();
    }
    return true;
  }

  public close() {
    if (this.open) {
      this.onClose();
    }
  }
}
