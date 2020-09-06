import { Component, Prop, Vue } from 'vue-property-decorator';
import { NeonDropdownPlacement } from '../../../common/enums/NeonDropdownPlacement';
import { NeonDropdownPlacementUtils } from '../../../common/utils/NeonDropdownPlacementUtils';
import { NeonClosableUtils } from '../../../common/utils/NeonClosableUtils';
import { TranslateResult } from 'vue-i18n';
import { NeonSize } from '../../../common/enums/NeonSize';
import { NeonFunctionalColor } from '../../../common/enums/NeonFunctionalColor';
import { NeonDropdownStyle } from '../../../common/enums/NeonDropdownStyle';

/**
 * <p>A general purpose dropdown component. This component consists of a button, to trigger the dropdown to open, and
 * the dropdown content which is displayed above the page when the user clicks the button.</p>
 * <p>This can be useful for secondary (perhaps more complex) actions for which there is not enough space on the page or
 * the action is asynchronous allowing the user to perform the action and continue what they were doing. Examples are
 * providing links to copy and letting the user send feedback.</p>
 * <p><strong>NeonDropdown</strong> is the basis for the <strong>NeonDropdownMenu</strong> component and the
 * <strong>NeonSelect</strong> form component.</p>
 */
@Component
export default class NeonDropdown extends Vue {
  $refs!: {
    dropdownButton: HTMLElement;
    dropdownContent: HTMLDivElement;
  };

  private dropdownPlacement: NeonDropdownPlacement;
  private closableUtils?: NeonClosableUtils;

  /**
   * Whether or not the dropdown is currently open.
   */
  @Prop({ required: true })
  public value!: boolean;

  /**
   * The label for the dropdown button.
   */
  @Prop()
  public label?: TranslateResult;

  /**
   * An icon to display on the dropdown button. This will be to the left of any label, but can also be used on it's own.
   */
  @Prop()
  public icon?: string;

  /**
   * Show the dropdown button's indicator (chevron).
   */
  @Prop({ default: true })
  public indicator!: boolean;

  /**
   * Disable the dropdown button
   */
  @Prop({ default: false })
  public disabled!: boolean;

  /**
   * The size of the dropdown button - Small, Medium or Large.
   */
  @Prop({ default: NeonSize.Medium })
  public size!: NeonSize;

  /**
   * The color of the dropdown button
   */
  @Prop({ default: NeonFunctionalColor.LowContrast })
  public color!: NeonFunctionalColor;

  /**
   * The style of the dropdown button
   */
  @Prop({ default: NeonDropdownStyle.SolidButton })
  public dropdownStyle!: NeonDropdownStyle;

  /**
   * Placement of the dropdown contents.
   */
  @Prop({ default: NeonDropdownPlacement.BottomLeft })
  public placement!: NeonDropdownPlacement;

  /**
   * Restrict placement to within this container.
   */
  @Prop({ required: false })
  public placementContainer?: HTMLElement;

  public constructor() {
    super();
    this.dropdownPlacement = this.placement;
  }

  public mounted() {
    this.closableUtils = new NeonClosableUtils(this.$refs.dropdownContent, this.close);
    window.addEventListener('resize', this.recalculatePlacement);
    window.addEventListener('scroll', this.recalculatePlacement);
    if (this.placementContainer) {
      this.placementContainer.addEventListener('scroll', this.recalculatePlacement);
    }
  }

  public beforeDestroy() {
    this.closableUtils && this.closableUtils.destroy();
    window.removeEventListener('resize', this.recalculatePlacement);
    window.removeEventListener('scroll', this.recalculatePlacement);
    if (this.placementContainer) {
      this.placementContainer.removeEventListener('scroll', this.recalculatePlacement);
    }
  }

  public onClose() {
    /**
     * Emitted when the dropdown is closed.
     * @type {void}
     */
    this.$emit('input');
  }

  public close() {
    if (this.value) {
      this.onClose();
    }
  }

  public toggleOpen() {
    if (!this.disabled) {
      /**
       * Emitted when the dropdown button is toggled.
       * @type {boolean} the open state of the dropdown.
       */
      this.$emit('input', !this.value);
      setTimeout(this.recalculatePlacement);
    }
  }

  private recalculatePlacement() {
    if (this.value) {
      if (this.placement === NeonDropdownPlacement.Fullscreen) {
        this.dropdownPlacement = this.placement;
      } else {
        this.dropdownPlacement = NeonDropdownPlacementUtils.calculatePlacement(
          this.$refs.dropdownButton,
          this.$refs.dropdownContent,
          this.placement,
          this.placementContainer,
        );
      }
    }
  }
}
