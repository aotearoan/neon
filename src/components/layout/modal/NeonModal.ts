import { Component, Prop, Vue } from 'vue-property-decorator';
import { NeonClosableUtils } from '../../common/NeonClosebleUtils';

@Component
export default class NeonModal extends Vue {
  $refs!: {
    modal: HTMLDivElement;
  };

  private closableUtils?: NeonClosableUtils;

  @Prop({ required: true })
  public open!: boolean;

  @Prop({ default: true })
  public dismissable!: boolean;

  public mounted() {
    if (this.dismissable) {
      this.closableUtils = new NeonClosableUtils(this.$refs.modal, this.close);
    }
  }

  public beforeDestroy() {
    if (this.dismissable && this.closableUtils) {
      this.closableUtils.destroy();
    }
  }

  public onClose() {
    /**
     * close event is emitted when the element is closed.
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
