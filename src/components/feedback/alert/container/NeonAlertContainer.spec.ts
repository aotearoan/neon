import { fireEvent, render } from '@testing-library/vue';
import NeonAlertContainer from './NeonAlertContainer.vue';
import { NeonAlertLevel } from '@/common/enums/NeonAlertLevel';
import { NeonAlertPlacement } from '@/common/enums/NeonAlertPlacement';

describe('NeonAlertContainer', () => {
  it('removes alert on close info', async () => {
    // given
    const msg = { id: 42, level: NeonAlertLevel.Info, title: 'test', dismissible: true, showIcon: true };
    const { emitted, getByText } = render(NeonAlertContainer, {
      props: { modelValue: [msg], placement: NeonAlertPlacement.TopLeft },
    });
    // when
    await fireEvent.click(getByText(msg.title));
    // then
    expect(emitted()['update:modelValue'][0]).toEqual([[]]);
  });

  it('removes alert on close success', async () => {
    // given
    const msg = { id: 42, level: NeonAlertLevel.Success, title: 'test', dismissible: true, showIcon: true };
    const { emitted, getByText } = render(NeonAlertContainer, {
      props: { modelValue: [msg], placement: NeonAlertPlacement.TopLeft },
    });
    // when
    await fireEvent.click(getByText(msg.title));
    // then
    expect(emitted()['update:modelValue'][0]).toEqual([[]]);
  });

  it('removes alert on close warn', async () => {
    // given
    const msg = { id: 42, level: NeonAlertLevel.Warn, title: 'test', dismissible: true, showIcon: true };
    const { emitted, getByText } = render(NeonAlertContainer, {
      props: { modelValue: [msg], placement: NeonAlertPlacement.TopLeft },
    });
    // when
    await fireEvent.click(getByText(msg.title));
    // then
    expect(emitted()['update:modelValue'][0]).toEqual([[]]);
  });

  it('removes alert on close error', async () => {
    // given
    const msg = { id: 42, level: NeonAlertLevel.Error, title: 'test', dismissible: true, showIcon: true };
    const { emitted, getByText } = render(NeonAlertContainer, {
      props: { modelValue: [msg], placement: NeonAlertPlacement.TopLeft },
    });
    // when
    await fireEvent.click(getByText(msg.title));
    // then
    expect(emitted()['update:modelValue'][0]).toEqual([[]]);
  });

  it('renders without icon by default', async () => {
    // given
    const msg = {
      id: 42,
      level: NeonAlertLevel.Error,
      title: 'test',
      dismissible: false,
    };
    const { container } = render(NeonAlertContainer, {
      props: { modelValue: [msg], placement: NeonAlertPlacement.TopLeft },
    });
    // when / then
    expect(container.querySelector('.neon-alert__message--with-icon')).toBeNull();
    expect(container.querySelector('.neon-icon--name-multiplication-math-symbol-circle')).toBeNull();
  });

  it('renders with icon', async () => {
    // given
    const msg = {
      id: 42,
      level: NeonAlertLevel.Error,
      title: 'test',
      dismissible: false,
      showIcon: true,
    };
    const { container } = render(NeonAlertContainer, {
      props: { modelValue: [msg], placement: NeonAlertPlacement.TopLeft },
    });
    // when / then
    expect(container.querySelector('.neon-alert__message--with-icon')).toBeDefined();
    expect(container.querySelector('.neon-icon--name-multiplication-math-symbol-circle')).toBeDefined();
  });
});
