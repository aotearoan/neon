import { render } from '@testing-library/vue';
import NeonBasicLayout from './NeonBasicLayout.vue';

describe('NeonBasicLayout', () => {
  it('renders title', () => {
    const title = 'test title';
    const { getByText } = render(NeonBasicLayout, {
      props: {
        title,
      },
    });
    getByText(title);
  });

  it('renders with subtitle', () => {
    const subtitle = 'test subtitle';
    const { getByText } = render(NeonBasicLayout, {
      props: { title: 'test title', subtitle },
    });
    getByText(subtitle);
  });

  it('renders with sticky buttons', () => {
    const { container } = render(NeonBasicLayout, {
      props: {
        title: 'test title',
        stickyButtons: true,
      },
    });
    expect(container.querySelector('.neon-basic-layout--with-sticky-buttons')).toBeDefined();
  });

  it('renders with a header when the named header slot is used', () => {
    const { container } = render(NeonBasicLayout, {
      slots: {
        header: '<p>test title</p>',
      },
    });
    expect(container.querySelector('.neon-header')).toBeDefined();
  });

  it('renders with a header when the named actions slot is used', () => {
    const { container } = render(NeonBasicLayout, {
      slots: {
        actions: '<p>test title</p>',
      },
    });
    expect(container.querySelector('.neon-header')).toBeDefined();
  });

  it('renders with subtitle slot', () => {
    const { container, getByText } = render(NeonBasicLayout, {
      props: {
        title: 'test title',
      },
      slots: {
        subtitle: '<p>test subtitle</p>',
      },
    });
    expect(container.querySelector('.neon-header')).toBeDefined();
    getByText('test subtitle');
  });

  it('renders labels slot', () => {
    const { container, getByText } = render(NeonBasicLayout, {
      props: {
        title: 'test title',
      },
      slots: {
        title: 'test title',
        labels: '<p>labels</p>',
      },
    });
    expect(container.querySelector('.neon-header')).toBeDefined();
    getByText('labels');
  });

  it('renders banner slot', () => {
    const { getByText } = render(NeonBasicLayout, {
      slots: {
        banner: '<p>banner</p>',
      },
    });
    getByText('banner');
  });

  it('does not render with a header when the named header slot, title and actions are missing', () => {
    const { container } = render(NeonBasicLayout);
    expect(container.querySelector('.neon-header')).toBeNull();
  });
});
