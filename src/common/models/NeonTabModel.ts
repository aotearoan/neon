/**
 * Model for a tab for use with <a href="/presentation/tabs">NeonTabs</a>.
 */
export interface NeonTabModel {
  /** Display label for the tab. */
  label: string;
  /**
   * Unique key for the tab.
   * <br />
   * <br />
   * TIP: use this key as the id of the <strong>tab content</strong> to support aria-controls. See
   * <a href="http://localhost:8083/presentation/tabs#api">NeonTab API</a>.
   */
  key: string;
  /** URL of the tab. */
  href?: string;
  /** Icon to display with the tab label. */
  icon?: string;
}
