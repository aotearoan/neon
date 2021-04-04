import { NeonResponsive } from '../enums/NeonResponsive';

export class NeonGridModel {
  /**
   * The breakpoint defining when the provided grid configuration applies.
   */
  public breakpoint!: NeonResponsive;
  /**
   * A two dimensional grid of ids defining the layout of the NeonGridAreas with a NeonGrid component's default slot.
   * E.g.
   * [
   *   ['area1', 'area1', 'area2'],
   *   ['area3', 'area4', 'area2'],
   * ]
   *
   * defines a grid with two rows and 3 columns where id=area1 fills the first two columns on the first row, area2 fills
   * the last column (both rows) and areas 3 & 4 fill the first two columns on the second row.
   */
  public grid!: string[][];
}
