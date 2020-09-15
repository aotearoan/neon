import { Component, Prop, Vue } from 'vue-property-decorator';

/**
 * A component for indicating initial data is loading. Compose multiple skeleton loaders to generate a loader matching
 * the shape of the content to be loaded.
 */
@Component
export default class NeonSkeletonLoader extends Vue {
  /**
   * The count of skeleton loaders to render. The size of the skeleton loaders depends on the parent container. The
   * skeleton loaders will split the container evenly vertically.
   */
  @Prop({ default: 1 })
  public count!: number;
}
