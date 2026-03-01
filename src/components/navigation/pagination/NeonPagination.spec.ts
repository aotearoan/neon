import NeonPagination from './NeonPagination.vue';
import { render } from '@testing-library/vue';
import type { Mock } from 'jest-mock';
import { useRoute } from 'vue-router';
import { router } from '../../../../test/unit/test-router';

jest.mock('vue-router', () => ({
  ...jest.requireActual('vue-router'),
  useRoute: jest.fn(),
}));

describe('NeonPagination', () => {
  const urlTemplate = 'https://example.com/?pageSize=20&page={page}';

  const props = {
    page: 5,
    urlTemplate,
    total: 200,
    pageSize: 20,
    displayFirstAndLast: true,
  };

  const singlePageData = {
    page: 1,
    total: 20,
    pageSize: 20,
    displayFirstAndLast: true,
    urlTemplate,
  };

  beforeEach(() => {
    (useRoute as Mock).mockImplementation(() => {
      return {
        fullPath: '/test',
      };
    });
  });

  it('does not add empty class', () => {
    // given
    const { container } = render(NeonPagination, { props, global: { plugins: [router] } });
    // then
    expect(container.querySelector('.neon-pagination--empty')).toBeNull();
  });

  it('add empty class', () => {
    // given
    const { container } = render(NeonPagination, { props: singlePageData, global: { plugins: [router] } });
    // then
    expect(container.querySelector('.neon-pagination--empty')).toBeDefined();
  });

  it('renders correct urls', () => {
    // given
    const { container } = render(NeonPagination, { props, global: { plugins: [router] } });
    const linkElement = container.querySelectorAll<HTMLAnchorElement>('.neon-pagination__link')[0];
    // then
    expect(linkElement.href).toEqual('https://example.com/?pageSize=20&page=1');
  });

  it('shows first and last buttons', () => {
    // given
    const { container } = render(NeonPagination, { props, global: { plugins: [router] } });
    // then
    expect(container.querySelector('.neon-pagination__first')).toBeDefined();
    expect(container.querySelector('.neon-pagination__last')).toBeDefined();
  });

  it('hides first and last buttons', async () => {
    // given
    const { container, rerender } = render(NeonPagination, { props, global: { plugins: [router] } });
    // when
    await rerender({ displayFirstAndLast: false });
    // then
    expect(container.querySelector('.neon-pagination__first')).toBeNull();
    expect(container.querySelector('.neon-pagination__last')).toBeNull();
  });

  it('fewer than 5 pages', () => {
    // given
    const { container, getByText } = render(NeonPagination, {
      props: {
        page: 2,
        total: 60,
        pageSize: 20,
        displayFirstAndLast: true,
        urlTemplate,
      },
      global: { plugins: [router] },
    });
    // then
    getByText('1');
    getByText('2');
    getByText('3');
    expect(container.querySelector('.neon-pagination__less')).toBeNull();
    expect(container.querySelector('.neon-pagination__link--selected')?.textContent).toEqual('2');
    expect(container.querySelector('.neon-pagination__more')).toBeNull();
  });

  it('first page - 1, 2, 3, ..., 10', () => {
    // given
    const { container, getByText } = render(NeonPagination, {
      props: {
        page: 1,
        total: 200,
        pageSize: 20,
        urlTemplate,
      },
      global: { plugins: [router] },
    });
    // then
    getByText('1');
    getByText('2');
    getByText('3');
    getByText('10');
    expect(container.querySelector('.neon-pagination__less')).toBeNull();
    expect(container.querySelector('.neon-pagination__link--selected')?.textContent).toEqual('1');
    expect(container.querySelector('.neon-pagination__more')).toBeDefined();
  });

  it('second page - 1, 2, 3, ..., 10', () => {
    // given
    const { container, getByText } = render(NeonPagination, {
      props: {
        page: 2,
        total: 200,
        pageSize: 20,
        urlTemplate,
      },
      global: { plugins: [router] },
    });
    // then
    getByText('1');
    getByText('2');
    getByText('3');
    getByText('10');
    expect(container.querySelector('.neon-pagination__less')).toBeNull();
    expect(container.querySelector('.neon-pagination__link--selected')?.textContent).toEqual('2');
    expect(container.querySelector('.neon-pagination__more')).toBeDefined();
  });

  it('third page - 1, 2, 3, 4, ..., 10', () => {
    // given
    const { container, getByText } = render(NeonPagination, {
      props: {
        page: 3,
        total: 200,
        pageSize: 20,
        urlTemplate,
      },
      global: { plugins: [router] },
    });
    // then
    getByText('1');
    getByText('2');
    getByText('3');
    getByText('4');
    getByText('10');
    expect(container.querySelector('.neon-pagination__less')).toBeNull();
    expect(container.querySelector('.neon-pagination__link--selected')?.textContent).toEqual('3');
    expect(container.querySelector('.neon-pagination__more')).toBeDefined();
  });

  it('fourth page - 1, 2, 3, 4, 5, ..., 10', () => {
    // given
    const { container, getByText } = render(NeonPagination, {
      props: {
        page: 4,
        total: 200,
        pageSize: 20,
        urlTemplate,
      },
      global: { plugins: [router] },
    });
    // then
    getByText('1');
    getByText('2');
    getByText('3');
    getByText('4');
    getByText('5');
    getByText('10');
    expect(container.querySelector('.neon-pagination__less')).toBeNull();
    expect(container.querySelector('.neon-pagination__link--selected')?.textContent).toEqual('4');
    expect(container.querySelector('.neon-pagination__more')).toBeDefined();
  });

  it('fifth page - 1, ..., 4, 5, 6, ..., 10', () => {
    // given
    const { container, getByText } = render(NeonPagination, {
      props: {
        page: 5,
        total: 200,
        pageSize: 20,
        urlTemplate,
      },
      global: { plugins: [router] },
    });
    // then
    getByText('1');
    getByText('4');
    getByText('5');
    getByText('6');
    getByText('10');
    expect(container.querySelector('.neon-pagination__less')).toBeDefined();
    expect(container.querySelector('.neon-pagination__link--selected')?.textContent).toEqual('5');
    expect(container.querySelector('.neon-pagination__more')).toBeDefined();
  });

  it('sixth page - 1, ..., 5, 6, 7, ..., 10', () => {
    // given
    const { container, getByText } = render(NeonPagination, {
      props: {
        page: 6,
        total: 200,
        pageSize: 20,
        urlTemplate,
      },
      global: { plugins: [router] },
    });
    // then
    getByText('1');
    getByText('5');
    getByText('6');
    getByText('7');
    getByText('10');
    expect(container.querySelector('.neon-pagination__less')).toBeDefined();
    expect(container.querySelector('.neon-pagination__link--selected')?.textContent).toEqual('6');
    expect(container.querySelector('.neon-pagination__more')).toBeDefined();
  });

  it('seventh page - 1, ..., 6, 7, 8, 9, 10', () => {
    // given
    const { container, getByText } = render(NeonPagination, {
      props: {
        page: 7,
        total: 200,
        pageSize: 20,
        urlTemplate,
      },
      global: { plugins: [router] },
    });
    // then
    getByText('1');
    getByText('6');
    getByText('7');
    getByText('8');
    getByText('9');
    getByText('10');
    expect(container.querySelector('.neon-pagination__less')).toBeDefined();
    expect(container.querySelector('.neon-pagination__link--selected')?.textContent).toEqual('7');
    expect(container.querySelector('.neon-pagination__more')).toBeNull();
  });

  it('eighth page - 1, ..., 7, 8, 9, 10', () => {
    // given
    const { container, getByText } = render(NeonPagination, {
      props: {
        page: 8,
        total: 200,
        pageSize: 20,
        urlTemplate,
      },
      global: { plugins: [router] },
    });
    // then
    getByText('1');
    getByText('7');
    getByText('8');
    getByText('9');
    getByText('10');
    expect(container.querySelector('.neon-pagination__less')).toBeDefined();
    expect(container.querySelector('.neon-pagination__link--selected')?.textContent).toEqual('8');
    expect(container.querySelector('.neon-pagination__more')).toBeNull();
  });

  it('ninth page - 1, ..., 8, 9, 10', () => {
    // given
    const { container, getByText } = render(NeonPagination, {
      props: {
        page: 9,
        total: 200,
        pageSize: 20,
        urlTemplate,
      },
      global: { plugins: [router] },
    });
    // then
    getByText('1');
    getByText('8');
    getByText('9');
    getByText('10');
    expect(container.querySelector('.neon-pagination__less')).toBeDefined();
    expect(container.querySelector('.neon-pagination__link--selected')?.textContent).toEqual('9');
    expect(container.querySelector('.neon-pagination__more')).toBeNull();
  });

  it('tenth page - 1, ..., 8, 9, 10', () => {
    // given
    const { container, getByText } = render(NeonPagination, {
      props: {
        page: 10,
        total: 200,
        pageSize: 20,
        urlTemplate,
      },
      global: { plugins: [router] },
    });
    // then
    getByText('1');
    getByText('8');
    getByText('9');
    getByText('10');
    expect(container.querySelector('.neon-pagination__less')).toBeDefined();
    expect(container.querySelector('.neon-pagination__link--selected')?.textContent).toEqual('10');
    expect(container.querySelector('.neon-pagination__more')).toBeNull();
  });

  it('disabled left hand buttons', () => {
    // given
    const { container } = render(NeonPagination, {
      props: {
        page: 1,
        total: 200,
        pageSize: 20,
        displayFirstAndLast: true,
        urlTemplate,
      },
      global: { stubs: ['neon-link'] },
    });
    // then
    expect(container.querySelector<HTMLButtonElement>('.neon-pagination__first')?.disabled).toBeTruthy();
    expect(container.querySelector<HTMLButtonElement>('.neon-pagination__previous')?.disabled).toBeTruthy();
    expect(container.querySelector<HTMLButtonElement>('.neon-pagination__next')?.disabled).toBeFalsy();
    expect(container.querySelector<HTMLButtonElement>('.neon-pagination__last')?.disabled).toBeFalsy();
  });

  it('disabled right hand buttons', () => {
    // given
    const { container } = render(NeonPagination, {
      props: {
        page: 10,
        total: 200,
        pageSize: 20,
        displayFirstAndLast: true,
        urlTemplate,
      },
      global: { stubs: ['neon-link'] },
    });
    // then
    expect(container.querySelector<HTMLButtonElement>('.neon-pagination__first')?.disabled).toBeFalsy();
    expect(container.querySelector<HTMLButtonElement>('.neon-pagination__previous')?.disabled).toBeFalsy();
    expect(container.querySelector<HTMLButtonElement>('.neon-pagination__next')?.disabled).toBeTruthy();
    expect(container.querySelector<HTMLButtonElement>('.neon-pagination__last')?.disabled).toBeTruthy();
  });
});
