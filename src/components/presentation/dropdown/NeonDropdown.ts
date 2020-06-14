import { Component, Prop, Vue } from 'vue-property-decorator';
import { NeonDropdownPlacement } from './NeonDropdownPlacement';
import { NeonDropdownPlacementUtils } from './NeonDropdownPlacementUtils';
import { NeonClosableUtils } from '../../common/NeonClosebleUtils';
import { TranslateResult } from 'vue-i18n';
import { NeonSize } from '../../common/NeonSize';
import { NeonFunctionalColor } from '../../common/NeonFunctionalColor';
import { NeonDropdownStyle } from '@/components/presentation/dropdown/NeonDropdownStyle';

@Component
export default class NeonDropdown extends Vue {
  $refs!: {
    dropdownButton: HTMLElement;
    dropdownContent: HTMLDivElement;
  };

  private dropdownPlacement: NeonDropdownPlacement;
  private closableUtils?: NeonClosableUtils;

  @Prop({ required: true })
  public value!: boolean;

  @Prop()
  public label?: TranslateResult;

  @Prop()
  public icon?: string;

  @Prop({ default: true })
  public indicator!: boolean;

  @Prop()
  public disabled?: boolean;

  @Prop({ default: NeonSize.Medium })
  public size?: NeonSize;

  @Prop({ default: NeonFunctionalColor.LowContrast })
  public color?: NeonFunctionalColor;

  @Prop({ default: NeonDropdownStyle.SolidButton })
  public dropdownStyle?: NeonDropdownStyle;

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
     * close event is emitted when the modal is closed.
     * @type {void}
     */
    this.$emit('input', false);
  }

  public close() {
    if (this.value) {
      this.onClose();
    }
  }

  public toggleOpen() {
    this.$emit('input', !this.value);
    setTimeout(this.recalculatePlacement);
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
