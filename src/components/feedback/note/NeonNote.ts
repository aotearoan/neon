import { Component, Prop, Vue } from 'vue-property-decorator';
import { NeonFunctionalColor } from '../../../common/enums/NeonFunctionalColor';
import NeonIcon from '../../presentation/icon/NeonIcon.vue';
import NeonButton from '../../user-input/button/NeonButton.vue';
import { TranslateResult } from 'vue-i18n';

/**
 * NeonNote is a component for displaying important information to the user, such as - notes, hints or quotes.
 */
@Component({
  components: {
    NeonIcon,
    NeonButton,
  },
})
export default class NeonNote extends Vue {
  /**
   * The color of the note. In the case of the colors info, success, warn and error an icon will also be displayed to further enhance user comprehension.
   */
  @Prop({ default: NeonFunctionalColor.LowContrast })
  public color!: NeonFunctionalColor;

  /**
   * Whether or not the note has a close button
   */
  @Prop({ default: false })
  public closable!: boolean;

  /**
   * Display the associated icon for info, success, warn and error colors.
   */
  @Prop({ default: true })
  public icon!: boolean;

  /**
   * Note close button aria label.
   */
  @Prop({ default: 'Close note' })
  public ariaLabelCloseNote!: TranslateResult;

  private get iconName() {
    if (this.icon) {
      switch (this.color) {
        case NeonFunctionalColor.Info:
          return 'info-circle';
        case NeonFunctionalColor.Success:
          return 'check-circle';
        case NeonFunctionalColor.Warn:
          return 'exclamation-circle';
        case NeonFunctionalColor.Error:
          return 'times-circle';
        default:
          return undefined;
      }
    }

    return undefined;
  }

  private closeNote() {
    /**
     * emitted when the user clicks the close button on the note
     * @type {void}
     */
    this.$emit('close-note');
  }
}
