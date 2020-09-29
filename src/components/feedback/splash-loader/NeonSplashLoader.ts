import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { NeonFunctionalColor } from '../../../common/enums/NeonFunctionalColor';
import { NeonSplashLoaderSize } from '../../../common/enums/NeonSplashLoaderSize';
import NeonIcon from '../../presentation/icon/NeonIcon.vue';

/**
 * Use <strong>NeonSplashLoader</strong> to indicate loading progress to the user. This can be used fullscreen for the
 * initial site loading as well as when UPDATING data, e.g. refreshing table data. For initial data loading please see
 * <a href="/feedback/skeleton-loader">NeonSkeletonLoader</a>.
 */
@Component({
  components: {
    NeonIcon,
  },
})
export default class NeonSplashLoader extends Vue {
  private ready = false;

  /**
   * Color of the loading icon
   */
  @Prop({ default: NeonFunctionalColor.Primary })
  color!: NeonFunctionalColor;

  /**
   * Loading icon size
   */
  @Prop({ default: NeonSplashLoaderSize.Large })
  size!: NeonSplashLoaderSize;

  /**
   * Display the overlay over the page
   */
  @Prop({ default: true })
  overlay!: boolean;

  /**
   * Display fullscreen (position: fixed)
   */
  @Prop({ default: false })
  fullscreen!: boolean;

  public mounted() {
    this.ready = true;
  }
}
