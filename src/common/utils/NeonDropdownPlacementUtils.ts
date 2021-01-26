import { NeonDropdownPlacementObject } from '../models/NeonDropdownPlacementObject';
import { NeonPlacement } from '../enums/NeonPlacement';
import { NeonDropdownPlacement } from '../enums/NeonDropdownPlacement';
import { NeonAvailableSpace } from '../models/NeonAvailableSpace';
import { NeonPlacementUtils } from './NeonPlacementUtils';

export class NeonDropdownPlacementUtils {
  public static calculatePlacement(
    triggerElement: HTMLElement,
    contentElement: HTMLElement,
    placement: NeonDropdownPlacement,
    placementContainer?: HTMLElement,
  ): NeonDropdownPlacement {
    const placementObject: NeonDropdownPlacementObject = NeonDropdownPlacementObject.toNeonDropdownPlacementObject(
      placement,
    );
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
      case NeonPlacement.Top:
      case NeonPlacement.Bottom:
        return (
          contentElement.offsetHeight <= availableMajorSpace[placement.majorPlacement] &&
          !!placement.minorPlacement &&
          contentElement.offsetWidth <= availableMinorSpace[placement.minorPlacement]
        );
      case NeonPlacement.Left:
      case NeonPlacement.Right:
        return (
          contentElement.offsetWidth <= availableMajorSpace[placement.majorPlacement] &&
          !!placement.minorPlacement &&
          contentElement.offsetHeight <= availableMinorSpace[placement.minorPlacement]
        );
    }
  }
}
