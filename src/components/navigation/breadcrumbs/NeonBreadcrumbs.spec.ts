import { render } from '@testing-library/vue';
import NeonBreadcrumbs from './NeonBreadcrumbs.vue';
import { router } from '../../../../test/unit/test-router';
import { breadcrumbsFixture } from '@/fixtures/navigation/breadcrumbs/BreadcrumbsFixture';

describe('NeonBreadcrumbs', () => {
  it('does not render without back button or breadcrumbs', () => {
    const { container } = render(NeonBreadcrumbs, {
      props: { backButton: false },
      global: {
        plugins: [router],
      },
    });
    expect(container.querySelector('.neon-breadcrumbs')).toBeNull();
  });

  it('renders back button by default', () => {
    const { container } = render(NeonBreadcrumbs, {
      global: {
        plugins: [router],
      },
    });
    expect(container.querySelector('.neon-breadcrumbs__back')).toBeDefined();
  });

  it('renders breadcrumbs only', () => {
    const breadcrumbs = breadcrumbsFixture();

    const { container, html } = render(NeonBreadcrumbs, {
      props: {
        breadcrumbs,
        backButton: false,
      },
      global: {
        plugins: [router],
      },
    });
    expect(container.querySelectorAll('.neon-breadcrumbs__link').length).toEqual(breadcrumbs.length);
    expect(html()).toMatchSnapshot();
  });

  it('renders breadcrumbs and back button', () => {
    const breadcrumbs = breadcrumbsFixture();

    const { container, html } = render(NeonBreadcrumbs, {
      props: {
        breadcrumbs,
      },
      global: {
        plugins: [router],
      },
    });
    expect(container.querySelectorAll('.neon-breadcrumbs__link').length).toEqual(breadcrumbs.length);
    expect(html()).toMatchSnapshot();
  });
});
