import type { NeonPosition } from '../enums/NeonPosition';

export type NeonAvailableSpace = { [key in NeonPosition]: number } & {
  top: number;
  bottom: number;
  left: number;
  right: number;
};
