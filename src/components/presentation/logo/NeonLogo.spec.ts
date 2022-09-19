import { render } from '@testing-library/vue';
import NeonLogo from './NeonLogo.vue';

describe('NeonLogo', () => {
  it('renders logo class', () => {
    const { container } = render(NeonLogo, {});
    expect(container.querySelector('.neon-logo')).toBeDefined();
  });

  it('renders logo inverse class', () => {
    const { container } = render(NeonLogo, { props: { inverse: true } });
    expect(container.querySelector('.neon-logo--inverse')).toBeDefined();
  });
});
