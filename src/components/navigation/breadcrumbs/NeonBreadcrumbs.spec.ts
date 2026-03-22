import { render } from '@testing-library/vue';
import NeonBreadcrumbs from './NeonBreadcrumbs.vue';
import { router } from '../../../../test/unit/test-router';
import { breadcrumbsFixture, breadcrumbsTextOnlyFixture } from '@/fixtures/navigation/breadcrumbs/BreadcrumbsFixture';
import { NeonBreadcrumbResponsiveStyle } from '@/model/navigation/breadcrumbs/NeonBreadcrumbResponsiveStyle';

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

  it('renders a breadcrumb with text only, no link', () => {
    const breadcrumbs = breadcrumbsTextOnlyFixture();

    const { container, html } = render(NeonBreadcrumbs, {
      props: {
        breadcrumbs,
      },
      global: {
        plugins: [router],
      },
    });
    expect(container.querySelectorAll('.neon-breadcrumbs__link').length).toEqual(breadcrumbs.length - 1);
    expect(html()).toMatchSnapshot();
  });

  it('renders default responsive style', () => {
    const breadcrumbs = breadcrumbsFixture();

    const { container } = render(NeonBreadcrumbs, {
      props: {
        breadcrumbs,
      },
      global: {
        plugins: [router],
      },
    });
    expect(container.querySelector('.neon-breadcrumbs--responsive-swiper')).toBeDefined();
  });

  it('renders default responsive style', () => {
    const breadcrumbs = breadcrumbsFixture();

    const { container } = render(NeonBreadcrumbs, {
      props: {
        breadcrumbs,
        responsiveStyle: NeonBreadcrumbResponsiveStyle.BackOnly,
      },
      global: {
        plugins: [router],
      },
    });
    expect(container.querySelector('.neon-breadcrumbs--responsive-back-only')).toBeDefined();
  });
});
