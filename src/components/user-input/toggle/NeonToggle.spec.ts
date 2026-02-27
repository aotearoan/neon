import type { RenderResult } from '@testing-library/vue';
import { fireEvent, render } from '@testing-library/vue';
import NeonToggle from './NeonToggle.vue';
import { NeonToggleStyle } from '@/common/enums/NeonToggleStyle';
import { NeonSize } from '@/common/enums/NeonSize';
import { NeonFunctionalColor } from '@/common/enums/NeonFunctionalColor';
import { NeonOrientation } from '@/common/enums/NeonOrientation';

describe('NeonToggle', () => {
  const name = 'xd';

  const model = [
    {
      label: 'Option 1',
      key: 'option-1',
    },
    {
      label: 'Option 2',
      key: 'option-2',
      disabled: true,
    },
    {
      label: 'Option 3',
      key: 'option-3',
    },
  ];

  const iconModel = [
    {
      icon: 'align-left',
      key: 'left',
    },
    {
      icon: 'align-right',
      key: 'right',
    },
  ];

  const modelWithDescriptions = model.map((option, index) => ({ ...option, description: `description ${index}` }));

  const modelValue = model[0].key;
  const iconValue = iconModel[0].key;
  const props = { name, model, modelValue };

  let harness: RenderResult;

  beforeEach(() => {
    harness = render(NeonToggle, { props });
  });

  it('renders default toggle style', () => {
    // given
    const { html } = harness;
    // when / then
    expect(html()).toMatch('neon-toggle--toggle');
  });

  it('renders radio button style', async () => {
    // given
    const { html, rerender } = harness;
    // when
    await rerender({ ...props, toggleStyle: NeonToggleStyle.RadioButtons });
    // then
    expect(html()).toMatch('neon-toggle--radio-buttons');
  });

  it('renders radio buttons with label override', () => {
    // given
    const { html } = render(NeonToggle, {
      props: { name, model: modelWithDescriptions, modelValue, toggleStyle: NeonToggleStyle.RadioButtons },
      slots: {
        option: '<span>{{ index }} = {{ option.description }}</span>',
      },
    });
    // then
    expect(html()).toMatchSnapshot();
  });

  it('renders default size', () => {
    // given
    const { html } = harness;
    // when / then
    expect(html()).toMatch('neon-toggle--m');
  });

  it('renders size', async () => {
    // given
    const { html, rerender } = harness;
    // when
    await rerender({ ...props, size: NeonSize.Large });
    // then
    expect(html()).toMatch('neon-toggle--l');
  });

  it('renders without slot override class by default', () => {
    // given
    const { html } = harness;
    // when / then
    expect(html()).not.toMatch('neon-toggle__label--with-slot-override');
  });

  it('renders with slot override class', () => {
    // given
    const { html } = render(NeonToggle, {
      props: { name, model: modelWithDescriptions, modelValue, toggleStyle: NeonToggleStyle.RadioButtons },
      slots: {
        option: '<span>{{ index }} = {{ option.description }}</span>',
      },
    });
    // when / then
    expect(html()).toMatch('neon-toggle__label--with-slot-override');
  });

  it('renders default color', () => {
    // given
    const { html } = harness;
    // when / then
    expect(html()).toMatch('neon-toggle--primary');
  });

  it('renders color', async () => {
    // given
    const { html, rerender } = harness;
    // when
    await rerender({ ...props, color: NeonFunctionalColor.Brand });
    // then
    expect(html()).toMatch('neon-toggle--brand');
  });

  it('renders default disabled', () => {
    // given
    const { html } = harness;
    // when / then
    expect(html()).not.toMatch('neon-toggle--disabled');
  });

  it('renders disabled', async () => {
    // given
    const { html, rerender } = harness;
    // when
    await rerender({ ...props, disabled: true });
    // then
    expect(html()).toMatch('neon-toggle--disabled');
  });

  it('renders icon', async () => {
    // given
    const { html, rerender } = harness;
    // when
    await rerender({ ...props, model: iconModel, modelValue: iconValue });
    // then
    expect(html()).toMatch('neon-toggle__label--with-icon');
  });

  it('renders default orientation', () => {
    // given
    const { html } = harness;
    // when / then
    expect(html()).toMatch('neon-toggle--vertical');
  });

  it('renders orientation', async () => {
    // given
    const { html, rerender } = harness;
    // when
    await rerender({ ...props, orientation: NeonOrientation.Horizontal });
    // then
    expect(html()).toMatch('neon-toggle--horizontal');
  });

  it('renders name', () => {
    // given
    const { container } = harness;
    // when / then
    const inputs = container.querySelectorAll('.neon-toggle__input');
    expect(inputs.length).toEqual(3);
    inputs.forEach((input) => expect(input.getAttribute('name')).toEqual(name));
  });

  it('renders disabled option', () => {
    // given
    const { container } = harness;
    // when / then
    const option = container.querySelectorAll('.neon-toggle__input')[1] as HTMLInputElement;
    expect(option.disabled).toEqual(true);
    expect(option.parentElement?.getAttribute('aria-disabled')).toEqual('true');
  });

  it('renders checked option', () => {
    // given
    const { container } = harness;
    // when / then
    const option = container.querySelectorAll('.neon-toggle__input')[0] as HTMLInputElement;
    expect(option.getAttribute('checked')).toBeDefined();
    expect(option.parentElement?.getAttribute('aria-checked')).toEqual('true');
    expect(option.parentElement?.textContent).toEqual(model[0].label);
    expect(option.value).toEqual(model[0].key);
  });

  it('renders indicator for radio buttons', async () => {
    // given
    const { html, rerender } = harness;
    // when
    await rerender({ ...props, toggleStyle: NeonToggleStyle.RadioButtons });
    // then
    expect(html()).toMatch('neon-toggle__radio-button-indicator');
  });

  it('emits selection when clicked', async () => {
    // given
    const { container, emitted } = harness;
    const option = container.querySelectorAll('.neon-toggle__input')[2];
    // when
    await fireEvent.click(option);
    // then
    expect(emitted()['update:modelValue']).toEqual([[model[2].key]]);
  });

  it('emits nothing when clicking disabled option', async () => {
    // given
    const { container, emitted } = harness;
    // when
    const label = container.querySelector('.neon-toggle__label--disabled') as HTMLLabelElement;
    await fireEvent.click(label);
    // then
    expect(emitted()['update:modelValue']).toBeUndefined();
  });

  it('emits nothing when toggle disabled', async () => {
    // given
    const { container, emitted, rerender } = harness;
    await rerender({ disabled: true });
    // when
    const label = container.querySelectorAll('.neon-toggle__label')[0] as HTMLLabelElement;
    await fireEvent.click(label);
    // then
    expect(emitted()['update:modelValue']).toBeUndefined();
  });

  it('emits nothing when clicking checked option', async () => {
    // given
    const { container, emitted } = harness;
    // when
    const label = container.querySelector('.neon-toggle__label--checked') as HTMLLabelElement;
    await fireEvent.click(label);
    // then
    expect(emitted()['update:modelValue']).toBeUndefined();
  });

  it('toggles option when space pressed', async () => {
    // given
    const { container, emitted } = harness;
    const option = container.querySelectorAll('.neon-toggle__input')[2];
    // when
    await fireEvent.keyDown(option, { key: 'Space', code: 'Space' });
    // then
    expect(emitted()['update:modelValue']).toEqual([[model[2].key]]);
  });

  it('emits nothing when toggle disabled & space pressed', async () => {
    // given
    const { container, emitted, rerender } = harness;
    await rerender({ disabled: true });
    // when
    const label = container.querySelectorAll('.neon-toggle__label')[0] as HTMLLabelElement;
    await fireEvent.keyDown(label, { key: 'Space', code: 'Space' });
    // then
    expect(emitted()['update:modelValue']).toBeUndefined();
  });

  it('emits nothing when option disabled & space pressed', async () => {
    // given
    const { container, emitted } = harness;
    // when
    const label = container.querySelector('.neon-toggle__label--disabled') as HTMLLabelElement;
    await fireEvent.keyDown(label, { key: 'Space', code: 'Space' });
    // then
    expect(emitted()['update:modelValue']).toBeUndefined();
  });

  it('toggles option when enter pressed', async () => {
    // given
    const { container, emitted } = harness;
    const option = container.querySelectorAll('.neon-toggle__input')[2];
    // when
    await fireEvent.keyDown(option, { key: 'Enter', code: 'Enter' });
    // then
    expect(emitted()['update:modelValue']).toEqual([[model[2].key]]);
  });

  it('emits nothing when toggle disabled & enter pressed', async () => {
    // given
    const { container, emitted, rerender } = harness;
    await rerender({ disabled: true });
    // when
    const label = container.querySelectorAll('.neon-toggle__label')[0] as HTMLLabelElement;
    await fireEvent.keyDown(label, { key: 'Enter', code: 'Enter' });
    // then
    expect(emitted()['update:modelValue']).toBeUndefined();
  });

  it('emits nothing when option disabled & enter pressed', async () => {
    // given
    const { container, emitted } = harness;
    // when
    const label = container.querySelector('.neon-toggle__label--disabled') as HTMLLabelElement;
    await fireEvent.keyDown(label, { key: 'Enter', code: 'Enter' });
    // then
    expect(emitted()['update:modelValue']).toBeUndefined();
  });
});
