import { Component, Prop, Vue } from 'vue-property-decorator';
import { TranslateResult } from 'vue-i18n';
import { NeonLabelSize } from '../../../common/enums/NeonLabelSize';
import { NeonFunctionalColor } from '../../../common/enums/NeonFunctionalColor';
import { NeonHorizontalPosition } from '../../../common/enums/NeonHorizontalPosition';
import NeonIcon from '../icon/NeonIcon.vue';

/**
 * Labels are used to tag or emphasize properties of an item in the UI. Labels can be text only, icon only or contain both text and icons.
 */
@Component({
  components: {
    NeonIcon,
  },
})
export default class NeonLabel extends Vue {
  /**
   * The label text
   */
  @Prop({ required: true })
  public label!: TranslateResult;

  /**
   * The name of the optional label icon
   */
  @Prop()
  public icon?: string;

  /**
   * The icon position if there is also text in the label. This is either left or right.
   */
  @Prop({ default: NeonHorizontalPosition.Left })
  public iconPosition!: NeonHorizontalPosition;

  /**
   * The label size
   */
  @Prop({ default: NeonLabelSize.Small })
  public size!: NeonLabelSize;

  /**
   * The label color
   */
  @Prop({ default: NeonFunctionalColor.Neutral })
  public color!: NeonFunctionalColor;
}
