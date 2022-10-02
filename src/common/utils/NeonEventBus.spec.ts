import { NeonEventBus } from './NeonEventBus';

describe('NeonEventBus', () => {
  it('emits an event to a callback', () => {
    // given
    const callback = jest.fn();
    NeonEventBus.on('test-event', callback);
    // when
    NeonEventBus.emit('test-event', 1, 'xdd');
    // then
    expect(callback).toBeCalledWith(1, 'xdd');
  });

  it('does not emit an event to a removed callback', () => {
    // given
    const callback = jest.fn();
    NeonEventBus.on('test-event', callback);
    NeonEventBus.off('test-event', callback);
    // when
    NeonEventBus.emit('test-event', 1, 'xdd');
    // then
    expect(callback).not.toHaveBeenCalled();
  });
});
