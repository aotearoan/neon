import { NeonDropdownPlacementUtils } from './NeonDropdownPlacementUtils';
import { NeonDropdownPlacement } from '../enums/NeonDropdownPlacement';

describe('NeonDropdownPlacementUtils', () => {
  beforeEach(() => {
    // eslint-disable-next-line no-global-assign
    document = {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      documentElement: {
        clientWidth: 400,
        clientHeight: 400,
      },
    };
  });

  it('calculate same placement', () => {
    // given
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const triggerElement: HTMLElement = {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      getBoundingClientRect: () => ({ top: 0, left: 0, bottom: 100, right: 100 }),
      offsetHeight: 100,
      offsetWidth: 100,
    };
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const contentElement: HTMLElement = {
      offsetHeight: 100,
      offsetWidth: 100,
    };
    const placement = NeonDropdownPlacement.BottomLeft;
    // when / then
    expect(NeonDropdownPlacementUtils.calculatePlacement(triggerElement, contentElement, placement)).toEqual(
      NeonDropdownPlacement.BottomLeft,
    );
  });

  it('calculate same placement RightBottom', () => {
    // given
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const triggerElement: HTMLElement = {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      getBoundingClientRect: () => ({ top: 0, left: 0, bottom: 100, right: 100 }),
      offsetHeight: 100,
      offsetWidth: 100,
    };
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const contentElement: HTMLElement = {
      offsetHeight: 100,
      offsetWidth: 100,
    };
    const placement = NeonDropdownPlacement.RightBottom;
    // when / then
    expect(NeonDropdownPlacementUtils.calculatePlacement(triggerElement, contentElement, placement)).toEqual(
      NeonDropdownPlacement.RightBottom,
    );
  });

  it('calculate same placement LeftTop', () => {
    // given
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const triggerElement: HTMLElement = {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      getBoundingClientRect: () => ({ top: 300, left: 300, bottom: 400, right: 400 }),
      offsetHeight: 100,
      offsetWidth: 100,
    };
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const contentElement: HTMLElement = {
      offsetHeight: 100,
      offsetWidth: 100,
    };
    const placement = NeonDropdownPlacement.LeftTop;
    // when / then
    expect(NeonDropdownPlacementUtils.calculatePlacement(triggerElement, contentElement, placement)).toEqual(
      NeonDropdownPlacement.LeftTop,
    );
  });

  it('calculate minor placement change', () => {
    // given
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const triggerElement: HTMLElement = {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      getBoundingClientRect: () => ({ top: 0, left: 150, bottom: 50, right: 200 }),
      offsetHeight: 50,
      offsetWidth: 50,
    };
    const placementContainer: HTMLElement = {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      getBoundingClientRect: () => ({ top: 100, left: 0, bottom: 400, right: 200 }),
      offsetHeight: 300,
      offsetWidth: 200,
    };
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const contentElement: HTMLElement = {
      offsetHeight: 40,
      offsetWidth: 200,
    };
    const placement = NeonDropdownPlacement.BottomLeft;
    // when / then
    expect(
      NeonDropdownPlacementUtils.calculatePlacement(triggerElement, contentElement, placement, placementContainer),
    ).toEqual(NeonDropdownPlacement.BottomRight);
  });

  it('calculate major placement change', () => {
    // given
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const triggerElement: HTMLElement = {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      getBoundingClientRect: () => ({ top: 350, left: 0, bottom: 400, right: 50 }),
      offsetHeight: 50,
      offsetWidth: 50,
    };
    const placementContainer: HTMLElement = {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      getBoundingClientRect: () => ({ top: 100, left: 0, bottom: 400, right: 200 }),
      offsetHeight: 300,
      offsetWidth: 200,
    };
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const contentElement: HTMLElement = {
      offsetHeight: 40,
      offsetWidth: 200,
    };
    const placement = NeonDropdownPlacement.BottomLeft;
    // when / then
    expect(
      NeonDropdownPlacementUtils.calculatePlacement(triggerElement, contentElement, placement, placementContainer),
    ).toEqual(NeonDropdownPlacement.TopLeft);
  });

  it('calculate same when too large', () => {
    // given
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const triggerElement: HTMLElement = {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      getBoundingClientRect: () => ({ top: 350, left: 0, bottom: 400, right: 50 }),
      offsetHeight: 50,
      offsetWidth: 50,
    };
    const placementContainer: HTMLElement = {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      getBoundingClientRect: () => ({ top: 100, left: 0, bottom: 400, right: 200 }),
      offsetHeight: 300,
      offsetWidth: 200,
    };
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const contentElement: HTMLElement = {
      offsetHeight: 4000,
      offsetWidth: 4000,
    };
    const placement = NeonDropdownPlacement.BottomLeft;
    // when / then
    expect(
      NeonDropdownPlacementUtils.calculatePlacement(triggerElement, contentElement, placement, placementContainer),
    ).toEqual(NeonDropdownPlacement.BottomLeft);
  });
});
