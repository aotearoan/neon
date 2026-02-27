import { fireEvent, render } from '@testing-library/vue';
import NeonDropdown from './NeonDropdown.vue';
import { NeonDropdownStyle } from '@/common/enums/NeonDropdownStyle';
import { NeonSize } from '@/common/enums/NeonSize';
import { NeonFunctionalColor } from '@/common/enums/NeonFunctionalColor';
import { NeonDropdownPlacement } from '@/common/enums/NeonDropdownPlacement';

describe('NeonDropdown', () => {
  const label = 'xd';
  const slotValue = 'xd';
  const icon = 'check';

  beforeAll(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window.matchMedia = () => ({ matches: false });
  });

  it('renders default slot contents', () => {
    // given
    const { getByText } = render(NeonDropdown, {
      props: { modelValue: false },
      slots: {
        default: `<p>${slotValue}</p>`,
      },
    });
    // when / then
    getByText(slotValue);
  });

  it('renders dropdown-button slot contents', () => {
    // given
    const { getByText } = render(NeonDropdown, {
      props: { modelValue: false },
      slots: {
        'dropdown-button': `<p>${slotValue}</p>`,
      },
    });
    // when / then
    getByText(slotValue);
  });

  it('renders default indicator', () => {
    // given
    const { container } = render(NeonDropdown, {
      props: { modelValue: false },
    });
    // when / then
    expect(container.getElementsByClassName('neon-dropdown--with-indicator')[0]).toBeDefined();
    expect(container.getElementsByClassName('neon-button__indicator')[0]).toBeDefined();
  });

  it('renders without indicator', () => {
    // given
    const { container } = render(NeonDropdown, {
      props: { modelValue: false, indicator: false },
    });
    // when / then
    expect(container.getElementsByClassName('neon-dropdown--with-indicator')[0]).toBeUndefined();
    expect(container.getElementsByClassName('neon-button__indicator')[0]).toBeUndefined();
    expect(container.getElementsByClassName('neon-button__indicator')[0]).toBeUndefined();
  });

  it('renders closed by default', () => {
    // given
    const { container } = render(NeonDropdown, {
      props: { modelValue: false },
    });
    // when / then
    expect(container.getElementsByClassName('neon-dropdown--open')[0]).toBeUndefined();
    expect(container.getElementsByClassName('neon-expansion-indicator--expanded')[0]).toBeUndefined();
    expect(container.getElementsByClassName('neon-dropdown__button')[0].getAttribute('aria-expanded')).toEqual('false');
  });

  it('renders open', () => {
    // given
    const { container } = render(NeonDropdown, {
      props: { modelValue: true },
    });
    // when / then
    expect(container.getElementsByClassName('neon-dropdown--open')[0]).toBeDefined();
    expect(container.getElementsByClassName('neon-expansion-indicator--expanded')[0]).toBeDefined();
    expect(container.getElementsByClassName('neon-dropdown__button')[0].getAttribute('aria-expanded')).toEqual('true');
  });

  it('renders openOnHover', () => {
    // given
    const { container } = render(NeonDropdown, {
      props: { modelValue: false },
    });
    // when / then
    expect(container.getElementsByClassName('neon-dropdown--open-on-hover')[0]).toBeUndefined();
  });

  it('renders icon only, with label', () => {
    // given
    const { container } = render(NeonDropdown, {
      props: { modelValue: false, label },
    });
    // when / then
    expect(container.getElementsByClassName('neon-dropdown--icon-only')[0]).toBeUndefined();
  });

  it('renders icon only, with label and icon', () => {
    // given
    const { container } = render(NeonDropdown, {
      props: { modelValue: false, label, icon },
    });
    // when / then
    expect(container.getElementsByClassName('neon-dropdown--icon-only')[0]).toBeUndefined();
  });

  it('renders not disabled, button', () => {
    // given
    const { container } = render(NeonDropdown, {
      props: { modelValue: false, label },
    });
    // when / then
    expect(container.getElementsByClassName('neon-dropdown--disabled')[0]).toBeUndefined();
    expect(container.getElementsByClassName('neon-dropdown__button.neon-button--disabled')[0]).toBeUndefined();
  });

  it('renders disabled, button', () => {
    // given
    const { container } = render(NeonDropdown, {
      props: { modelValue: false, label, disabled: true },
    });
    // when / then
    expect(container.getElementsByClassName('neon-dropdown--disabled')[0]).toBeDefined();
    expect(container.getElementsByClassName('neon-button--disabled')[0]).toBeDefined();
  });

  it('renders not disabled, badge', () => {
    // given
    const dropdownStyle = NeonDropdownStyle.CircularBadge;
    const { container } = render(NeonDropdown, {
      props: { modelValue: false, label, indicator: true, dropdownStyle },
    });
    // when / then
    expect(container.getElementsByClassName('neon-dropdown__badge')[0].getAttribute('tabindex')).toEqual('0');
    expect(container.getElementsByClassName('neon-dropdown__badge.neon-badge--disabled')[0]).toBeUndefined();
    expect(container.getElementsByClassName('neon-expansion-indicator--disabled')[0]).toBeUndefined();
  });

  it('renders default size, button', () => {
    // given
    const { container } = render(NeonDropdown, {
      props: { modelValue: false, label },
    });
    // when / then
    expect(container.getElementsByClassName('neon-dropdown--m')[0]).toBeDefined();
    expect(container.getElementsByClassName('neon-button--m')[0]).toBeDefined();
  });

  it('renders size, button', () => {
    // given
    const { container } = render(NeonDropdown, {
      props: { modelValue: false, label, size: NeonSize.Large },
    });
    // when / then
    expect(container.getElementsByClassName('neon-dropdown--l')[0]).toBeDefined();
    expect(container.getElementsByClassName('neon-button--l')[0]).toBeDefined();
  });

  it('renders default size, badge', () => {
    // given
    const dropdownStyle = NeonDropdownStyle.CircularBadge;
    const { container } = render(NeonDropdown, {
      props: { modelValue: false, label, dropdownStyle },
    });
    // when / then
    expect(container.getElementsByClassName('neon-badge--m')[0]).toBeDefined();
  });

  it('renders size, badge', () => {
    // given
    const dropdownStyle = NeonDropdownStyle.CircularBadge;
    const { container } = render(NeonDropdown, {
      props: { modelValue: false, label, dropdownStyle, size: NeonSize.Large },
    });
    // when / then
    expect(container.getElementsByClassName('neon-badge--l')[0]).toBeDefined();
  });

  it('renders default color, button', () => {
    // given
    const { container } = render(NeonDropdown, {
      props: { modelValue: false, label },
    });
    // when / then
    expect(container.getElementsByClassName('neon-dropdown--low-contrast')[0]).toBeDefined();
    expect(container.getElementsByClassName('neon-button--low-contrast')[0]).toBeDefined();
  });

  it('renders color, button', () => {
    // given
    const { container } = render(NeonDropdown, {
      props: { modelValue: false, label, color: NeonFunctionalColor.Primary },
    });
    // when / then
    expect(container.getElementsByClassName('neon-dropdown--primary')[0]).toBeDefined();
    expect(container.getElementsByClassName('neon-button--primary')[0]).toBeDefined();
  });

  it('renders default color, badge', () => {
    // given
    const dropdownStyle = NeonDropdownStyle.CircularBadge;
    const { container } = render(NeonDropdown, {
      props: { modelValue: false, label, dropdownStyle },
    });
    // when / then
    expect(container.getElementsByClassName('neon-badge--low-contrast')[0]).toBeDefined();
    expect(container.getElementsByClassName('neon-expansion-indicator--low-contrast')[0]).toBeDefined();
  });

  it('renders color, badge', () => {
    // given
    const dropdownStyle = NeonDropdownStyle.CircularBadge;
    const { container } = render(NeonDropdown, {
      props: { modelValue: false, label, dropdownStyle, color: NeonFunctionalColor.Primary },
    });
    // when / then
    expect(container.getElementsByClassName('neon-badge--primary')[0]).toBeDefined();
    expect(container.getElementsByClassName('neon-expansion-indicator--primary')[0]).toBeDefined();
  });

  it('renders button style text', () => {
    // given
    const dropdownStyle = NeonDropdownStyle.Text;
    const { container } = render(NeonDropdown, {
      props: { modelValue: false, label, dropdownStyle },
    });
    // when / then
    expect(container.getElementsByClassName('neon-button--text')[0]).toBeDefined();
  });

  it('renders button style solid', () => {
    // given
    const dropdownStyle = NeonDropdownStyle.SolidButton;
    const { container } = render(NeonDropdown, {
      props: { modelValue: false, label, dropdownStyle },
    });
    // when / then
    expect(container.getElementsByClassName('neon-button--solid')[0]).toBeDefined();
  });

  it('renders square badge', () => {
    // given
    const dropdownStyle = NeonDropdownStyle.SquareBadge;
    const { container } = render(NeonDropdown, {
      props: { modelValue: false, label, dropdownStyle },
    });
    // when / then
    expect(container.getElementsByClassName('neon-badge--circular')[0]).toBeUndefined();
  });

  it('renders circular badge', () => {
    // given
    const dropdownStyle = NeonDropdownStyle.CircularBadge;
    const { container } = render(NeonDropdown, {
      props: { modelValue: false, label, dropdownStyle },
    });
    // when / then
    expect(container.getElementsByClassName('neon-badge--circular')[0]).toBeDefined();
  });

  it('renders alternate color, button', () => {
    // given
    const { container } = render(NeonDropdown, {
      props: { modelValue: false, label, alternateColor: NeonFunctionalColor.Primary },
    });
    // when / then
    expect(container.getElementsByClassName('neon-button--alternate-color-primary')[0]).toBeDefined();
  });

  it('renders alternate color, badge', () => {
    // given
    const { container } = render(NeonDropdown, {
      props: {
        modelValue: false,
        label,
        dropdownStyle: NeonDropdownStyle.SquareBadge,
        alternateColor: NeonFunctionalColor.Primary,
      },
    });
    // when / then
    expect(container.getElementsByClassName('neon-badge--alternate-color-primary')[0]).toBeDefined();
  });

  it('renders default placement', () => {
    // given
    const { container } = render(NeonDropdown, {
      props: { modelValue: false, label },
    });
    // when / then
    expect(container.getElementsByClassName('neon-dropdown__content--bottom-left')[0]).toBeDefined();
  });

  it('renders placement', () => {
    // given
    const { container } = render(NeonDropdown, {
      props: { modelValue: false, label, placement: NeonDropdownPlacement.LeftTop },
    });
    // when / then
    expect(container.getElementsByClassName('neon-dropdown__content--left-top')[0]).toBeDefined();
  });

  it('renders placement with container', async () => {
    // given
    const { container, rerender } = render(NeonDropdown, {
      props: { modelValue: false, label },
    });
    await rerender({ placementContainer: container });
    // when / then
    expect(container.getElementsByClassName('neon-dropdown__content--bottom-left')[0]).toBeDefined();
  });

  it('emits focus event', async () => {
    // given
    const { container, emitted } = render(NeonDropdown, {
      props: { modelValue: false, label },
    });
    // when
    const button = container.getElementsByClassName('neon-dropdown__button')[0];
    await fireEvent.focus(button);
    // then
    expect(emitted().focus).toBeDefined();
  });

  it('emits blur event', async () => {
    // given
    const { container, emitted } = render(NeonDropdown, {
      props: { modelValue: false, label },
    });
    // when
    const button = container.getElementsByClassName('neon-dropdown__button')[0];
    await fireEvent.blur(button);
    // then
    expect(emitted().blur).toBeDefined();
  });

  it('clicking button opens dropdown', async () => {
    // given
    const { container, emitted } = render(NeonDropdown, {
      props: { modelValue: false, label },
    });
    // when
    const button = container.getElementsByClassName('neon-dropdown__button')[0];
    await fireEvent.click(button);
    // then
    expect(emitted()['update:modelValue'][0]).toEqual([true]);
  });

  it('clicking button closes dropdown', async () => {
    // given
    const { container, emitted } = render(NeonDropdown, {
      props: { modelValue: true, label },
    });
    // when
    const button = container.getElementsByClassName('neon-dropdown__button')[0];
    await fireEvent.click(button);
    // then
    expect(emitted()['update:modelValue'][0]).toEqual([false]);
  });

  it('clicking disabled button does nothing', async () => {
    // given
    const { container, emitted } = render(NeonDropdown, {
      props: { modelValue: false, label, disabled: true },
    });
    // when
    const button = container.getElementsByClassName('neon-dropdown__button')[0];
    await fireEvent.click(button);
    // then
    expect(emitted()['update:modelValue']).toBeUndefined();
  });

  it('clicking badge opens dropdown', async () => {
    // given
    const { container, emitted } = render(NeonDropdown, {
      props: { modelValue: false, label, dropdownStyle: NeonDropdownStyle.SquareBadge },
    });
    // when
    const button = container.getElementsByClassName('neon-dropdown__badge')[0];
    await fireEvent.click(button);
    // then
    expect(emitted()['update:modelValue'][0]).toEqual([true]);
  });

  it('keydown space on badge opens dropdown', async () => {
    // given
    const { container, emitted } = render(NeonDropdown, {
      props: { modelValue: false, label, dropdownStyle: NeonDropdownStyle.SquareBadge },
    });
    // when
    const button = container.getElementsByClassName('neon-dropdown__badge')[0];
    await fireEvent.keyDown(button, { key: 'Space', code: 'Space' });
    // then
    expect(emitted()['update:modelValue'][0]).toEqual([true]);
  });

  it('keydown enter on badge opens dropdown', async () => {
    // given
    const { container, emitted } = render(NeonDropdown, {
      props: { modelValue: false, label, dropdownStyle: NeonDropdownStyle.SquareBadge },
    });
    // when
    const button = container.getElementsByClassName('neon-dropdown__badge')[0];
    await fireEvent.keyDown(button, { key: 'Enter', code: 'Enter' });
    // then
    expect(emitted()['update:modelValue'][0]).toEqual([true]);
  });

  it('clicking badge closes dropdown', async () => {
    // given
    const { container, emitted } = render(NeonDropdown, {
      props: { modelValue: true, label, dropdownStyle: NeonDropdownStyle.SquareBadge },
    });
    // when
    const button = container.getElementsByClassName('neon-dropdown__badge')[0];
    await fireEvent.click(button);
    // then
    expect(emitted()['update:modelValue'][0]).toEqual([false]);
  });

  it('clicking disabled badge does nothing', async () => {
    // given
    const { container, emitted } = render(NeonDropdown, {
      props: { modelValue: false, label, dropdownStyle: NeonDropdownStyle.SquareBadge, disabled: true },
    });
    // when
    const button = container.getElementsByClassName('neon-dropdown__badge')[0];
    await fireEvent.click(button);
    // then
    expect(emitted()['update:modelValue']).toBeUndefined();
  });
});
