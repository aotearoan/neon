import type { RenderResult } from '@testing-library/vue';
import { fireEvent, render } from '@testing-library/vue';
import NeonTabs from './NeonTabs.vue';
import { NeonSize } from '@/common/enums/NeonSize';
import { NeonFunctionalColor } from '@/common/enums/NeonFunctionalColor';
import { NeonTabModel } from '@/common/models/NeonTabModel';
import { router } from '@/../test/unit/test-router';

describe('NeonTabs', () => {
  const tabs: Array<NeonTabModel> = [
    {
      key: 'tab1',
      label: 'Tab 1',
    },
    {
      key: 'tab2',
      label: 'Tab 2',
      icon: 'heart',
    },
    {
      key: 'tab3',
      label: 'Tab 3',
      icon: 'check',
    },
  ];

  const modelValue = tabs[1].key;

  let harness: RenderResult;

  beforeAll(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window.matchMedia = () => ({ matches: false });
  });

  beforeEach(() => {
    harness = render(NeonTabs, {
      props: { tabs, modelValue },
      slots: {
        default: '<p>test</p>',
      },
      global: {
        plugins: [router],
      },
    });
  });

  it('renders default slot', () => {
    const { html } = harness;
    expect(html()).toMatch('<p>test</p>');
  });

  it('renders default size', () => {
    const { html } = harness;
    expect(html()).toMatch('neon-tabs--m');
  });

  it('renders size', async () => {
    const { html, rerender } = harness;
    await rerender({ size: NeonSize.Large });
    expect(html()).toMatch('neon-tabs--l');
  });

  it('renders default color', () => {
    const { html } = harness;
    expect(html()).toMatch('neon-tabs--primary');
  });

  it('renders color', async () => {
    const { html, rerender } = harness;
    await rerender({ color: NeonFunctionalColor.Brand });
    expect(html()).toMatch('neon-tabs--brand');
  });

  it('renders default underline', () => {
    const { html } = harness;
    expect(html()).toMatch('neon-tabs__menu-items--underlined');
  });

  it('renders underline false', async () => {
    const { html, rerender } = harness;
    await rerender({ underline: false });
    expect(html()).not.toMatch('neon-tabs__menu-items--underlined');
  });

  it('renders aria-controls', async () => {
    const { html, rerender } = harness;
    await rerender({ underline: false });
    expect(html()).toMatch('aria-controls="tab2"');
  });

  it('renders id', () => {
    const { html } = harness;
    expect(html()).toMatch(`id="${modelValue}Button"`);
  });

  it('renders button container id', () => {
    const { html } = harness;
    expect(html()).toMatch(`id="${modelValue}ButtonContainer"`);
  });

  it('renders tabindex selected', () => {
    const { html } = harness;
    expect(html()).toMatch(
      '<a class="neon-link--no-style neon-link--outline-none neon-link neon-tabs__menu-item--selected neon-tabs__menu-item neon-tabs__menu-item--selected neon-tabs__menu-item" tabindex="-1" id="tab2Button" aria-controls="tab2" aria-selected="true" role="tab">',
    );
    expect(html()).toMatch('<div id="tab2ButtonContainer" tabindex="0" class="neon-tabs__menu-item-container">');
  });

  it('renders tabindex unselected', () => {
    const { html } = harness;
    expect(html()).toMatch(
      '<a class="neon-link--no-style neon-link--outline-none neon-link neon-tabs__menu-item neon-tabs__menu-item" tabindex="-1" id="tab1Button" aria-controls="tab1" aria-selected="false" role="tab">',
    );
    expect(html()).toMatch('<div id="tab1ButtonContainer" tabindex="-1" class="neon-tabs__menu-item-container">');
  });

  it('renders tab label', () => {
    const { getByText } = harness;
    getByText(tabs[0].label);
  });

  it('renders tab icon', () => {
    const { html } = harness;
    expect(html()).toMatch('neon-tabs__menu-icon');
  });

  it('renders tab icon selected', () => {
    const { html } = harness;
    expect(html()).toMatch(
      '<a class="neon-link--no-style neon-link--outline-none neon-link neon-tabs__menu-item--selected neon-tabs__menu-item neon-tabs__menu-item--selected neon-tabs__menu-item" tabindex="-1" id="tab2Button" aria-controls="tab2" aria-selected="true" role="tab">',
    );
  });

  it('click tab emits event', async () => {
    const { emitted, getByText } = harness;
    await fireEvent.click(getByText(tabs[0].label));
    expect(emitted()['update:modelValue']).toEqual([[tabs[0].key]]);
  });

  it('click selected tab emits no event', async () => {
    const { emitted, getByText } = harness;
    await fireEvent.click(getByText(tabs[1].label));
    expect(emitted()['update:modelValue']).toBeUndefined();
  });

  it('key left goes to previous tab', async () => {
    const { emitted, getByText } = harness;
    await fireEvent.keyDown(getByText(tabs[1].label), { key: 'Left', code: 'Left' });
    expect(emitted()['update:modelValue']).toEqual([[tabs[0].key]]);
  });

  it('key left wraps to last tab', async () => {
    const { emitted, getByText } = harness;
    await fireEvent.keyDown(getByText(tabs[0].label), { key: 'Left', code: 'Left' });
    expect(emitted()['update:modelValue']).toEqual([[tabs[tabs.length - 1].key]]);
  });

  it('key right goes to next tab', async () => {
    const { emitted, getByText } = harness;
    await fireEvent.keyDown(getByText(tabs[1].label), { key: 'Right', code: 'Right' });
    expect(emitted()['update:modelValue']).toEqual([[tabs[2].key]]);
  });

  it('key right wraps to first tab', async () => {
    const { emitted, getByText } = harness;
    await fireEvent.keyDown(getByText(tabs[2].label), { key: 'Right', code: 'Right' });
    expect(emitted()['update:modelValue']).toEqual([[tabs[0].key]]);
  });

  it('renders full width mobile by default', () => {
    const { container } = harness;
    expect(container.querySelector('.neon-tabs__menu-items--full-width-mobile')).toBeDefined();
  });

  it('renders non full width mobile', async () => {
    const { container, rerender } = harness;
    await rerender({ fullWidthMobile: false });
    expect(container.querySelector('.neon-tabs__menu-items--full-width-mobile')).toBeNull();
  });
});
