import { NeonClosableUtils } from './NeonClosableUtils';

describe('NeonClosableUtils', () => {
  it('open adds document body class', () => {
    // given
    const close = jest.fn();
    const closableUtils = new NeonClosableUtils(document.documentElement, close);
    // when
    closableUtils.open();
    // then
    expect(document.body.classList.contains('neon-closable--open')).toEqual(true);
  });

  it('close removes document body class', () => {
    // given
    const close = jest.fn();
    const closableUtils = new NeonClosableUtils(document.documentElement, close);
    // when
    closableUtils.open();
    closableUtils.close();
    // then
    expect(document.body.classList.contains('neon-closable--open')).toEqual(false);
  });

  it('adds and removes event listeners', () => {
    // given
    const addListenerFn = document.addEventListener;
    const removeListenerFn = document.removeEventListener;
    document.addEventListener = jest.fn();
    document.removeEventListener = jest.fn();
    const closableUtils = new NeonClosableUtils(document.documentElement, jest.fn());
    // when
    expect(document.addEventListener).toHaveBeenCalledTimes(3);
    closableUtils.destroy();
    // then
    expect(document.removeEventListener).toHaveBeenCalledTimes(3);
    document.addEventListener = addListenerFn;
    document.removeEventListener = removeListenerFn;
  });
});
