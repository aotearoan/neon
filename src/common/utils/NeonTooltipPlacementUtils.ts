import { NeonPosition } from '../enums/NeonPosition';
import { NeonPlacementUtils } from './NeonPlacementUtils';
import type { NeonAvailableSpace } from '../models/NeonAvailableSpace';

/**
 * Placement utilities for tooltips.
 */
export class NeonTooltipPlacementUtils {
  /**
   * Calculate the placement of an element relative to a trigger element given a desired placement. This method will
   * determine if there is enough space to place the element in the desired location & if not it will then determine the
   * next best place to position the element.
   *
   * @param triggerElement {HTMLElement} The trigger element, e.g. the button to trigger opening a select.
   * @param contentElement {HTMLElement} The content element, i.e. the element for which to calculate the placement.
   * @param placement {NeonDropdownPlacement} The desired placement relative to the trigger element.
   * @param placementContainer {HTMLElement} An optional containing element to use for calculating the placement instead
   * of the screen dimensions. This can be useful if the contentElement must be contained by e.g. A modal div.
   *
   * @returns {NeonPlacement} The calculated placement of the content element.
   */
  public static calculatePlacement(
    triggerElement: HTMLElement,
    contentElement: HTMLElement,
    placement: NeonPosition,
    placementContainer?: HTMLElement,
  ): NeonPosition {
    const { maxWidth, maxHeight } = NeonPlacementUtils.calculateBounds(placementContainer);
    const availableSpace = NeonPlacementUtils.calculateAvailableSpace(
      triggerElement,
      maxWidth,
      maxHeight,
      placementContainer,
    );

    const placementsOrder = NeonTooltipPlacementUtils.calculatePlacementOrder(placement);

    return NeonTooltipPlacementUtils.findPlacement(contentElement, availableSpace, placementsOrder);
  }

  private static calculatePlacementOrder(placement: NeonPosition) {
    switch (placement) {
      case NeonPosition.Top:
        return [NeonPosition.Top, NeonPosition.Bottom, NeonPosition.Left, NeonPosition.Right];
      case NeonPosition.Bottom:
        return [NeonPosition.Bottom, NeonPosition.Top, NeonPosition.Left, NeonPosition.Right];
      case NeonPosition.Left:
        return [NeonPosition.Left, NeonPosition.Right, NeonPosition.Top, NeonPosition.Bottom];
      case NeonPosition.Right:
        return [NeonPosition.Right, NeonPosition.Left, NeonPosition.Top, NeonPosition.Bottom];
    }
  }

  private static findPlacement(
    contentElement: HTMLElement,
    availableSpace: NeonAvailableSpace,
    placements: NeonPosition[],
  ): NeonPosition {
    const firstMatching = placements.findIndex((placement) =>
      NeonTooltipPlacementUtils.validPlacement(contentElement, availableSpace, placement),
    );
    return placements[firstMatching] || placements[0];
  }

  private static validPlacement(
    contentElement: HTMLElement,
    availableSpace: NeonAvailableSpace,
    placement: NeonPosition,
  ) {
    switch (placement) {
      case NeonPosition.Top:
      case NeonPosition.Bottom:
        return contentElement.offsetHeight <= availableSpace[placement];
      case NeonPosition.Left:
      case NeonPosition.Right:
        return contentElement.offsetWidth <= availableSpace[placement];
    }
  }
}
