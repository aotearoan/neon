/**
 * Describes placement of dropdown related components like:
 * <ul class="no-style">
 *  <li><a href="/user-input/select">NeonSelect</a></li>
 *  <li><a href="/navigation/dropdown-menu">NeonDropdownMenu</a></li>
 *  <li><a href="/presentation/dropdown">NeonDropdown</a></li>
 * </ul>
 *
 * <p>The placement has a <strong>primary placement</strong> (the first direction) & a <strong>secondary placement</strong>
 * (the second direction). The primary placement is the location of the popup relative to the triggering element (e.g.
 * the select button). With the secondary placement defining the alignment relative to the trigger. E.g. BottomLeft will
 * open the dropdown below the trigger element with the left-hand edges aligned.</p>
 *
 * <p>The placement utilities are smart & dynamic. They listen to resize events & aim for best effort based on where the
 * dropdown is opened. E.g. in the case above with BottomLeft if there is not enough visible room to align the component
 * to the left then it will try to align to the right & likewise if there is not enough space below the trigger it will
 * align to the top (& reverse the option order in the case of a select).</p>
 */
export enum NeonDropdownPlacement {
  /** Placement above trigger element, aligned to the left */
  TopLeft = 'top-left',
  /** Placement above trigger element, aligned to the right */
  TopRight = 'top-right',
  /** Placement below trigger element, aligned to the left */
  BottomLeft = 'bottom-left',
  /** Placement below trigger element, aligned to the right */
  BottomRight = 'bottom-right',
  /** Placement to the left of the trigger element, aligned to the top */
  LeftTop = 'left-top',
  /** Placement to the left of the trigger element, aligned to the bottom */
  LeftBottom = 'left-bottom',
  /** Placement to the right of the trigger element, aligned to the top */
  RightTop = 'right-top',
  /** Placement to the right of the trigger element, aligned to the bottom */
  RightBottom = 'right-bottom',
}
