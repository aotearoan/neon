import { Component, Prop, Vue } from 'vue-property-decorator';

/**
 * A side navigation component. This is displayed at the <em>larger-than-tablet</em> breakpoint and hidden at <em>tablet</em> and below. Use this to display menus, navigation or other items related to the main page content. A side nave had two slots, one for <em>sticky</em> content which remains visible at all times. The other is for <em>scrolling content</em> which is allowed to overflow below the bottom of the page.
 */
@Component
export default class NeonSideNav extends Vue {
  /**
   * If true, removes the side nav component's padding.
   */
  @Prop({ default: false })
  public fullWidth!: boolean;
}
