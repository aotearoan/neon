import { NeonEventBus } from './NeonEventBus';

describe('NeonEventBus', () => {
  beforeEach(() => {
    // @ts-ignore
    NeonEventBus._bus = {
      $on: jest.fn(),
      $off: jest.fn(),
      $emit: jest.fn(),
    };
  });

  it('calls $on', () => {
    // given
    const callback = jest.fn();
    // when
    NeonEventBus.on('xdd', callback);
    // then
    expect(NeonEventBus._bus.$on).toBeCalledWith('xdd', callback);
  });

  it('calls $off', () => {
    // given
    const callback = jest.fn();
    // when
    NeonEventBus.off('xdd', callback);
    // then
    expect(NeonEventBus._bus.$off).toBeCalledWith('xdd', callback);
  });

  it('calls $emit', () => {
    // given
    const payload = 'lol';
    // when
    NeonEventBus.emit('xdd', payload);
    // then
    expect(NeonEventBus._bus.$emit).toBeCalledWith('xdd', payload);
  });
});
