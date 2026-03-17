import { render } from '@testing-library/vue';
import NeonHeader from './NeonHeader.vue';
import { router } from '../../../../test/unit/test-router';
import { NeonHeaderLevel } from '@/model/presentation/header/NeonHeaderLevel';
import { breadcrumbsFixture } from '@/fixtures/navigation/breadcrumbs/BreadcrumbsFixture';

describe('NeonHeader', () => {
  it('renders page header by default', () => {
    const { html } = render(NeonHeader, {
      props: {
        title: 'Page title',
        subtitle: 'Page subtitle',
      },
      global: {
        plugins: [router],
      },
    });

    expect(html()).toMatchSnapshot();
  });

  it('renders page header', () => {
    const { html } = render(NeonHeader, {
      props: {
        level: NeonHeaderLevel.Page,
        title: 'Page title',
        subtitle: 'Page subtitle',
      },
      global: {
        plugins: [router],
      },
    });

    expect(html()).toMatchSnapshot();
  });

  it('renders section header', () => {
    const { html } = render(NeonHeader, {
      props: {
        level: NeonHeaderLevel.Section,
        title: 'Page title',
        subtitle: 'Page subtitle',
      },
      global: {
        plugins: [router],
      },
    });

    expect(html()).toMatchSnapshot();
  });

  it('renders sub section header', () => {
    const { html } = render(NeonHeader, {
      props: {
        level: NeonHeaderLevel.SubSection,
        title: 'Page title',
        subtitle: 'Page subtitle',
      },
      global: {
        plugins: [router],
      },
    });

    expect(html()).toMatchSnapshot();
  });

  it('renders labels slot content', () => {
    const slotText = 'Labels slot content';
    const { getByText } = render(NeonHeader, {
      props: {
        title: 'Page title',
        subtitle: 'Page subtitle',
      },
      global: {
        plugins: [router],
      },
      slots: {
        labels: `<p>${slotText}</p>`,
      },
    });

    getByText(slotText);
  });

  it('renders actions slot content', () => {
    const slotText = 'Actions slot content';
    const { getByText } = render(NeonHeader, {
      props: {
        title: 'Page title',
        subtitle: 'Page subtitle',
      },
      global: {
        plugins: [router],
      },
      slots: {
        actions: `<p>${slotText}</p>`,
      },
    });

    getByText(slotText);
  });

  it('renders breadcrumb', () => {
    const backLabel = 'Zurück';
    const { getByText, html } = render(NeonHeader, {
      props: {
        title: 'Page title',
        backButton: true,
        backLabel,
        breadcrumbs: breadcrumbsFixture(),
      },
      global: {
        plugins: [router],
      },
    });

    getByText(backLabel);
    expect(html()).toMatchSnapshot();
  });
});
