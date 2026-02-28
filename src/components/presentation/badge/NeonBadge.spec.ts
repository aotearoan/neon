import NeonBadge from './NeonBadge.vue';
import { NeonFunctionalColor } from '@/common/enums/NeonFunctionalColor';
import { fireEvent, render } from '@testing-library/vue';
import { NeonBadgeSize } from '@/common/enums/NeonBadgeSize';
import user from '@testing-library/user-event';

describe('NeonBadge', () => {
  it('renders label', () => {
    const label = 'test label';
    const { container } = render(NeonBadge, { props: { label } });
    expect(container.getElementsByClassName('neon-badge--with-label')[0]).toBeDefined();
    expect(container.getElementsByClassName('neon-badge__label')[0].textContent).toEqual(label);
  });

  it('renders image', () => {
    // given
    const image = '/test.jpg';
    const { container } = render(NeonBadge, { props: { image } });
    expect(container.getElementsByClassName('neon-badge--with-image')[0]).toBeDefined();
    const img = container.getElementsByClassName('neon-badge__image')[0] as HTMLImageElement;
    expect(img.getAttribute('src')).toEqual(image);
    expect(img.getAttribute('alt')).toEqual('Badge');
  });

  it('renders jazzicon', () => {
    // given
    const { html } = render(NeonBadge, { props: { jazziconId: 'Test Jazzicon' } });

    expect(html()).toMatchSnapshot();
  });

  it('renders image with imageAlt', () => {
    // given
    const image = '/test.jpg';
    const { container } = render(NeonBadge, { props: { image, imageAlt: 'xdd' } });
    // when
    const img = container.getElementsByClassName('neon-badge__image')[0] as HTMLImageElement;
    // then
    expect(img.getAttribute('src')).toEqual(image);
    expect(img.getAttribute('alt')).toEqual('xdd');
  });

  it('does not render editable by default', () => {
    // given
    const image = '/test.jpg';
    const { container } = render(NeonBadge, { props: { image } });
    // then
    expect(container.querySelector<HTMLElement>('.neon-badge__upload')).toBeNull();
  });

  it('renders editable', () => {
    // given
    const image = '/test.jpg';
    const { container, html } = render(NeonBadge, { props: { image, editable: true } });
    // then
    expect(container.querySelector<HTMLElement>('.neon-badge__upload')).toBeDefined();
    expect(html()).toMatchSnapshot();
  });

  it('emits change-image', async () => {
    // given
    const image = '/test.jpg';
    const file = new File(['hello'], 'hello.png', { type: 'image/png' });
    const { container, emitted, getByTitle } = render(NeonBadge, { props: { image, editable: true } });
    // when
    await fireEvent.click(getByTitle('Edit'));
    await user.upload(container.querySelector('input[type=file]') as HTMLInputElement, file);
    // then
    expect(emitted()['change-image'][0]).toEqual([file]);
  });

  it('renders icon', () => {
    // given
    const icon = 'check';
    const { container } = render(NeonBadge, { props: { icon } });
    expect(container.getElementsByClassName('neon-badge--with-icon')[0]).toBeDefined();
    expect(container.getElementsByClassName('neon-badge__icon')[0]).toBeDefined();
  });

  it('renders square class', () => {
    const icon = 'check';
    const { container } = render(NeonBadge, { props: { icon } });
    expect(container.getElementsByClassName('neon-badge--square')[0]).toBeDefined();
  });

  it('renders circular class', () => {
    const icon = 'check';
    const { container } = render(NeonBadge, { props: { icon, circular: true } });
    expect(container.getElementsByClassName('neon-badge--circular')[0]).toBeDefined();
  });

  it('renders default accept when editable', () => {
    const icon = 'check-1';
    const { container } = render(NeonBadge, { props: { icon, editable: true } });
    expect((container.querySelector('input[type=file]') as HTMLInputElement).accept).toEqual('image/*');
  });

  it('renders accept when editable', () => {
    const icon = 'check-1';
    const { container } = render(NeonBadge, { props: { icon, editable: true, accept: 'image/jpeg' } });
    expect((container.querySelector('input[type=file]') as HTMLInputElement).accept).toEqual('image/jpeg');
  });

  it('renders default size', () => {
    const icon = 'check';
    const { container } = render(NeonBadge, { props: { icon } });
    expect(container.getElementsByClassName('neon-badge--m')[0]).toBeDefined();
  });

  it('renders size', () => {
    const icon = 'check';
    const { container } = render(NeonBadge, { props: { icon, size: NeonBadgeSize.ExtraLarge } });
    expect(container.getElementsByClassName('neon-badge--xl')[0]).toBeDefined();
  });

  it('renders default color', () => {
    const icon = 'check';
    const { container } = render(NeonBadge, { props: { icon } });
    expect(container.getElementsByClassName('neon-badge--primary')[0]).toBeDefined();
  });

  it('renders color', () => {
    const icon = 'check';
    const { container } = render(NeonBadge, { props: { icon, color: NeonFunctionalColor.Primary } });
    expect(container.getElementsByClassName('neon-badge--primary')[0]).toBeDefined();
  });

  it('renders alternateColor', () => {
    const icon = 'check';
    const { container } = render(NeonBadge, { props: { icon, alternateColor: NeonFunctionalColor.Primary } });
    expect(container.getElementsByClassName('neon-badge--alternate-color-primary')[0]).toBeDefined();
  });

  it('renders disabled', () => {
    const icon = 'check';
    const { container } = render(NeonBadge, { props: { icon, disabled: true } });
    expect(container.getElementsByClassName('neon-badge--disabled')[0]).toBeDefined();
  });
});
