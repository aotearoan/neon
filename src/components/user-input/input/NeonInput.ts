import { Component, Prop, Vue } from 'vue-property-decorator';
import { NeonInputType } from './NeonInputType';
import { NeonState } from '../../common/NeonState';
import { NeonSize } from '../../common/NeonSize';
import { NeonFunctionalColor } from '../../common/NeonFunctionalColor';

@Component({})
export default class NeonInput extends Vue {
  $refs!: {
    neonInput: HTMLInputElement;
  };

  @Prop()
  private value?: string;

  @Prop({ default: NeonInputType.Text })
  private type!: NeonInputType;

  @Prop({ required: false })
  private placeholder?: string;

  @Prop({ default: NeonSize.Medium })
  private size!: NeonSize.Small | NeonSize.Medium | NeonSize.Large;

  @Prop({ default: NeonFunctionalColor.Primary })
  private color!: NeonFunctionalColor;

  @Prop({ default: NeonState.Ready })
  private state!: NeonState;

  @Prop()
  private rows?: number;

  @Prop()
  private icon?: string;

  @Prop()
  private pattern?: string;

  @Prop({ default: false })
  private disabled!: boolean;

  private focused = false;

  get sanitizedListeners(): Record<string, Function | Function[]> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { input, blur, focus, iconClicked, ...sanitized } = this.$listeners;
    return sanitized;
  }

  get iconVisible() {
    return this.state !== 'ready' || this.icon || (this.value && !this.disabled && this.value.length > 0);
  }

  get iconName() {
    switch (this.state) {
      case NeonState.Loading:
        return 'loading';
      case NeonState.Success:
        return 'check';
      case NeonState.Error:
        return 'times';
      default:
        if (this.icon) {
          return this.icon;
        } else if (this.value && this.value.length > 0) {
          return 'times-circle';
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
    this.$emit('focus');
  }

  private onBlur() {
    this.focused = false;
    this.$emit('blur');
  }

  private iconClicked() {
    if (!this.disabled) {
      if (this.icon) {
        this.$emit('icon-click');
      } else if (this.value && this.value.length > 0) {
        this.$emit('input', '');
      }
    }
  }

  private changeValue(event: Event) {
    const input = event.target as HTMLInputElement;
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
