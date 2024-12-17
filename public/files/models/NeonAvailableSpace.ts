import type { NeonPosition } from '../enums/NeonPosition';

/**
 * Used to capture space from an element to the edged of the screen in all directions. This is used with the various
 * placement utilities provided by Neon.
 */
export type NeonAvailableSpace = { [key in NeonPosition]: number } & {
  /** Distance in pixels from the top of an element to the top of the screen. */
  top: number;
  /** Distance in pixels from the bottom of an element to the bottom of the screen. */
  bottom: number;
  /** Distance in pixels from the left of an element to the left of the screen. */
  left: number;
  /** Distance in pixels from the right of an element to the right of the screen. */
  right: number;
};
