import { Component, Prop, Vue } from 'vue-property-decorator';
import { NeonSize } from '../../../common/enums/NeonSize';
import { TranslateResult } from 'vue-i18n';
import NeonIcon from '../../presentation/icon/NeonIcon.vue';

/**
 * Use input indicators to provide additional information for input fields. This can be useful to add the field units or
 * a connected label or icon.
 * <br />
 * NOTE: An input indicator is an HTML <em>label</em> so attributes like, e.g. <em>for</em> are accepted.
 */
@Component({
  components: {
    NeonIcon,
  },
})
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
