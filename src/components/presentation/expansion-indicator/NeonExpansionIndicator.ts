import { Component, Prop, Vue } from 'vue-property-decorator';
import { NeonFunctionalColor } from '../../../common/enums/NeonFunctionalColor';

/**
 * Custom animated chevron component which is used in dropdowns and expansion panels. This may be useful in creating higher level components but is unlikely to be used on it's own.
 */
@Component
export default class NeonExpansionIndicator extends Vue {
  /**
   * Whether or not the chevron is <em>open</em>.
   */
  @Prop({ default: false })
  public expanded!: boolean;

  /**
   * Display the expansion indicator in the inverse text color
   */
  @Prop({ default: false })
  public inverse!: boolean;

  /**
   * Display the expansion indicator in the disabled color
   */
  @Prop({ default: false })
  public disabled!: boolean;

  /**
   * The color of the chevron.
   */
  @Prop({ default: NeonFunctionalColor.LowContrast })
  public color!: NeonFunctionalColor;
}
