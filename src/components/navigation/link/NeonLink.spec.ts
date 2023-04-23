import type { RenderResult } from '@testing-library/vue';
import { fireEvent, render } from '@testing-library/vue';
import NeonLink from './NeonLink.vue';
import { NeonOutlineStyle } from '@/common/enums/NeonOutlineStyle';
import { router } from '@/../test/unit/test-router';

describe('NeonLink', () => {
  const href = 'http://www.getskeleton.com';
  const props = { href };
  let harness: RenderResult;

  beforeEach(async () => {
    harness = render(NeonLink, {
      props,
      slots: {
        default: '<p>test</p>',
      },
      global: {
        plugins: [router],
      },
    });
  });

  it('renders default slot contents external link', () => {
    const { html } = harness;
    expect(html()).toMatch('<p>test</p>');
  });

  it('renders default slot contents router link', async () => {
    const { html, rerender } = harness;
    await rerender({ href: '/test' });
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
    await rerender({ href: '/test' });
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
    const { container, emitted, rerender } = harness;
    await rerender({ href: '/test' });
    await fireEvent.click(container.querySelector('.neon-link') as HTMLAnchorElement);
    expect(emitted().click).toEqual([[]]);
  });

  it('emits click event on enter keydown', async () => {
    const { container, emitted, rerender } = harness;
    await rerender({ href: '/test' });
    await fireEvent.keyDown(container.querySelector('.neon-link') as HTMLAnchorElement, {
      key: 'Enter',
      code: 'Enter',
    });
    expect(emitted().click).toEqual([[]]);
  });
});
