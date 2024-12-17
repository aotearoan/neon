import type { NeonAvailableSpace } from '../models/NeonAvailableSpace';

/**
 * Utilities for helping calculate placement dimensions & available space.
 */
export class NeonPlacementUtils {
  /**
   * Calculate the available space in all directions between a trigger element & the edges of the screen or a defined
   * container element.
   *
   * @param triggerElement The trigger element to calculate available space.
   * @param maxWidth Maximum available width (screen width or placement container width).
   * @param maxHeight Maximum available height (screen height or placement container height).
   * @param placementContainer Bounding container to use for calculation.
   *
   * @returns An object defining the available space from the trigger element to the screen or
   * container edge in each direction.
   */
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

  /**
   * Calculate the maximum available on screen width & height of an element.
   *
   * @param placementContainer The element for which to calculate the maximum width & height.
   *
   * @returns The maximum width & height of the element.
   */
  public static calculateBounds(placementContainer?: HTMLElement) {
    const root = document.documentElement;
    const bodyRect = document.body.getBoundingClientRect();
    const bodyHeight = bodyRect.height + bodyRect.y;
    const bodyWidth = bodyRect.width + bodyRect.x;
    return {
      maxWidth: placementContainer
        ? Math.min(placementContainer.offsetWidth, root.clientWidth, bodyWidth)
        : Math.min(root.clientWidth, bodyWidth),
      maxHeight: placementContainer
        ? Math.min(placementContainer.offsetHeight, root.clientHeight, bodyHeight)
        : Math.min(root.clientHeight, bodyHeight),
    };
  }
}
