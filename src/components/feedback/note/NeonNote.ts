import { Component, Prop, Vue } from 'vue-property-decorator';
import { NeonFunctionalColor } from '../../../common/enums/NeonFunctionalColor';
import NeonIcon from '../../presentation/icon/NeonIcon.vue';
import NeonButton from '../../user-input/button/NeonButton.vue';

@Component({
  components: {
    NeonIcon,
    NeonButton,
  },
})
export default class NeonNote extends Vue {
  @Prop({ default: NeonFunctionalColor.LowContrast })
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
