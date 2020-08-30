import { Component, Prop, Vue } from 'vue-property-decorator';
import { NeonFunctionalColor } from '../../../common/enums/NeonFunctionalColor';

/**
 * A component for displaying notification counts to the user.
 */
@Component
export default class NeonNotificationCounter extends Vue {
  /**
   * Whether or not the notification is active
   */
  @Prop({ default: false })
  public active!: boolean;

  /**
   * The notification color
   */
  @Prop({ default: NeonFunctionalColor.Error })
  public color!: NeonFunctionalColor;

  /**
   * The count of notifications to display, if greater than 9 <em>9+</em> is displayed
   */
  @Prop()
  public count?: number;
}
