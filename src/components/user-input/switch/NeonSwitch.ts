import { Component, Prop, Vue } from 'vue-property-decorator';
import { NeonSize } from '../../common/NeonSize';
import { NeonFunctionalColor } from '../../common/NeonFunctionalColor';
import { NeonSwitchStyle } from './NeonSwitchStyle';
import { TranslateResult } from 'vue-i18n';

@Component({})
export default class NeonSwitch extends Vue {
  @Prop({ required: true })
  public value!: boolean;

  @Prop({ required: true })
  public label!: TranslateResult;

  @Prop({ default: NeonSize.Medium })
  public size!: NeonSize;

  @Prop({ default: NeonFunctionalColor.Primary })
  public color!:
    | NeonFunctionalColor.LowContrast
    | NeonFunctionalColor.Primary
    | NeonFunctionalColor.Info
    | NeonFunctionalColor.Success
    | NeonFunctionalColor.Warn
    | NeonFunctionalColor.Error;

  @Prop({ default: NeonSwitchStyle.Switch })
  public switchStyle!: NeonSwitchStyle;

  @Prop()
  public disabled?: boolean;

  private get sanitizedListeners() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { input, ...listeners } = this.$listeners;
    return { listeners, input: this.onInput };
  }

  private onInput(event: InputEvent) {
    const checked = (event.target as HTMLInputElement).checked;
    this.$emit('input', checked);
  }
}
