import { Component, Prop, Vue } from 'vue-property-decorator';

/**
 * A "body" card section. Cards can contain multiple card body sections.
 */
@Component
export default class NeonCardBody extends Vue {
  /**
   * If true, this will remove all padding from the card body. This is useful for presenting images and also tabs as well as other content.
   */
  @Prop({ default: false })
  public fullWidth!: boolean;
}
