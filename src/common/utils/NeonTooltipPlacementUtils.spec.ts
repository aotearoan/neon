import { NeonTooltipPlacementUtils } from './NeonTooltipPlacementUtils';
import { NeonPosition } from '../enums/NeonPosition';

describe('NeonTooltipPlacementUtils', () => {
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

  it('calculate same placement Bottom', () => {
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
    const placement = NeonPosition.Bottom;
    // when / then
    expect(NeonTooltipPlacementUtils.calculatePlacement(triggerElement, contentElement, placement)).toEqual(
      NeonPosition.Bottom,
    );
  });

  it('calculate same placement Top', () => {
    // given
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const triggerElement: HTMLElement = {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      getBoundingClientRect: () => ({ top: 300, left: 0, bottom: 400, right: 100 }),
      offsetHeight: 100,
      offsetWidth: 100,
    };
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const contentElement: HTMLElement = {
      offsetHeight: 100,
      offsetWidth: 100,
    };
    const placement = NeonPosition.Top;
    // when / then
    expect(NeonTooltipPlacementUtils.calculatePlacement(triggerElement, contentElement, placement)).toEqual(
      NeonPosition.Top,
    );
  });

  it('calculate same placement Right', () => {
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
    const placement = NeonPosition.Right;
    // when / then
    expect(NeonTooltipPlacementUtils.calculatePlacement(triggerElement, contentElement, placement)).toEqual(
      NeonPosition.Right,
    );
  });

  it('calculate same placement Left', () => {
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
    const placement = NeonPosition.Left;
    // when / then
    expect(NeonTooltipPlacementUtils.calculatePlacement(triggerElement, contentElement, placement)).toEqual(
      NeonPosition.Left,
    );
  });

  it('calculate placement change', () => {
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
    const placement = NeonPosition.Bottom;
    // when / then
    expect(
      NeonTooltipPlacementUtils.calculatePlacement(triggerElement, contentElement, placement, placementContainer),
    ).toEqual(NeonPosition.Top);
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
    const placement = NeonPosition.Bottom;
    // when / then
    expect(
      NeonTooltipPlacementUtils.calculatePlacement(triggerElement, contentElement, placement, placementContainer),
    ).toEqual(NeonPosition.Bottom);
  });
});
