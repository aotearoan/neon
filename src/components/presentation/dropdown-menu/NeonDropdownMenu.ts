import { Component, Prop, Vue } from 'vue-property-decorator';
import { NeonDropdownMenuItem } from '../../../common/models/NeonDropdownMenuItem';
import { NeonSize } from '../../../common/enums/NeonSize';

@Component
export default class NeonDropdownMenu extends Vue {
  private open = false;

  @Prop({ default: NeonSize.Medium })
  public size!: NeonSize;

  @Prop({ required: true })
  public model!: NeonDropdownMenuItem[];

  get sanitizedListeners(): Record<string, Function | Function[]> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { input, ...sanitized } = this.$listeners;
    return sanitized;
  }

  get sanitizedAttributes(): Record<string, string> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { size, ...sanitized } = this.$attrs;
    return sanitized;
  }

  private clickItem(item: NeonDropdownMenuItem) {
    this.open = false;
    this.$emit('click', item);
  }
}
