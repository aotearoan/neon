import type { RenderResult } from '@testing-library/vue';
import { fireEvent, render } from '@testing-library/vue';
import NeonMobileMenu from './NeonMobileMenu.vue';
import { NeonFunctionalColor } from '@/common/enums/NeonFunctionalColor';
import { router } from '@/../test/unit/test-router';

describe('NeonMobileMenu', () => {
  const menu = [
    {
      key: 'mobile-menu',
      label: 'Payments',
      icon: 'currency-dollar-circle',
      href: '/navigation/mobile-menu',
    },
    {
      key: 'transfer',
      label: 'Transfers',
      icon: 'data-transfer-horizontal',
      href: '/navigation/link',
    },
    {
      key: 'mail',
      label: 'Mail',
      icon: 'envelope',
      href: '/navigation/menu',
      disabled: true,
    },
  ];

  let harness: RenderResult;

  beforeEach(() => {
    jest.resetAllMocks();

    harness = render(NeonMobileMenu, {
      props: {
        menu,
      },
      global: {
        plugins: [router],
      },
    });
  });

  it('renders mobile menu', () => {
    // given
    const { html } = harness;
    // when / then
    expect(html()).toMatchSnapshot();
  });

  it('renders default color', () => {
    // given
    const { container } = harness;
    // when / then
    expect(container.querySelector('.neon-mobile-menu--primary')).toBeDefined();
  });

  it('renders color', async () => {
    // given
    const { container, rerender } = harness;
    await rerender({ color: NeonFunctionalColor.Brand });
    // when / then
    expect(container.querySelector('.neon-mobile-menu--brand')).toBeDefined();
  });

  it('emits click event', () => {
    // given
    const { container, emitted } = harness;
    // when
    const item = container.querySelector(
      '.neon-mobile-menu__item:nth-child(1) .neon-mobile-menu__link-container',
    ) as HTMLElement;
    fireEvent.click(item);
    // then
    expect(emitted().click[0]).toEqual([menu[0].key]);
  });

  it('does not emit click event when item is disabled', () => {
    // given
    const { container, emitted } = harness;
    // when
    const item = container.querySelector(
      '.neon-mobile-menu__item--disabled .neon-mobile-menu__link-container',
    ) as HTMLElement;
    fireEvent.click(item);
    // then
    expect(emitted().click).toBeUndefined();
  });
});
