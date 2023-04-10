import { render } from '@testing-library/vue';
import NeonFieldLabel from './NeonFieldLabel.vue';

describe('NeonFieldLabel', () => {
  const label = 'test label';

  it('renders label', () => {
    // given
    const { container } = render(NeonFieldLabel, { props: { label } });
    // when / then
    expect(container.querySelector('.neon-field-label__label')?.textContent).toEqual(label);
  });

  it('renders default slot contents', () => {
    // given
    const { html } = render(NeonFieldLabel, { props: { label }, slots: { default: '<p>test</p>' } });
    // when / then
    expect(html()).toMatch('<p>test</p>');
  });

  it('renders label for', () => {
    // given
    const labelFor = 'xdd';
    const { container } = render(NeonFieldLabel, { props: { label, labelFor } });
    // when / then
    expect((container.querySelector('.neon-field-label') as HTMLLabelElement)?.getAttribute('for')).toEqual(labelFor);
  });

  it('renders optional', () => {
    // given
    const { container } = render(NeonFieldLabel, { props: { label, optional: true } });
    // when / then
    expect(container.querySelector('.neon-field-label--optional')).toBeDefined();
    expect(container.querySelector('.neon-field-label__optional')?.textContent).toEqual('Optional');
  });

  it('renders custom optional text', () => {
    // given
    const optionalLabel = 'not mandatory';
    const { container } = render(NeonFieldLabel, { props: { label, optional: true, optionalLabel } });
    // when / then
    expect(container.querySelector('.neon-field-label__optional')?.textContent).toEqual(optionalLabel);
  });
});
