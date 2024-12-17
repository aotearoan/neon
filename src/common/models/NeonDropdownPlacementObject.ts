import { NeonPosition } from '../enums/NeonPosition';
import { NeonDropdownPlacement } from '../enums/NeonDropdownPlacement';

/**
 * @class
 * @ignore Internal use only
 *
 * Provides default settings for placement utilities as well as 'flipping' strategies if there is no room to place an
 * element in the desired placement.
 */
export class NeonDropdownPlacementObject {
  public static TopLeft = new NeonDropdownPlacementObject(
    NeonDropdownPlacement.TopLeft,
    NeonPosition.Top,
    NeonPosition.Left,
  );

  public static TopRight = new NeonDropdownPlacementObject(
    NeonDropdownPlacement.TopRight,
    NeonPosition.Top,
    NeonPosition.Right,
  );

  public static BottomLeft = new NeonDropdownPlacementObject(
    NeonDropdownPlacement.BottomLeft,
    NeonPosition.Bottom,
    NeonPosition.Left,
  );

  public static BottomRight = new NeonDropdownPlacementObject(
    NeonDropdownPlacement.BottomRight,
    NeonPosition.Bottom,
    NeonPosition.Right,
  );

  public static LeftTop = new NeonDropdownPlacementObject(
    NeonDropdownPlacement.LeftTop,
    NeonPosition.Left,
    NeonPosition.Top,
  );

  public static LeftBottom = new NeonDropdownPlacementObject(
    NeonDropdownPlacement.LeftBottom,
    NeonPosition.Left,
    NeonPosition.Bottom,
  );

  public static RightTop = new NeonDropdownPlacementObject(
    NeonDropdownPlacement.RightTop,
    NeonPosition.Right,
    NeonPosition.Top,
  );

  public static RightBottom = new NeonDropdownPlacementObject(
    NeonDropdownPlacement.RightBottom,
    NeonPosition.Right,
    NeonPosition.Bottom,
  );

  private static PLACEMENTS = {
    'top-left': NeonDropdownPlacementObject.TopLeft,
    'top-right': NeonDropdownPlacementObject.TopRight,
    'bottom-left': NeonDropdownPlacementObject.BottomLeft,
    'bottom-right': NeonDropdownPlacementObject.BottomRight,
    'left-top': NeonDropdownPlacementObject.LeftTop,
    'left-bottom': NeonDropdownPlacementObject.LeftBottom,
    'right-top': NeonDropdownPlacementObject.RightTop,
    'right-bottom': NeonDropdownPlacementObject.RightBottom,
  };

  private static FLIP_MAJOR = {
    'top-left': NeonDropdownPlacementObject.BottomLeft,
    'top-right': NeonDropdownPlacementObject.BottomRight,
    'bottom-left': NeonDropdownPlacementObject.TopLeft,
    'bottom-right': NeonDropdownPlacementObject.TopRight,
    'left-top': NeonDropdownPlacementObject.RightTop,
    'left-bottom': NeonDropdownPlacementObject.RightBottom,
    'right-top': NeonDropdownPlacementObject.LeftTop,
    'right-bottom': NeonDropdownPlacementObject.LeftBottom,
  };

  private static FLIP_MINOR = {
    'top-left': NeonDropdownPlacementObject.TopRight,
    'top-right': NeonDropdownPlacementObject.TopLeft,
    'bottom-left': NeonDropdownPlacementObject.BottomRight,
    'bottom-right': NeonDropdownPlacementObject.BottomLeft,
    'left-top': NeonDropdownPlacementObject.LeftBottom,
    'left-bottom': NeonDropdownPlacementObject.LeftTop,
    'right-top': NeonDropdownPlacementObject.RightBottom,
    'right-bottom': NeonDropdownPlacementObject.RightTop,
  };

  public placement: NeonDropdownPlacement;
  public majorPlacement: NeonPosition;
  public minorPlacement?: NeonPosition;

  private constructor(placement: NeonDropdownPlacement, majorPlacement: NeonPosition, minorPlacement?: NeonPosition) {
    this.placement = placement;
    this.majorPlacement = majorPlacement;
    this.minorPlacement = minorPlacement;
  }

  public static toNeonDropdownPlacementObject(placement: NeonDropdownPlacement): NeonDropdownPlacementObject {
    return NeonDropdownPlacementObject.PLACEMENTS[placement];
  }

  public static flipMajor(placement: NeonDropdownPlacementObject) {
    return NeonDropdownPlacementObject.FLIP_MAJOR[placement.placement];
  }

  public static flipMinor(placement: NeonDropdownPlacementObject) {
    return NeonDropdownPlacementObject.FLIP_MINOR[placement.placement];
  }

  public static flip(placement: NeonDropdownPlacementObject) {
    return NeonDropdownPlacementObject.flipMinor(NeonDropdownPlacementObject.flipMajor(placement));
  }
}
