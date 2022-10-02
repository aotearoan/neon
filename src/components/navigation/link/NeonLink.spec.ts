import type { RenderResult } from '@testing-library/vue';
import { fireEvent, render } from '@testing-library/vue';
import NeonLink from './NeonLink.vue';
import { NeonOutlineStyle } from '@/common/enums/NeonOutlineStyle';
import { RouterLinkStub } from '@vue/test-utils';

describe('NeonLink', () => {
  const href = 'http://www.getskeleton.com';
  const props = { href };
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(NeonLink, {
      props,
      slots: {
        default: '<p>test</p>',
      },
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
    });
  });

  it('renders default slot contents external link', () => {
    const { html } = harness;
    expect(html()).toMatch('<p>test</p>');
  });

  it('renders default slot contents router link', async () => {
    const { html, rerender } = harness;
    await rerender({ href: '/xdd' });
    expect(html()).toMatch('<p>test</p>');
  });

  it('renders external link with indicator', async () => {
    const { html, rerender } = harness;
    await rerender({ ...props, externalIndicator: true });
    const result = html();
    expect(result).toMatch('neon-link--external-link');
    expect(result).toMatch('neon-link--with-external-indicator');
  });

  it('renders external link without indicator', () => {
    const { html } = harness;
    const result = html();
    expect(result).toMatch('neon-link--external-link');
    expect(result).not.toMatch('neon-link--with-external-indicator');
  });

  it('renders router link', async () => {
    const { html, rerender } = harness;
    await rerender({ href: '/xdd' });
    const result = html();
    expect(result).toMatch('neon-link--router-link');
  });

  it('renders no style class', async () => {
    const { html, rerender } = harness;
    await rerender({ ...props, noStyle: true });
    const result = html();
    expect(result).toMatch('neon-link--no-style');
  });

  it('renders default outline style', () => {
    const { html } = harness;
    const result = html();
    expect(result).toMatch('neon-link--outline-text');
  });

  it('renders provided outline style', async () => {
    const { html, rerender } = harness;
    await rerender({ ...props, outlineStyle: NeonOutlineStyle.Border });
    const result = html();
    expect(result).toMatch('neon-link--outline-border');
  });

  it('emits click event', async () => {
    const { emitted, getByTestId, rerender } = harness;
    await rerender({ href: '/xdd' });
    await fireEvent.click(getByTestId('link'));
    expect(emitted().click).toEqual([[]]);
  });

  it('emits click event on enter keydown', async () => {
    const { emitted, getByTestId, rerender } = harness;
    await rerender({ href: '/xdd' });
    await fireEvent.keyDown(getByTestId('link'), { key: 'Enter', code: 'Enter' });
    expect(emitted().click).toEqual([[]]);
  });
});
