import { NeonTooltipPlacementUtils } from './NeonTooltipPlacementUtils';
import { NeonPlacement } from '../enums/NeonPlacement';

describe('NeonTooltipPlacementUtils', () => {
  beforeEach(() => {
    // eslint-disable-next-line no-global-assign
    document = {
      // @ts-ignore
      documentElement: {
        clientWidth: 400,
        clientHeight: 400,
      },
    };
  });

  it('calculate same placement Bottom', () => {
    // given
    // @ts-ignore
    const triggerElement: HTMLElement = {
      // @ts-ignore
      getBoundingClientRect: () => ({ top: 0, left: 0, bottom: 100, right: 100 }),
      offsetHeight: 100,
      offsetWidth: 100,
    };
    // @ts-ignore
    const contentElement: HTMLElement = {
      offsetHeight: 100,
      offsetWidth: 100,
    };
    const placement = NeonPlacement.Bottom;
    // when / then
    expect(NeonTooltipPlacementUtils.calculatePlacement(triggerElement, contentElement, placement)).toEqual(
      NeonPlacement.Bottom,
    );
  });

  it('calculate same placement Top', () => {
    // given
    // @ts-ignore
    const triggerElement: HTMLElement = {
      // @ts-ignore
      getBoundingClientRect: () => ({ top: 300, left: 0, bottom: 400, right: 100 }),
      offsetHeight: 100,
      offsetWidth: 100,
    };
    // @ts-ignore
    const contentElement: HTMLElement = {
      offsetHeight: 100,
      offsetWidth: 100,
    };
    const placement = NeonPlacement.Top;
    // when / then
    expect(NeonTooltipPlacementUtils.calculatePlacement(triggerElement, contentElement, placement)).toEqual(
      NeonPlacement.Top,
    );
  });

  it('calculate same placement Right', () => {
    // given
    // @ts-ignore
    const triggerElement: HTMLElement = {
      // @ts-ignore
      getBoundingClientRect: () => ({ top: 0, left: 0, bottom: 100, right: 100 }),
      offsetHeight: 100,
      offsetWidth: 100,
    };
    // @ts-ignore
    const contentElement: HTMLElement = {
      offsetHeight: 100,
      offsetWidth: 100,
    };
    const placement = NeonPlacement.Right;
    // when / then
    expect(NeonTooltipPlacementUtils.calculatePlacement(triggerElement, contentElement, placement)).toEqual(
      NeonPlacement.Right,
    );
  });

  it('calculate same placement Left', () => {
    // given
    // @ts-ignore
    const triggerElement: HTMLElement = {
      // @ts-ignore
      getBoundingClientRect: () => ({ top: 300, left: 300, bottom: 400, right: 400 }),
      offsetHeight: 100,
      offsetWidth: 100,
    };
    // @ts-ignore
    const contentElement: HTMLElement = {
      offsetHeight: 100,
      offsetWidth: 100,
    };
    const placement = NeonPlacement.Left;
    // when / then
    expect(NeonTooltipPlacementUtils.calculatePlacement(triggerElement, contentElement, placement)).toEqual(
      NeonPlacement.Left,
    );
  });

  it('calculate placement change', () => {
    // given
    // @ts-ignore
    const triggerElement: HTMLElement = {
      // @ts-ignore
      getBoundingClientRect: () => ({ top: 350, left: 0, bottom: 400, right: 50 }),
      offsetHeight: 50,
      offsetWidth: 50,
    };
    const placementContainer: HTMLElement = {
      // @ts-ignore
      getBoundingClientRect: () => ({ top: 100, left: 0, bottom: 400, right: 200 }),
      offsetHeight: 300,
      offsetWidth: 200,
    };
    // @ts-ignore
    const contentElement: HTMLElement = {
      offsetHeight: 40,
      offsetWidth: 200,
    };
    const placement = NeonPlacement.Bottom;
    // when / then
    expect(
      NeonTooltipPlacementUtils.calculatePlacement(triggerElement, contentElement, placement, placementContainer),
    ).toEqual(NeonPlacement.Top);
  });

  it('calculate same when too large', () => {
    // given
    // @ts-ignore
    const triggerElement: HTMLElement = {
      // @ts-ignore
      getBoundingClientRect: () => ({ top: 350, left: 0, bottom: 400, right: 50 }),
      offsetHeight: 50,
      offsetWidth: 50,
    };
    const placementContainer: HTMLElement = {
      // @ts-ignore
      getBoundingClientRect: () => ({ top: 100, left: 0, bottom: 400, right: 200 }),
      offsetHeight: 300,
      offsetWidth: 200,
    };
    // @ts-ignore
    const contentElement: HTMLElement = {
      offsetHeight: 4000,
      offsetWidth: 4000,
    };
    const placement = NeonPlacement.Bottom;
    // when / then
    expect(
      NeonTooltipPlacementUtils.calculatePlacement(triggerElement, contentElement, placement, placementContainer),
    ).toEqual(NeonPlacement.Bottom);
  });
});
