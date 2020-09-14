import { Component, Prop, Vue } from 'vue-property-decorator';
import { NeonSize } from '../../../common/enums/NeonSize';
import { TranslateResult } from 'vue-i18n';

/**
 * Use input indicators to provide additional information for input fields. This can be useful to add the field units or
 * a connected label or icon.
 */
@Component({})
export default class NeonInputIndicator extends Vue {
  /**
   * The label to display
   */
  @Prop()
  public label?: TranslateResult;

  /**
   * The icon to display
   */
  @Prop()
  public icon?: string;

  /**
   * The size of the input indicator
   */
  @Prop({ default: NeonSize.Medium })
  public size!: NeonSize;
}
