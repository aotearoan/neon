import { render } from '@testing-library/vue';
import NeonFieldGroup from './NeonFieldGroup.vue';
import { NeonInputIndicatorStyle } from '@/common/enums/NeonInputIndicatorStyle';
import { NeonFunctionalColor } from '@/common/enums/NeonFunctionalColor';

describe('NeonFieldGroup', () => {
  it('renders default slot', () => {
    // given
    const content = 'xdd';
    const { container } = render(NeonFieldGroup, {
      props: {},
      slots: { default: `<p>${content}</p>` },
    });
    // when / then
    expect(container.querySelector('.neon-field-group p')?.textContent).toEqual(content);
  });

  it('renders internal indicator style by default', () => {
    // given
    const { container } = render(NeonFieldGroup);
    // when / then
    expect(container.querySelector('.neon-field-group--internal')).toBeDefined();
  });

  it('renders external indicator style', async () => {
    // given
    const { container, rerender } = render(NeonFieldGroup);
    await rerender({ indicatorStyle: NeonInputIndicatorStyle.External });
    // when / then
    expect(container.querySelector('.neon-field-group--external')).toBeDefined();
  });

  it('renders default color', () => {
    // given
    const { container } = render(NeonFieldGroup);
    // when / then
    expect(container.querySelector('.neon-field-group--primary')).toBeDefined();
  });

  it('renders color', async () => {
    // given
    const { container, rerender } = render(NeonFieldGroup);
    await rerender({ color: NeonFunctionalColor.Brand });
    // when / then
    expect(container.querySelector('.neon-field-group--brand')).toBeDefined();
  });

  it('renders enabled', () => {
    // given
    const { container } = render(NeonFieldGroup);
    // when / then
    expect(container.querySelector('.neon-field-group--disabled')).toBeNull();
  });

  it('renders disabled', async () => {
    // given
    const { container, rerender } = render(NeonFieldGroup);
    await rerender({ disabled: true });
    // when / then
    expect(container.querySelector('.neon-field-group--disabled')).toBeDefined();
  });
});
