import { render } from '@testing-library/vue';
import NeonNotificationCounter from './NeonNotificationCounter.vue';

describe('NeonNotificationCounter', () => {
  it('renders count', () => {
    const { getByText } = render(NeonNotificationCounter, { props: { count: 9 } });
    getByText('9');
  });

  it('renders 9+ when count > 9', () => {
    const { getByText } = render(NeonNotificationCounter, { props: { count: 10 } });
    getByText('9+');
  });
});
