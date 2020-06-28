import { Component, Prop, Vue } from 'vue-property-decorator';
import { NeonPosition } from '../../../common/enums/NeonPosition';
import { NeonClosableUtils } from '../../../common/utils/NeonClosableUtils';

@Component
export default class NeonDrawer extends Vue {
  $refs!: {
    drawer: HTMLDivElement;
  };

  private closableUtils?: NeonClosableUtils;

  @Prop()
  public fullWidth?: boolean;

  @Prop({ required: true })
  public open!: boolean;

  @Prop({ default: NeonPosition.Left })
  public position?: NeonPosition;

  @Prop({ default: true })
  public overlay!: boolean;

  public mounted() {
    this.closableUtils = new NeonClosableUtils(this.$refs.drawer, this.close);
  }

  public beforeDestroy() {
    this.closableUtils && this.closableUtils.destroy();
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
