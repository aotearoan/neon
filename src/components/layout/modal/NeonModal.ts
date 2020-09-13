import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { NeonClosableUtils } from '../../../common/utils/NeonClosableUtils';

/**
 * A modal dialog component. This will be rendered above the content of the main window and can either be dismissed by the user or configured to require user interaction before dismissal.
 */
@Component
export default class NeonModal extends Vue {
  $refs!: {
    modal: HTMLDivElement;
  };

  private closableUtils?: NeonClosableUtils;

  /**
   * Whether or not the modal is currently open.
   */
  @Prop({ required: true })
  public open!: boolean;

  /**
   * Whether or not the user is allowed to dismiss the modal by clicking outside of the modal or pressing escape.
   */
  @Prop({ default: true })
  public dismissable!: boolean;

  public mounted() {
    if (this.dismissable) {
      this.closableUtils = new NeonClosableUtils(this.$refs.modal, this.close);
    }
  }

  @Watch('open', { immediate: true })
  private onOpen(open: boolean) {
    if (open) {
      this.closableUtils && this.closableUtils.open();
    }
  }

  public beforeDestroy() {
    if (this.dismissable && this.closableUtils) {
      this.closableUtils.destroy();
    }
  }

  public onClose() {
    /**
     * Emitted when the modal is closed.
     * @type {void}
     */
    this.$emit('close');
  }

  public close() {
    if (this.open) {
      this.onClose();
    }
  }
}
