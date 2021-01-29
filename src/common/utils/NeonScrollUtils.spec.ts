import { NeonScrollUtils } from './NeonScrollUtils';

describe('NeonScrollUtils', () => {
  it('scrolls into view no offset', () => {
    const element = {
      // @ts-ignore
      parentElement: {
        scrollTop: 0,
      },
      offsetTop: 0,
      offsetHeight: 0,
    };
    // @ts-ignore
    NeonScrollUtils.scrollIntoView(element);
    expect(element.parentElement.scrollTop).toEqual(0);
  });

  it('scrolls into view with parent scroll top', () => {
    const element = {
      parentElement: {
        scrollTop: 300,
      },
      offsetTop: 200,
      offsetHeight: 0,
    };
    // @ts-ignore
    NeonScrollUtils.scrollIntoView(element);
    expect(element.parentElement.scrollTop).toEqual(200);
  });

  it('scrolls into view with offset top', () => {
    const element = {
      parentElement: {
        scrollTop: 0,
      },
      offsetTop: 200,
      offsetHeight: 0,
    };
    // @ts-ignore
    NeonScrollUtils.scrollIntoView(element);
    expect(element.parentElement.scrollTop).toEqual(200);
  });
});
