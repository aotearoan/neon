import { Component, Prop, Vue } from 'vue-property-decorator';
import { NeonToggleModel } from './NeonToggleModel';
import { NeonSize } from '../../common/NeonSize';
import { NeonFunctionalColor } from '../../common/NeonFunctionalColor';
import { NeonToggleStyle } from './NeonToggleStyle';
import { NeonOrientation } from '../../common/NeonOrientation';

@Component({})
export default class NeonToggle extends Vue {
  @Prop({ required: true })
  public name!: string;

  @Prop({ required: true })
  public value!: string;

  @Prop({ required: true })
  public model!: NeonToggleModel[];

  @Prop({ default: NeonToggleStyle.Toggle })
  public toggleStyle!: NeonToggleStyle;

  @Prop({ default: NeonSize.Medium })
  public size!: NeonSize;

  @Prop({ default: NeonOrientation.Vertical })
  public orientation!: NeonOrientation;

  @Prop({ default: NeonFunctionalColor.Neutral })
  public color!: NeonFunctionalColor;

  @Prop()
  public disabled?: boolean;

  private get sanitizedListeners() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { input, ...listeners } = this.$listeners;
    return { listeners, input: this.onInput };
  }

  private onInput(event: InputEvent) {
    const key = (event.target as HTMLInputElement).value;
    this.$emit('input', key);
  }
}
