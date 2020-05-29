import { Component, Prop, Vue } from 'vue-property-decorator';
import { NeonPosition } from '../../common/NeonPosition';

@Component
export default class NeonDrawer extends Vue {
  $refs!: {
    drawer: HTMLDivElement;
  };

  @Prop()
  public fullWidth?: boolean;

  @Prop({ required: true })
  public open!: boolean;

  @Prop({ default: NeonPosition.Left })
  public position?: NeonPosition;

  @Prop({ default: true })
  public overlay!: boolean;

  public mounted() {
    document.addEventListener('keyup', this.escapeKeyListener);
    document.addEventListener('mousedown', this.handleOutsideClick);
    document.addEventListener('touchstart', this.handleOutsideClick);
  }

  public beforeDestroy() {
    document.removeEventListener('keyup', this.escapeKeyListener);
    document.removeEventListener('mousedown', this.handleOutsideClick);
    document.removeEventListener('touchstart', this.handleOutsideClick);
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
    if (target && !this.$refs.drawer.contains(target) && this.open) {
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
