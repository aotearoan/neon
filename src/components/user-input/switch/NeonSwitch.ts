import { Component, Prop, Vue } from 'vue-property-decorator';
import { NeonSwitchModel } from './NeonSwitchModel';
import { NeonSize } from '../../common/NeonSize';

@Component({})
export default class NeonSwitch extends Vue {
  @Prop({ required: true })
  public value!: string;

  @Prop({ required: true })
  public model!: NeonSwitchModel;

  @Prop({ default: NeonSize.Medium })
  public size!: NeonSize;

  @Prop()
  public disabled?: boolean;

  private get sanitizedListeners() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { input, ...listeners } = this.$listeners;
    return { listeners, input: this.onInput };
  }

  private get checked() {
    return this.on.key === this.value;
  }

  private get off() {
    return this.model.off;
  }

  private get on() {
    return this.model.on;
  }

  private onInput(event: InputEvent) {
    const checked = (event.target as HTMLInputElement).checked;
    this.$emit('input', checked ? this.on.key : this.off.key);
  }
}
