import { NeonDebounceUtils } from './NeonDebounceUtils';

describe('NeonDebounceUtils', () => {
  const setTimeoutSpy = jest.spyOn(global, 'setTimeout');
  const clearTimeoutSpy = jest.spyOn(global, 'clearTimeout');

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('debounces by default', (done) => {
    // given
    const debounce = 300;
    NeonDebounceUtils.setGlobalDebounceTimeout(debounce);
    const fn = NeonDebounceUtils.debounce(() => {
      expect(setTimeoutSpy).toHaveBeenCalledWith(expect.anything(), debounce);
      done();
    }, undefined);
    // when
    fn();
    NeonDebounceUtils.setGlobalDebounceTimeout(0);
  });

  it('skips debounce when timeout is 0', (done) => {
    // given
    const fn = NeonDebounceUtils.debounce(() => {
      expect(setTimeoutSpy).not.toHaveBeenCalled();
      done();
    }, 0);
    // when
    fn();
  });

  it('sets custom debounce timeout', (done) => {
    // given
    const debounce = 420;
    const fn = NeonDebounceUtils.debounce(() => {
      expect(setTimeoutSpy).toHaveBeenCalledWith(expect.anything(), debounce);
      done();
    }, debounce);
    // when
    fn();
  });

  it('clear existing timer', (done) => {
    // given
    const debounce = 420;
    const fn = NeonDebounceUtils.debounce((finalCall: boolean) => {
      if (finalCall) {
        expect(clearTimeoutSpy).toHaveBeenCalled();
        done();
      }
    }, debounce);
    // when
    fn(false);
    fn(true);
  });
});
