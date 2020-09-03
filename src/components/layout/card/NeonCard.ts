import { Component, Prop, Vue } from 'vue-property-decorator';
import { NeonOrientation } from '../../../common/enums/NeonOrientation';
import { NeonResponsive } from '../../../common/enums/NeonResponsive';

/**
 * Card component used for the layout of content within a grid or page.
 */
@Component
export default class NeonCard extends Vue {
  /**
   * Change the orientation of a card to horizontal. This is useful for creating long narrow cards spanning the full page. NOTE: For responsiveness, horizontal cards are automatically transformed to vertical cards at lower screen sizes.
   */
  @Prop({ default: NeonOrientation.Vertical })
  public orientation!: NeonOrientation;

  /**
   * The breakpoint to switch horizontal cards to vertical cards. Accepts <em>Mobile | MobileLarge | Tablet</em> ONLY.
   * @type NeonResponsive
   */
  @Prop({ default: NeonResponsive.MobileLarge })
  public horizontalBreakpoint!: NeonResponsive.Mobile | NeonResponsive.MobileLarge | NeonResponsive.Tablet;
}
