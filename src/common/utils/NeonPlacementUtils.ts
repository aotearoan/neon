import type { NeonAvailableSpace } from '../models/NeonAvailableSpace';

export class NeonPlacementUtils {
  public static calculateAvailableSpace(
    triggerElement: HTMLElement,
    maxWidth: number,
    maxHeight: number,
    placementContainer?: HTMLElement,
  ) {
    const triggerBounds = triggerElement.getBoundingClientRect();

    const availableSpaceRelativeToScreen: NeonAvailableSpace = {
      top: triggerBounds.top,
      bottom: maxHeight - triggerBounds.bottom,
      left: triggerBounds.left,
      right: maxWidth - triggerBounds.right,
    };

    if (placementContainer) {
      const containerBounds = placementContainer.getBoundingClientRect();

      const availableSpaceRelativeToContainer: NeonAvailableSpace = {
        top: Math.max(triggerBounds.top - containerBounds.top, 0),
        bottom: Math.max(containerBounds.bottom - triggerBounds.bottom, 0),
        left: Math.max(triggerBounds.left - containerBounds.left, 0),
        right: Math.max(containerBounds.right - triggerBounds.right, 0),
      };

      return {
        top: Math.min(availableSpaceRelativeToScreen.top, availableSpaceRelativeToContainer.top),
        bottom: Math.min(availableSpaceRelativeToScreen.bottom, availableSpaceRelativeToContainer.bottom),
        left: Math.min(availableSpaceRelativeToScreen.left, availableSpaceRelativeToContainer.left),
        right: Math.min(availableSpaceRelativeToScreen.right, availableSpaceRelativeToContainer.right),
      };
    }

    return availableSpaceRelativeToScreen;
  }

  public static calculateBounds(placementContainer?: HTMLElement) {
    const root = document.documentElement;
    return {
      maxWidth: placementContainer ? Math.min(placementContainer.offsetWidth, root.clientWidth) : root.clientWidth,
      maxHeight: placementContainer ? Math.min(placementContainer.offsetHeight, root.clientHeight) : root.clientHeight,
    };
  }
}
