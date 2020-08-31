import { Component, Prop, Vue } from 'vue-property-decorator';

/**
 * An HTML anchor component. This component is offset by the top nav (at all responsive breakpoints) which means fragments will scroll to the correct position offset by the top nav. Just place NeonAnchor directly inside a positioned element you want to create a fragment for and give it the correct id.
 */
@Component({})
export default class NeonAnchor extends Vue {
  /**
   * The id of the anchor, this should correspond to the URL fragment name.
   */
  @Prop({ required: true })
  public id!: string;
}
