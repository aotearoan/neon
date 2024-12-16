export interface NeonTabModel {
  label: string;
  key: string; // TIP: use this key as the id of the tab content to support aria-controls
  icon?: string;
}
