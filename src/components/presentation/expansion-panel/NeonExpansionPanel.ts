import { Component, Prop, Vue } from 'vue-property-decorator';
import { TranslateResult } from 'vue-i18n';
import { NeonVerticalPosition } from '../../../common/enums/NeonVerticalPosition';
import { NeonSize } from '../../../common/enums/NeonSize';
import NeonExpansionIndicator from '../expansion-indicator/NeonExpansionIndicator.vue';
import NeonIcon from '../icon/NeonIcon.vue';
import { NeonFunctionalColor } from '../../../common/enums/NeonFunctionalColor';

/**
 * <p>Expansion panels are used to show and hide content that may be less important or too large to display on screen
 * all of the time. They can also be used to expand lists of items, e.g. <em>Show more</em>. The expansion panel consists
 * of a button which, when clicked, toggles the open/closed state of the expansion panel and a slot for the content to
 * display on expansion.</p>
 */
@Component({
  components: {
    NeonExpansionIndicator,
    NeonIcon,
  },
})
export default class NeonExpansionPanel extends Vue {
  /**
   * A boolean indicating whether or not the expansion panel is expanded.
   */
  @Prop({ required: true })
  public value!: boolean;

  /**
   * The label of the expansion button
   */
  @Prop({ required: true })
  public label!: TranslateResult;

  /**
   * An icon to display to the left of the label
   */
  @Prop()
  public icon?: string;

  /**
   * The position of the expansion button. This can be located above the content to expand or below it.
   */
  @Prop({ default: NeonVerticalPosition.Top })
  public position!: NeonVerticalPosition;

  /**
   * The size of the expansion panel button.
   */
  @Prop({ default: NeonSize.Medium })
  public size!: NeonSize;

  /**
   * The color of the expansion panel button.
   */
  @Prop({ default: NeonFunctionalColor.Neutral })
  public color!: NeonFunctionalColor;

  /**
   * The disabled state of the expansion panel
   */
  @Prop({ default: false })
  public disabled!: boolean;

  private toggleExpanded() {
    if (!this.disabled) {
      /**
       * Emitted when the expansion panel button is clicked.
       * @type {boolean} The new open state of the expansion panel.
       */
      this.$emit('input', !this.value);
    }
  }
}
