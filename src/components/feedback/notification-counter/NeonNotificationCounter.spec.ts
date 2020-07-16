import { shallowMount } from '@vue/test-utils';
import NeonNotificationCounter from './NeonNotificationCounter.vue';

describe('NeonNotificationCounter', () => {
  it('renders count', () => {
    const wrapper = shallowMount(NeonNotificationCounter, {
      propsData: { count: 9 },
    });
    expect(wrapper.find('.neon-notification-counter').text()).toEqual('9');
  });

  it('renders 9+ when count > 9', () => {
    const wrapper = shallowMount(NeonNotificationCounter, {
      propsData: { count: 10 },
    });
    expect(wrapper.find('.neon-notification-counter').text()).toEqual('9+');
  });
});
