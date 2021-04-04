import { NeonMenuItem } from './NeonMenuItem';

export interface NeonMenuModel extends NeonMenuItem {
  children?: NeonMenuItem[];
}
