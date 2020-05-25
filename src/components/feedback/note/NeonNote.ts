import { Component, Prop, Vue } from 'vue-property-decorator';
import { NeonFunctionalColor } from '../../common/NeonFunctionalColor';

@Component({})
export default class NeonNote extends Vue {
  @Prop({ default: NeonFunctionalColor.Primary })
  public color!: NeonFunctionalColor;

  @Prop()
  public closable?: boolean;

  @Prop({ default: true })
  public icon!: boolean;

  private get iconName() {
    if (this.icon) {
      switch (this.color) {
        case NeonFunctionalColor.Info:
          return 'info-circle';
        case NeonFunctionalColor.Success:
          return 'check-circle';
        case NeonFunctionalColor.Warn:
          return 'exclamation-circle';
        case NeonFunctionalColor.Error:
          return 'times-circle';
        default:
          return undefined;
      }
    }
    return undefined;
  }

  private closeNote() {
    this.$emit('close-note');
  }
}
