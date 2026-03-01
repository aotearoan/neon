import { render } from '@testing-library/vue';
import NeonField from './NeonField.vue';
import { NeonFunctionalColor } from '@/common/enums/NeonFunctionalColor';

describe('NeonField', () => {
  const label = 'test label';

  it('renders label', () => {
    // given
    const { container } = render(NeonField, { props: { label } });
    // when / then
    expect(container.querySelector('.neon-field__label')?.textContent).toEqual(label);
  });

  it('renders default slot contents', () => {
    // given
    const { html } = render(NeonField, { props: { label }, slots: { default: '<p>test</p>' } });
    // when / then
    expect(html()).toMatch('<p>test</p>');
  });

  it('renders label for', () => {
    // given
    const labelFor = 'xdd';
    const { container } = render(NeonField, { props: { label, labelFor } });
    // when / then
    expect((container.querySelector('.neon-field__label') as HTMLLabelElement)?.getAttribute('for')).toEqual(labelFor);
  });

  it('renders optional', () => {
    // given
    const { container } = render(NeonField, { props: { label, optional: true } });
    // when / then
    expect(container.querySelector('.neon-field--optional')).toBeDefined();
    expect(container.querySelector('.neon-field__optional')?.textContent).toEqual('Optional');
  });

  it('renders disabled', () => {
    // given
    const { container } = render(NeonField, { props: { label, disabled: true } });
    // when / then
    expect(container.querySelector('.neon-field--disabled')).toBeDefined();
  });

  it('renders custom optional text', () => {
    // given
    const optionalLabel = 'not mandatory';
    const { container } = render(NeonField, { props: { label, optional: true, optionalLabel } });
    // when / then
    expect(container.querySelector('.neon-field__optional')?.textContent).toEqual(optionalLabel);
  });

  it('renders empty message', () => {
    const { container } = render(NeonField, { props: { label, optional: true } });
    expect(container.querySelector('.neon-field__message')).toBeDefined();
  });

  it('does not render message when no-message = true', () => {
    const message = 'Bacon ipsum dolor amet venison';
    const { container } = render(NeonField, { props: { label, optional: true, message, noMessage: true } });
    expect(container.querySelector('.neon-field__message .neon-color-low-contrast')).toBeNull();
  });

  it('renders message', () => {
    const message = 'Bacon ipsum dolor amet venison';
    const { container, getByText } = render(NeonField, { props: { label, optional: true, message } });
    getByText(message);
    expect(container.querySelector('.neon-field__message .neon-color-low-contrast')).toBeDefined();
  });

  it('renders error message', () => {
    const message = 'Bacon ipsum dolor amet venison';
    const { container, getByText } = render(NeonField, {
      props: {
        label,
        optional: true,
        message,
        messageColor: NeonFunctionalColor.Error,
      },
    });
    getByText(message);
    expect(container.querySelector('.neon-field__message .neon-color-error')).toBeDefined();
  });
});
