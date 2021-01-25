import { NeonPlacementUtils } from './NeonPlacementUtils';

describe('NeonPlacementUtils', () => {
  it('calculatesBounds without placementContainer', () => {
    // given
    // eslint-disable-next-line no-global-assign
    document = {
      // @ts-ignore
      documentElement: {
        clientWidth: 450,
        clientHeight: 900,
      },
    };
    // when
    const result = NeonPlacementUtils.calculateBounds();
    // then
    expect(result).toEqual({
      maxWidth: document.documentElement.clientWidth,
      maxHeight: document.documentElement.clientHeight,
    });
  });

  it('calculatesBounds with placementContainer', () => {
    // given
    const placementContainer = {
      offsetWidth: 50,
      offsetHeight: 90,
    };
    // eslint-disable-next-line no-global-assign
    document = {
      // @ts-ignore
      documentElement: {
        clientWidth: 450,
        clientHeight: 900,
      },
    };
    // when
    // @ts-ignore
    const result = NeonPlacementUtils.calculateBounds(placementContainer);
    // then
    expect(result).toEqual({
      maxWidth: placementContainer.offsetWidth,
      maxHeight: placementContainer.offsetHeight,
    });
  });

  it('calculates available space without placementContainer', () => {
    // given
    const triggerElement = {
      getBoundingClientRect: () => ({ top: 0, left: 0, right: 500, bottom: 1000 }),
    };
    const maxWidth = 1000;
    const maxHeight = 2000;
    // when
    // @ts-ignore
    const result = NeonPlacementUtils.calculateAvailableSpace(triggerElement, maxWidth, maxHeight);
    // then
    expect(result).toEqual({ top: 0, left: 0, right: 500, bottom: 1000 });
  });

  it('calculates available space with placementContainer', () => {
    // given
    const triggerElement = {
      getBoundingClientRect: () => ({ top: 0, left: 0, right: 500, bottom: 1000 }),
    };
    const placementContainer = {
      getBoundingClientRect: () => ({ top: 10, left: 10, right: 1300, bottom: 1300 }),
    };
    const maxWidth = 1000;
    const maxHeight = 2000;
    // when
    // @ts-ignore
    const result = NeonPlacementUtils.calculateAvailableSpace(triggerElement, maxWidth, maxHeight, placementContainer);
    // then
    expect(result).toEqual({ top: 0, left: 0, right: 500, bottom: 300 });
  });
});
