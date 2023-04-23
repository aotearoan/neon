import { fireEvent, render } from '@testing-library/vue';
import NeonActionMenu from './NeonActionMenu.vue';
import { router } from '@/../test/unit/test-router';

describe('NeonActionMenu', () => {
  const global = { plugins: [router] };
  const model = [
    {
      label: 'Option 1',
      key: 'option-1',
    },
    {
      label: 'Option 2',
      key: 'option-2',
    },
  ];

  it('renders selected class', () => {
    // given
    const modelValue = model[1].key;
    const { container } = render(NeonActionMenu, { props: { model, modelValue }, global });
    // when / then
    expect(container.getElementsByClassName('neon-action-menu__link--selected')[0].textContent).toMatch(model[1].label);
  });

  it('renders disabled classes', () => {
    // given
    const localModel = [model[0], { ...model[1], disabled: true }];
    const modelValue = model[0].key;
    const { container } = render(NeonActionMenu, { props: { model: localModel, modelValue }, global });
    // when / then
    expect(container.getElementsByClassName('neon-action-menu__link--disabled')[0].textContent).toEqual(
      localModel[1].label,
    );
  });

  it('emits click event', async () => {
    // given
    const modelValue = model[1].key;
    const { emitted, getByText } = render(NeonActionMenu, { props: { model, modelValue }, global });

    // when
    await fireEvent.click(getByText(model[0].label));
    // then
    expect(emitted()['update:modelValue'][0]).toEqual([model[0].key]);
  });

  it('does not emit click event on disabled item', async () => {
    // given
    const localModel = [{ ...model[0], disabled: true }, model[1]];
    const modelValue = localModel[1].key;
    const { emitted, getByText } = render(NeonActionMenu, { props: { model: localModel, modelValue }, global });
    // when
    await fireEvent.click(getByText(localModel[0].label));
    // then
    expect(emitted()['update:modelValue']).toBeUndefined();
  });

  it('does not emit click event on selected item', async () => {
    // given
    const modelValue = model[1].key;
    const { emitted, getByText } = render(NeonActionMenu, { props: { model, modelValue }, global });

    // when
    await fireEvent.click(getByText(model[1].label));
    // then
    expect(emitted()['update:modelValue']).toBeUndefined();
  });

  it('emits event on space keydown', async () => {
    // given
    const modelValue = model[1].key;
    const { emitted, getByText } = render(NeonActionMenu, { props: { model, modelValue }, global });

    // when
    await fireEvent.keyDown(getByText(model[0].label), { key: 'Space', code: 'Space' });
    // then
    expect(emitted()['update:modelValue'][0]).toEqual([model[0].key]);
  });

  it('does not emit event on space keypress on disabled item', async () => {
    // given
    const localModel = [{ ...model[0], disabled: true }, model[1]];
    const modelValue = localModel[1].key;
    const { emitted, getByText } = render(NeonActionMenu, { props: { model: localModel, modelValue }, global });
    // when
    await fireEvent.keyDown(getByText(model[0].label), { key: 'Space', code: 'Space' });
    // then
    expect(emitted()['update:modelValue']).toBeUndefined();
  });

  it('does not emit event on space keydown on selected item', async () => {
    // given
    const modelValue = model[1].key;
    const { emitted, getByText } = render(NeonActionMenu, { props: { model, modelValue }, global });
    // when
    await fireEvent.keyDown(getByText(model[1].label), { key: 'Space', code: 'Space' });
    // then
    expect(emitted()['update:modelValue']).toBeUndefined();
  });
});
