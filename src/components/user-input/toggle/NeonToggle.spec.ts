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

  it('renders default color', () => {
    // given
    const { html } = harness;
    // when / then
    expect(html()).toMatch('neon-toggle--neutral');
  });

  it('renders color', async () => {
    // given
    const { html, rerender } = harness;
    // when
    await rerender({ ...props, color: NeonFunctionalColor.Primary });
    // then
    expect(html()).toMatch('neon-toggle--primary');
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
    const { getAllByTestId } = harness;
    // when / then
    const inputs = getAllByTestId('toggle-input');
    expect(inputs.length).toEqual(3);
    inputs.forEach((input) => expect(input.getAttribute('name')).toEqual(name));
  });

  it('renders disabled option', () => {
    // given
    const { getAllByTestId } = harness;
    // when / then
    const option = getAllByTestId('toggle-input')[1];
    expect(option.getAttribute('disabled')).toEqual('true');
    expect(option.parentElement?.getAttribute('aria-disabled')).toEqual('true');
  });

  it('renders checked option', () => {
    // given
    const { getAllByTestId } = harness;
    // when / then
    const option = getAllByTestId('toggle-input')[0];
    expect(option.getAttribute('checked')).toEqual('true');
    expect(option.parentElement?.getAttribute('aria-checked')).toEqual('true');
    expect(option.parentElement?.textContent).toEqual(model[0].label);
    expect(option.getAttribute('value')).toEqual(model[0].key);
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
    const { emitted, getAllByTestId } = harness;
    const option = getAllByTestId('toggle-input')[2];
    // when
    await fireEvent.click(option);
    // then
    expect(emitted()['update:modelValue']).toEqual([[model[2].key]]);
  });

  // it('emits selection when clicked', () => {
  //   // given
  //   const wrapper = shallowMount(NeonToggle, {
  //     propsData: { name, model, modelValue },
  //   });
  //   // when
  //   const label = wrapper.find(
  //     '.neon-toggle__label:not(.neon-toggle__label--checked):not(.neon-toggle__label--disabled)',
  //   );
  //   label.trigger('click');
  //   // then
  //   expect(wrapper.emitted()['update:modelValue'][0]).toEqual([model[2].key]);
  // });
  //
  // it('emits nothing when clicking disabled option', () => {
  //   // given
  //   const wrapper = shallowMount(NeonToggle, {
  //     propsData: { name, model, modelValue },
  //   });
  //   // when
  //   const label = wrapper.find('.neon-toggle__label--disabled');
  //   label.trigger('click');
  //   // then
  //   expect(wrapper.emitted()['update:modelValue']).toBeUndefined();
  // });
  //
  // it('emits nothing when toggle disabled', () => {
  //   // given
  //   const wrapper = shallowMount(NeonToggle, {
  //     propsData: { name, model, modelValue, disabled: true },
  //   });
  //   // when
  //   const label = wrapper.findAll('.neon-toggle__label').at(0);
  //   label.trigger('click');
  //   // then
  //   expect(wrapper.emitted()['update:modelValue']).toBeUndefined();
  // });
  //
  // it('emits nothing when clicking checked option', () => {
  //   // given
  //   const wrapper = shallowMount(NeonToggle, {
  //     propsData: { name, model, modelValue },
  //   });
  //   // when
  //   const label = wrapper.find('.neon-toggle__label--checked');
  //   label.trigger('click');
  //   // then
  //   expect(wrapper.emitted()['update:modelValue']).toBeUndefined();
  // });
  //
  // it('toggles option when space pressed', () => {
  //   // given
  //   const wrapper = shallowMount(NeonToggle, {
  //     propsData: { name, model, modelValue },
  //   });
  //   // when
  //   wrapper.findAll('.neon-toggle__label').at(0).trigger('keydown.space');
  //   // then
  //   expect(wrapper.emitted()['update:modelValue'][0]).toEqual([model[0].key]);
  // });
  //
  // it('does not toggle option when space pressed and option disabled', () => {
  //   // given
  //   const wrapper = shallowMount(NeonToggle, {
  //     propsData: { name, model, modelValue },
  //   });
  //   // when
  //   wrapper.findAll('.neon-toggle__label').at(1).trigger('keydown.space');
  //   // then
  //   expect(wrapper.emitted()['update:modelValue']).toBeUndefined();
  // });
  //
  // it('does not toggle option when space pressed and toggle disabled', () => {
  //   // given
  //   const wrapper = shallowMount(NeonToggle, {
  //     propsData: { name, model, modelValue, disabled: true },
  //   });
  //   // when
  //   wrapper.findAll('.neon-toggle__label').at(0).trigger('keydown.space');
  //   // then
  //   expect(wrapper.emitted()['update:modelValue']).toBeUndefined();
  // });
  //
  // it('toggles option when enter pressed', () => {
  //   // given
  //   const wrapper = shallowMount(NeonToggle, {
  //     propsData: { name, model, modelValue },
  //   });
  //   // when
  //   wrapper.findAll('.neon-toggle__label').at(0).trigger('keydown.enter');
  //   // then
  //   expect(wrapper.emitted()['update:modelValue'][0]).toEqual([model[0].key]);
  // });
  //
  // it('does not toggle option when enter pressed and option disabled', () => {
  //   // given
  //   const wrapper = shallowMount(NeonToggle, {
  //     propsData: { name, model, modelValue },
  //   });
  //   // when
  //   wrapper.findAll('.neon-toggle__label').at(1).trigger('keydown.enter');
  //   // then
  //   expect(wrapper.emitted()['update:modelValue']).toBeUndefined();
  // });
  //
  // it('does not toggle option when enter pressed and toggle disabled', () => {
  //   // given
  //   const wrapper = shallowMount(NeonToggle, {
  //     propsData: { name, model, modelValue, disabled: true },
  //   });
  //   // when
  //   wrapper.findAll('.neon-toggle__label').at(0).trigger('keydown.enter');
  //   // then
  //   expect(wrapper.emitted()['update:modelValue']).toBeUndefined();
  // });
});
