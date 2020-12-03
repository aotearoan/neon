import { Component, Prop, Vue } from 'vue-property-decorator';
import { NeonFunctionalColor } from '../../../common/enums/NeonFunctionalColor';
import NeonButton from '../../user-input/button/NeonButton.vue';
import NeonCard from '../../layout/card/NeonCard.vue';
import NeonCardBody from '../../layout/card/body/NeonCardBody.vue';
import NeonModal from '../../layout/modal/NeonModal.vue';
import { TranslateResult } from 'vue-i18n';

/**
 * A dialog component for confirming simple actions. This will be rendered above the content of the main window and
 * present just two options to the user, one to proceed with the action and the other to cancel it.
 */
@Component({
  components: {
    NeonButton,
    NeonCard,
    NeonCardBody,
    NeonModal,
  },
})
export default class NeonDialog extends Vue {
  /**
   * The color of the button for the confirm (positive) action.
   */
  @Prop({ default: NeonFunctionalColor.Primary })
  public color!: NeonFunctionalColor;

  /**
   * The label of the button for the cancel (negative) action.
   */
  @Prop({ default: 'Cancel' })
  public cancelLabel!: TranslateResult;

  /**
   * The label of the button for the confirm (positive) action.
   */
  @Prop({ default: 'Confirm' })
  public confirmLabel!: TranslateResult;

  /**
   * The dialog title
   */
  @Prop({ required: true })
  public title!: TranslateResult;

  /**
   * The dialog question. Can be html (rendered using v-html).
   */
  @Prop({ required: true })
  public question!: TranslateResult;

  /**
   * Whether or not the dialog is open.
   */
  @Prop({ default: false })
  public open!: boolean;

  private cancel() {
    /**
     * emitted when the user clicks the cancel (negative) action button.
     * @type {void}
     */
    this.$emit('cancel');
  }

  private confirm() {
    /**
     * emitted when the user clicks the confirm (positive) action button.
     * @type {void}
     */
    this.$emit('confirm');
  }
}
