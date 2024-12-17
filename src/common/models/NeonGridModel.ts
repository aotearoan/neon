import type { NeonResponsive } from '../enums/NeonResponsive';

/**
 * The model defining the <a href="/layout/grid">NeonGrid</a> layout at different breakpoints.
 */
export class NeonGridModel {
  /**
   * The breakpoint defining when the provided grid configuration applies.
   */
  breakpoint: NeonResponsive;
  /**
   * A two dimensional grid of ids defining the layout of the NeonGridAreas with a NeonGrid component's default slot.
   * <br />
   * <br />
   * E.g.
   * <pre>
   * [
   *   ['area1', 'area1', 'area2'],
   *   ['area3', 'area4', 'area2'],
   * ]
   * </pre>
   *
   * defines a grid with two rows and 3 columns where id=area1 fills the first two columns on the first row, area2 fills
   * the last column (both rows) and areas 3 & 4 fill the first two columns on the second row.
   */
  grid: string[][];
}
