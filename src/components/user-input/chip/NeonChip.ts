import { Component, Prop, Vue } from 'vue-property-decorator';
import { NeonSize } from '../../../common/enums/NeonSize';
import { NeonFunctionalColor } from '../../../common/enums/NeonFunctionalColor';
import { TranslateResult } from 'vue-i18n';
import NeonIcon from '../../presentation/icon/NeonIcon.vue';
import { NeonChipAction } from '../../../common/enums/NeonChipAction';

/**
 * <p>
 * <strong>NeonChip</strong> is a clickable or removable chip which can be used as a tag or to indicate selected values
 * in filters and other more complex inputs (e.g. search / multiselect). Clicking the chip results in a callback and in
 * the case it is removable, also removal of the chip. Chips are designed to fit inside inputs for creating more complex
 * input components.
 * </p>
 * <p>
 *   Chips are navigable via tab (tabindex). When focussed, use space, return or enter to click on clickable tabs and, in
 *   the case of removable tabs, use backspace and delete to remove a tab. Escape will blur a focussed tab.
 * </p>
 */
@Component({
  components: {
    NeonIcon,
  },
})
export default class NeonChip extends Vue {
  readonly $refs!: {
    chip: HTMLDivElement;
  };

  private open = true;
  private active = false;
  /**
   * The chip label
   */
  @Prop({ required: true })
  public label!: TranslateResult;

  /**
   * The size of the chip.
   */
  @Prop({ default: NeonSize.Medium })
  public size!: NeonSize;

  /**
   * The chip color.
   */
  @Prop({ default: NeonFunctionalColor.LowContrast })
  public color!: NeonFunctionalColor;

  /**
   * The action when clicking on a chip. Can be click or remove.
   */
  @Prop({ default: NeonChipAction.Click })
  public action!: NeonChipAction;

  /**
   * The chip disabled state.
   */
  @Prop({ default: false })
  public disabled!: boolean;

  /**
   * This is the name of an icon which can optionally be added to the chip.
   */
  @Prop()
  public icon?: string;

  private clicked() {
    if (!this.disabled) {
      switch (this.action) {
        case NeonChipAction.Remove:
          this.open = false;
          /**
           * Emitted when the chip is closed by the user.
           *
           * @type {void}
           */
          this.$emit('close');
          break;
        case NeonChipAction.Click:
          /**
           * Emitted when the chip is clicked on.
           *
           * @type {void}
           */
          this.$emit('click');
          break;
      }
    }
  }

  private get role() {
    if (!this.disabled) {
      switch (this.action) {
        case NeonChipAction.Remove:
          return 'button';
        case NeonChipAction.Click:
          return 'link';
      }
    }
  }

  private keyUp() {
    if (!this.disabled && document.activeElement === this.$refs.chip) {
      this.active = false;
    }
  }

  private keyDown(event: KeyboardEvent) {
    if (!this.disabled && document.activeElement === this.$refs.chip) {
      switch (this.action) {
        case NeonChipAction.Remove:
          switch (event.code) {
            case 'Space':
            case 'Enter':
            case 'Backspace':
            case 'Delete':
              event.preventDefault();
              this.clicked();
              event.stopPropagation();
              return false;
          }
          return true;
        case NeonChipAction.Click:
          switch (event.code) {
            case 'Space':
            case 'Enter':
              this.active = true;
              event.preventDefault();
              this.clicked();
              event.stopPropagation();
              return false;
          }
          return true;
      }
    }
  }
}
