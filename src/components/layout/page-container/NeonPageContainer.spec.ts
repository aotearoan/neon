import { render } from '@testing-library/vue';
import NeonPageContainer from './NeonPageContainer.vue';

describe('NeonPageContainer', () => {
  it('renders title', () => {
    const title = 'test title';
    const { getByText } = render(NeonPageContainer, {
      props: {
        title,
      },
    });
    getByText(title);
  });

  it('renders without title', () => {
    const { container } = render(NeonPageContainer, {
      props: {},
    });
    expect(container.querySelector('h1')).toBeNull();
  });

  it('renders with sticky buttons', () => {
    const { container } = render(NeonPageContainer, {
      props: {
        title: 'test title',
        stickyButtons: true,
      },
    });
    expect(container.querySelector('.page-container--with-sticky-buttons')).toBeDefined();
  });

  it('renders with nav hidden', () => {
    const { container } = render(NeonPageContainer, {
      props: {
        title: 'test title',
        hideNav: true,
      },
    });
    expect(container.querySelector('.page-container--with-hide-nav')).toBeDefined();
  });
});
