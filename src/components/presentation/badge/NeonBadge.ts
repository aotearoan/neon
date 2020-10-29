import { Component, Prop, Vue } from 'vue-property-decorator';
import { TranslateResult } from 'vue-i18n';
import { NeonSize } from '../../../common/enums/NeonSize';
import { NeonFunctionalColor } from '../../../common/enums/NeonFunctionalColor';
import NeonIcon from '../icon/NeonIcon.vue';

/**
 * A badge is a small square or circular component for representing user avatars. These can be in the form of an image, an icon or a two character string (e.g. the user's initials).
 */
@Component({
  components: {
    NeonIcon,
  },
})
export default class NeonBadge extends Vue {
  /**
   * The two character <em>initials</em> to display on the badge.
   */
  @Prop()
  public label?: TranslateResult;

  /**
   * URL of the image to display on the badge.
   */
  @Prop()
  public image?: string;

  /**
   * An icon to display on the badge.
   */
  @Prop()
  public icon?: string;

  /**
   * If true, render the badge as a circle, instead of a square.
   */
  @Prop({ default: false })
  public circular!: boolean;

  /**
   * The size of the badge - Small, Medium or Large.
   */
  @Prop({ default: NeonSize.Medium })
  public size!: NeonSize;

  /**
   * The color of the badge. This is one of the provided NeonFunctionalColors.
   */
  @Prop({ default: NeonFunctionalColor.LowContrast })
  public color!: NeonFunctionalColor;

  /**
   * Display the badge in the disable style
   */
  @Prop({ default: false })
  public disabled!: boolean;

  /**
   * Badge image alt text.
   */
  @Prop({ default: 'Badge' })
  public imageAlt!: TranslateResult;
}
