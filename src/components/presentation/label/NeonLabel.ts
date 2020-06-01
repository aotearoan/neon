import { Component, Prop, Vue } from 'vue-property-decorator';
import { TranslateResult } from 'vue-i18n';
import { NeonLabelSize } from './NeonLabelSize';
import { NeonFunctionalColor } from '../../common/NeonFunctionalColor';
import { NeonHorizontalPosition } from '../../common/NeonHorizontalPosition';
import NeonIcon from '@/components/design/icon/NeonIcon.vue';

@Component({
  components: {
    NeonIcon,
  },
})
export default class NeonLabel extends Vue {
  @Prop()
  public label?: TranslateResult;

  @Prop()
  public icon?: string;

  @Prop({ default: NeonHorizontalPosition.Left })
  public iconPosition?: NeonHorizontalPosition;

  @Prop()
  public outline?: boolean;

  @Prop({ default: NeonLabelSize.Small })
  public size!: NeonLabelSize;

  @Prop({ default: NeonFunctionalColor.Neutral })
  public color!: NeonFunctionalColor;
}
