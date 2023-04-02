import type { RenderResult } from '@testing-library/vue';
import { fireEvent, render } from '@testing-library/vue';
import NeonColor from './NeonColor.vue';
import { NeonSize } from '@/common/enums/NeonSize';
import { NeonFunctionalColor } from '@/common/enums/NeonFunctionalColor';

describe('NeonColor', () => {
  const value = '#bada55';
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(NeonColor, {
      props: { modelValue: value },
    });
  });

  it('renders default size', () => {
    const { container } = harness;
    expect(container.querySelector('.neon-color--m')).toBeDefined();
    expect(container.querySelectorAll('.neon-input--m').length).toEqual(2);
  });

  it('renders size', async () => {
    const { container, rerender } = harness;
    await rerender({ size: NeonSize.Large });
    expect(container.querySelector('.neon-color--l')).toBeDefined();
    expect(container.querySelectorAll('.neon-input--l').length).toEqual(2);
  });

  it('renders default color', () => {
    const { container } = harness;
    expect(container.querySelector('.neon-color--low-contrast')).toBeDefined();
    expect(container.querySelectorAll('.neon-input--low-contrast').length).toEqual(2);
  });

  it('renders color', async () => {
    const { container, rerender } = harness;
    await rerender({ color: NeonFunctionalColor.Brand });
    expect(container.querySelector('.neon-color--brand')).toBeDefined();
    expect(container.querySelectorAll('.neon-input--brand').length).toEqual(2);
  });

  it('renders default not disabled', () => {
    const { container } = harness;
    expect(container.querySelector('.neon-color--disabled')).toBeNull();
    expect(container.querySelectorAll('.neon-input--disabled').length).toEqual(0);
  });

  it('renders disabled', async () => {
    const { container, rerender } = harness;
    await rerender({ disabled: true });
    expect(container.querySelector('.neon-color--disabled')).toBeDefined();
    expect(container.querySelectorAll('.neon-input--disabled').length).toEqual(2);
  });

  it('renders placeholder', async () => {
    const placeholder = 'xdd';
    const { container, rerender } = harness;
    await rerender({ placeholder });
    expect(
      container.querySelector('.neon-color__text-input .neon-input__textfield')?.getAttribute('placeholder'),
    ).toEqual(placeholder);
  });

  it('renders value', () => {
    const { container } = harness;
    expect(container.querySelector('.neon-color__text-input .neon-input__textfield')?.getAttribute('value')).toEqual(
      value,
    );
    expect(container.querySelector('.neon-color__input .neon-input__textfield')?.getAttribute('value')).toEqual(value);
    expect(
      (container.querySelector('.neon-color__indicator') as HTMLInputElement).style.getPropertyValue(
        'background-color',
      ),
    ).toEqual('rgb(186, 218, 85)');
    expect(
      (container.querySelector('.neon-color__indicator') as HTMLInputElement).style.getPropertyValue('box-shadow'),
    ).toEqual(`0 0 0 2rem ${value}4D`);
  });

  it('emits changed text value', async () => {
    const newValue = '#1a1a1a';
    const { emitted, getAllByTestId } = harness;
    const el = getAllByTestId('neonInput')[0] as HTMLInputElement;
    el.value = newValue;
    await fireEvent.input(el);
    expect(emitted()['update:modelValue'][0]).toEqual([newValue]);
  });
});
