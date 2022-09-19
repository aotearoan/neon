import { render } from '@testing-library/vue';
import { NeonSize } from '../../../common/enums/NeonSize';
import NeonInputIndicator from './NeonInputIndicator.vue';

describe('NeonInputIndicator', () => {
  it('renders label', () => {
    // given
    const label = 'xdd';
    const { container } = render(NeonInputIndicator, { props: { label } });
    // when / then
    expect(container.querySelector('.neon-input-indicator__label')?.textContent).toEqual(label);
    expect(container.querySelector('.neon-input-indicator--with-label')).toBeDefined();
  });

  it('renders icon', () => {
    // given
    const icon = 'times';
    const { container } = render(NeonInputIndicator, { props: { icon } });
    // when / then
    expect(container.querySelector('.neon-input-indicator .neon-icon')).toBeDefined();
    expect(container.querySelector('.neon-input-indicator--with-icon')).toBeDefined();
  });

  it('renders default size', () => {
    // given
    const { container } = render(NeonInputIndicator, { props: {} });
    // when / then
    expect(container.querySelector('.neon-input-indicator--m')).toBeDefined();
  });

  it('renders size', () => {
    // given
    const size = NeonSize.Large;
    const { container } = render(NeonInputIndicator, { props: { size } });
    // when / then
    expect(container.querySelector('.neon-input-indicator--l')).toBeDefined();
  });
});
