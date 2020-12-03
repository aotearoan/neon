import { Component, Prop, Vue } from 'vue-property-decorator';
import { NeonInputType } from '../../../common/enums/NeonInputType';
import { NeonState } from '../../../common/enums/NeonState';
import { NeonSize } from '../../../common/enums/NeonSize';
import { NeonFunctionalColor } from '../../../common/enums/NeonFunctionalColor';

/**
 * Equivalent of, and wrapper around, an HTML input. Also supports <strong>textarea</strong>.
 */
@Component({})
export default class NeonInput extends Vue {
  $refs!: {
    neonInput: HTMLInputElement;
  };

  /**
   * The id the input
   */
  @Prop()
  private id?: string;

  /**
   * The value of the input
   */
  @Prop()
  private value?: string;

  /**
   * The type of input this is. NOTE: Neon provides custom components as alternatives in the following cases:
   * * file (use <a href="/user-input/file">NeonFile</a>)
   * * password (use <a href="/user-input/password">NeonPassword</a>)
   */
  @Prop({ default: NeonInputType.Text })
  private type!: NeonInputType;

  /**
   * Placeholder text to display in the input
   */
  @Prop()
  private placeholder?: string;

  /**
   * Size of the input
   */
  @Prop({ default: NeonSize.Medium })
  private size!: NeonSize;

  /**
   * Color of the input
   */
  @Prop({ default: NeonFunctionalColor.LowContrast })
  private color!: NeonFunctionalColor;

  /**
   * The state of the input
   */
  @Prop({ default: NeonState.Ready })
  private state!: NeonState;

  /**
   * The number of rows to display in the case of a textarea
   */
  @Prop()
  private rows?: number;

  /**
   * The name of a clickable icon to display inside the input. This is used for clearing contents or e.g. in the case of
   * NeonPassword toggle showing/hiding the password. Defaults to <em>times</em> (for clearing the input's contents).
   */
  @Prop()
  private icon?: string;

  /**
   * Hide the icon button, e.g. the X button to clear the input's contents.
   */
  @Prop({ default: false })
  private hideIcon!: boolean;

  /**
   * A regular expression for filtering valid values in the input
   */
  @Prop()
  private pattern?: string;

  /**
   * Tabindex to assign to the input.
   */
  @Prop({ default: 0 })
  private tabindex!: number;

  /**
   * The disabled state of the input
   */
  @Prop({ default: false })
  private disabled!: boolean;

  /**
   * When the state is success or error, display the field with the state color indicator, e.g. border or background
   * color.
   */
  @Prop({ default: true })
  private stateHighlight!: boolean;

  /**
   * When the state is success or error, display the state icon.
   */
  @Prop({ default: true })
  private stateIcon!: boolean;

  private focused = false;

  get sanitizedAttributes(): Record<string, string> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { id, ...sanitized } = this.$attrs;
    return sanitized;
  }

  get sanitizedListeners(): Record<string, Function | Function[]> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { input, blur, focus, iconClicked, ...sanitized } = this.$listeners;
    return sanitized;
  }

  get iconVisible() {
    return (
      !this.hideIcon && (this.state !== 'ready' || this.icon || (this.value && !this.disabled && this.value.length > 0))
    );
  }

  get iconName() {
    switch (this.state) {
      case NeonState.Loading:
        return 'loading';
      case NeonState.Success:
        return this.stateIcon ? 'check' : undefined;
      case NeonState.Error:
        return this.stateIcon ? 'times' : undefined;
      default:
        if (this.icon) {
          return this.icon;
        } else if (this.value && this.value.length > 0) {
          return 'times';
        }

        return undefined;
    }
  }

  get iconColor() {
    switch (this.state) {
      case NeonState.Success:
        return NeonFunctionalColor.Success;
      case NeonState.Error:
        return NeonFunctionalColor.Error;
      case NeonState.Loading:
        return this.color;
      default:
        return NeonFunctionalColor.LowContrast;
    }
  }

  public focus() {
    this.$refs.neonInput.focus();
  }

  private onFocus() {
    this.focused = true;
    /**
     * Emitted when the input has gained focus
     * @type {void}
     */
    this.$emit('focus');
  }

  private onBlur() {
    this.focused = false;
    /**
     * Emitted when the input has lost focus
     * @type {void}
     */
    this.$emit('blur');
  }

  private iconClicked($event: Event) {
    if (!this.disabled) {
      if (this.icon) {
        /**
         * Emitted when the icon is clicked
         * @type {void}
         */
        this.$emit('icon-click');
      } else if (this.value && this.value.length > 0) {
        /**
         * Emitted when the input value is changed
         * @type {string} the contents of the input
         */
        this.$emit('input', '');
      }
      $event.preventDefault();
      $event.stopPropagation();
    }
  }

  private changeValue(event: Event) {
    const input = event.target as HTMLInputElement;
    /**
     * Emitted when the input value is changed
     * @type {string} the contents of the input
     */
    this.$emit('input', input.value);
  }

  private computedPlaceholder() {
    if (this.placeholder) {
      return this.placeholder;
    } else {
      switch (this.type) {
        case NeonInputType.Email:
          return 'gbelson@hooli.com';
        case NeonInputType.Tel:
          return '+41785551234';
        case NeonInputType.Url:
          return 'http://www.getskeleton.com';
        default:
          return '';
      }
    }
  }

  public click() {
    this.$refs.neonInput.click();
  }
}
