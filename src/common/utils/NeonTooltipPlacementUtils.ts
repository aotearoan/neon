import { NeonPlacement } from '../enums/NeonPlacement';
import { NeonPlacementUtils } from './NeonPlacementUtils';
import { NeonAvailableSpace } from '../models/NeonAvailableSpace';

export class NeonTooltipPlacementUtils {
  public static calculatePlacement(
    triggerElement: HTMLElement,
    contentElement: HTMLElement,
    placement: NeonPlacement,
    placementContainer?: HTMLElement,
  ): NeonPlacement {
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

  private static calculatePlacementOrder(placement: NeonPlacement) {
    switch (placement) {
      case NeonPlacement.Top:
        return [NeonPlacement.Top, NeonPlacement.Bottom, NeonPlacement.Left, NeonPlacement.Right];
      case NeonPlacement.Bottom:
        return [NeonPlacement.Bottom, NeonPlacement.Top, NeonPlacement.Left, NeonPlacement.Right];
      case NeonPlacement.Left:
        return [NeonPlacement.Left, NeonPlacement.Right, NeonPlacement.Top, NeonPlacement.Bottom];
      case NeonPlacement.Right:
        return [NeonPlacement.Right, NeonPlacement.Left, NeonPlacement.Top, NeonPlacement.Bottom];
    }
  }

  private static findPlacement(
    contentElement: HTMLElement,
    availableSpace: NeonAvailableSpace,
    placements: NeonPlacement[],
  ): NeonPlacement {
    const firstMatching = placements.findIndex((placement) =>
      NeonTooltipPlacementUtils.validPlacement(contentElement, availableSpace, placement),
    );
    return placements[firstMatching] || placements[0];
  }

  private static validPlacement(
    contentElement: HTMLElement,
    availableSpace: NeonAvailableSpace,
    placement: NeonPlacement,
  ) {
    switch (placement) {
      case NeonPlacement.Top:
      case NeonPlacement.Bottom:
        return contentElement.offsetHeight <= availableSpace[placement];
      case NeonPlacement.Left:
      case NeonPlacement.Right:
        return contentElement.offsetWidth <= availableSpace[placement];
      default:
        return false;
    }
  }
}
