import { NeonDropdownPlacementObject } from '../models/NeonDropdownPlacementObject';
import { NeonPosition } from '../enums/NeonPosition';
import type { NeonDropdownPlacement } from '../enums/NeonDropdownPlacement';
import type { NeonAvailableSpace } from '../models/NeonAvailableSpace';
import { NeonPlacementUtils } from './NeonPlacementUtils';

/**
 * Placement utilities for use with popup components like dropdown, dropdown menu & select.
 */
export class NeonDropdownPlacementUtils {
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
   * @returns {NeonDropdownPlacement} The calculated placement of the content element.
   */
  public static calculatePlacement(
    triggerElement: HTMLElement,
    contentElement: HTMLElement,
    placement: NeonDropdownPlacement,
    placementContainer?: HTMLElement,
  ): NeonDropdownPlacement {
    const placementObject: NeonDropdownPlacementObject =
      NeonDropdownPlacementObject.toNeonDropdownPlacementObject(placement);
    const { maxWidth, maxHeight } = NeonPlacementUtils.calculateBounds(placementContainer);
    const availableMajorSpace = NeonPlacementUtils.calculateAvailableSpace(
      triggerElement,
      maxWidth,
      maxHeight,
      placementContainer,
    );

    const availableMinorSpace = {
      top: availableMajorSpace.bottom + triggerElement.offsetHeight,
      bottom: availableMajorSpace.top + triggerElement.offsetHeight,
      left: availableMajorSpace.right + triggerElement.offsetWidth,
      right: availableMajorSpace.left + triggerElement.offsetWidth,
    };

    return NeonDropdownPlacementUtils.findPlacement(
      contentElement,
      availableMajorSpace,
      availableMinorSpace,
      placementObject,
      NeonDropdownPlacementObject.flipMinor(placementObject),
      NeonDropdownPlacementObject.flipMajor(placementObject),
      NeonDropdownPlacementObject.flip(placementObject),
    );
  }

  private static findPlacement(
    contentElement: HTMLElement,
    availableMajorSpace: NeonAvailableSpace,
    availableMinorSpace: NeonAvailableSpace,
    ...placements: NeonDropdownPlacementObject[]
  ): NeonDropdownPlacement {
    const firstMatching = placements.findIndex((placement) =>
      NeonDropdownPlacementUtils.validPlacement(contentElement, availableMajorSpace, availableMinorSpace, placement),
    );
    return placements[firstMatching]?.placement || placements[0].placement;
  }

  private static validPlacement(
    contentElement: HTMLElement,
    availableMajorSpace: NeonAvailableSpace,
    availableMinorSpace: NeonAvailableSpace,
    placement: NeonDropdownPlacementObject,
  ) {
    switch (placement.majorPlacement) {
      case NeonPosition.Top:
      case NeonPosition.Bottom:
        return (
          contentElement.offsetHeight <= availableMajorSpace[placement.majorPlacement] &&
          !!placement.minorPlacement &&
          contentElement.offsetWidth <= availableMinorSpace[placement.minorPlacement]
        );
      case NeonPosition.Left:
      case NeonPosition.Right:
        return (
          contentElement.offsetWidth <= availableMajorSpace[placement.majorPlacement] &&
          !!placement.minorPlacement &&
          contentElement.offsetHeight <= availableMinorSpace[placement.minorPlacement]
        );
    }
  }
}
