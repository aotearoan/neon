import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { NeonPosition } from '../../../common/enums/NeonPosition';
import { NeonClosableUtils } from '../../../common/utils/NeonClosableUtils';

/**
 * A drawer is a slide out panel for representing data which may be secondary or not fit on the main screen. Examples are a responsive navigation menu, more details of a selected item on the page. Drawers can be opened from top, bottom, left or right and an overlay covers the screen to focus more attention on the drawer contents.
 */
@Component
export default class NeonDrawer extends Vue {
  $refs!: {
    drawer: HTMLDivElement;
  };

  private closableUtils?: NeonClosableUtils;

  /**
   * Set the drawer to visible.
   */
  @Prop({ required: true })
  public open!: boolean;

  /**
   * Whether or not the user is allowed to dismiss the modal by clicking outside of the modal or pressing escape.
   */
  @Prop({ default: true })
  public dismissable!: boolean;

  /**
   * If true, remove the padding applied to the drawer.
   */
  @Prop({ default: false })
  public fullWidth!: boolean;

  /**
   * The location of the drawer.
   */
  @Prop({ default: NeonPosition.Left })
  public position!: NeonPosition;

  /**
   * Display a semi-transparent overlay under the drawer, but over the rest of the page.
   */
  @Prop({ default: true })
  public overlay!: boolean;

  public mounted() {
    if (this.dismissable) {
      this.closableUtils = new NeonClosableUtils(this.$refs.drawer, this.close);
    }
  }

  @Watch('open', { immediate: true })
  private onOpen(open: boolean) {
    if (open) {
      this.closableUtils && this.closableUtils.open();
    } else {
      this.closableUtils && this.closableUtils.close();
    }
  }

  public beforeDestroy() {
    this.closableUtils && this.closableUtils.destroy();
  }

  public onClose() {
    /**
     * Emitted when the drawer is closed.
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
