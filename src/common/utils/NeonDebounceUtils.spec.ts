import { NeonDebounceUtils } from './NeonDebounceUtils';
import { waitFor } from '@testing-library/vue';

describe('NeonDebounceUtils', () => {
  const setTimeoutSpy = jest.spyOn(global, 'setTimeout');
  const clearTimeoutSpy = jest.spyOn(global, 'clearTimeout');

  afterEach(() => {
    jest.resetAllMocks();
    NeonDebounceUtils.setGlobalDebounceTimeout(0);
  });

  it('debounces when timeout is set', (done) => {
    // given
    const debounce = 300;
    NeonDebounceUtils.setGlobalDebounceTimeout(debounce);
    const fn = NeonDebounceUtils.debounce(() => {
      expect(setTimeoutSpy).toHaveBeenCalledWith(expect.anything(), debounce);
      done();
    }, undefined);
    // when
    fn();
  });

  it('skips debounce when 0', (done) => {
    // given
    const fn = NeonDebounceUtils.debounce(() => {
      expect(setTimeoutSpy).not.toHaveBeenCalled();
      done();
    }, 0);
    // when
    fn();
  });

  it('sets custom debounce timeout', async () => {
    // given
    const debounce = 420;
    const fn = NeonDebounceUtils.debounce(() => {
      expect(setTimeoutSpy).toHaveBeenCalledWith(expect.anything(), debounce);
    }, debounce);
    // when
    await waitFor(() => {
      fn();
    });
  });

  it('clear existing timer', async () => {
    // given
    const debounce = 420;
    const fn = NeonDebounceUtils.debounce((finalCall: boolean) => {
      if (finalCall) {
        expect(clearTimeoutSpy).toHaveBeenCalled();
      }
    }, debounce);
    // when
    await waitFor(() => {
      fn(false);
      fn(true);
    });
  });

  it('calls debounced function once without existing timer', () => {
    jest.useFakeTimers();
    const debounce = 300;
    NeonDebounceUtils.setGlobalDebounceTimeout(debounce);

    const fn = jest.fn();
    const debouncedFn = NeonDebounceUtils.debounce(fn, debounce);

    debouncedFn();

    jest.advanceTimersByTime(debounce);

    expect(fn).toHaveBeenCalledTimes(1);
    expect(clearTimeoutSpy).not.toHaveBeenCalled();
  });
});
