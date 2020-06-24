import { NeonPlacement } from '../enums/NeonPlacement';
import { NeonDropdownPlacement } from '../enums/NeonDropdownPlacement';

export type MinorPlacement = NeonPlacement.Top | NeonPlacement.Bottom | NeonPlacement.Left | NeonPlacement.Right;

export class NeonDropdownPlacementObject {
  public static Fullscreen = new NeonDropdownPlacementObject(
    NeonDropdownPlacement.Fullscreen,
    NeonPlacement.Fullscreen,
  );

  public static TopLeft = new NeonDropdownPlacementObject(
    NeonDropdownPlacement.TopLeft,
    NeonPlacement.Top,
    NeonPlacement.Left,
  );

  public static TopRight = new NeonDropdownPlacementObject(
    NeonDropdownPlacement.TopRight,
    NeonPlacement.Top,
    NeonPlacement.Right,
  );

  public static BottomLeft = new NeonDropdownPlacementObject(
    NeonDropdownPlacement.BottomLeft,
    NeonPlacement.Bottom,
    NeonPlacement.Left,
  );

  public static BottomRight = new NeonDropdownPlacementObject(
    NeonDropdownPlacement.BottomRight,
    NeonPlacement.Bottom,
    NeonPlacement.Right,
  );

  public static LeftTop = new NeonDropdownPlacementObject(
    NeonDropdownPlacement.LeftTop,
    NeonPlacement.Left,
    NeonPlacement.Top,
  );

  public static LeftBottom = new NeonDropdownPlacementObject(
    NeonDropdownPlacement.LeftBottom,
    NeonPlacement.Left,
    NeonPlacement.Bottom,
  );

  public static RightTop = new NeonDropdownPlacementObject(
    NeonDropdownPlacement.RightTop,
    NeonPlacement.Right,
    NeonPlacement.Top,
  );

  public static RightBottom = new NeonDropdownPlacementObject(
    NeonDropdownPlacement.RightBottom,
    NeonPlacement.Right,
    NeonPlacement.Bottom,
  );

  private static PLACEMENTS: { [key: string]: NeonDropdownPlacementObject } = {
    fullscreen: NeonDropdownPlacementObject.Fullscreen,
    'top-left': NeonDropdownPlacementObject.TopLeft,
    'top-right': NeonDropdownPlacementObject.TopRight,
    'bottom-left': NeonDropdownPlacementObject.BottomLeft,
    'bottom-right': NeonDropdownPlacementObject.BottomRight,
    'left-top': NeonDropdownPlacementObject.LeftTop,
    'left-bottom': NeonDropdownPlacementObject.LeftBottom,
    'right-top': NeonDropdownPlacementObject.RightTop,
    'right-bottom': NeonDropdownPlacementObject.RightBottom,
  };

  private static FLIP_MAJOR: { [key: string]: NeonDropdownPlacementObject } = {
    fullscreen: NeonDropdownPlacementObject.Fullscreen,
    'top-left': NeonDropdownPlacementObject.BottomLeft,
    'top-right': NeonDropdownPlacementObject.BottomRight,
    'bottom-left': NeonDropdownPlacementObject.TopLeft,
    'bottom-right': NeonDropdownPlacementObject.TopRight,
    'left-top': NeonDropdownPlacementObject.RightTop,
    'left-bottom': NeonDropdownPlacementObject.RightBottom,
    'right-top': NeonDropdownPlacementObject.LeftTop,
    'right-bottom': NeonDropdownPlacementObject.LeftBottom,
  };

  private static FLIP_MINOR: { [key: string]: NeonDropdownPlacementObject } = {
    fullscreen: NeonDropdownPlacementObject.Fullscreen,
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
  public majorPlacement: NeonPlacement;
  public minorPlacement?: MinorPlacement;

  private constructor(
    placement: NeonDropdownPlacement,
    majorPlacement: NeonPlacement,
    minorPlacement?: MinorPlacement,
  ) {
    this.placement = placement;
    this.majorPlacement = majorPlacement;
    this.minorPlacement = minorPlacement;
  }

  public static toNeonDropdownPlacementObject(placement: NeonDropdownPlacement): NeonDropdownPlacementObject {
    return NeonDropdownPlacementObject.PLACEMENTS[placement] || NeonDropdownPlacementObject.Fullscreen;
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
