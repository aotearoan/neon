import type { RenderResult } from '@testing-library/vue';
import { fireEvent, render } from '@testing-library/vue';
import NeonImageCarousel from './NeonImageCarousel.vue';
import { router } from '@/../test/unit/test-router';

describe('NeonImageCarousel', () => {
  const images = [
    {
      src: '/images/image-carousel/pic-01.jpg',
      alt: 'Pic 1',
    },
    {
      src: '/images/image-carousel/pic-02.jpg',
      alt: 'Pic 2',
    },
  ];

  let harness: RenderResult;
  let scrollToMock: jest.Mock;

  beforeEach(() => {
    scrollToMock = jest.fn();
    HTMLUListElement.prototype.scrollTo = scrollToMock;

    harness = render(NeonImageCarousel, {
      props: { images },
      global: {
        plugins: [router],
      },
    });
  });

  it(`renders carousel`, () => {
    const { html } = harness;
    expect(html()).toMatchSnapshot();
  });

  it(`renders carousel without label`, async () => {
    const { html, rerender } = harness;
    await rerender({ hideLabel: true });
    expect(html()).toMatchSnapshot();
  });

  it(`renders previous disabled when first element`, () => {
    const { getByTitle } = harness;
    expect((getByTitle('Previous') as HTMLButtonElement).disabled).toEqual(true);
    expect((getByTitle('Next') as HTMLButtonElement).disabled).toEqual(false);
  });

  it(`renders next disabled when last element`, async () => {
    const { getByTitle } = harness;
    await fireEvent.click(getByTitle('Next'));
    expect((getByTitle('Previous') as HTMLButtonElement).disabled).toEqual(false);
    expect((getByTitle('Next') as HTMLButtonElement).disabled).toEqual(true);
  });

  it(`updates image styles when next is clicked`, async () => {
    const { container, getByTitle } = harness;
    // check image item styles
    expect(container.querySelectorAll('.neon-image-carousel__item')[0].className).toMatch(
      'neon-image-carousel__item--active',
    );
    expect(container.querySelectorAll('.neon-image-carousel__item')[1].className).not.toMatch(
      'neon-image-carousel__item--active',
    );

    await fireEvent.click(getByTitle('Next'));

    // check image item styles
    expect(container.querySelectorAll('.neon-image-carousel__item')[0].className).not.toMatch(
      'neon-image-carousel__item--active',
    );
    expect(container.querySelectorAll('.neon-image-carousel__item')[1].className).toMatch(
      'neon-image-carousel__item--active',
    );
  });

  it(`updates nav styles when next is clicked`, async () => {
    const { container, getByTitle } = harness;
    // check nav buttons
    expect(container.querySelectorAll('.neon-image-carousel__nav-item')[0].className).toMatch(
      'neon-image-carousel__nav-item--active',
    );
    expect(container.querySelectorAll('.neon-image-carousel__nav-item')[1].className).not.toMatch(
      'neon-image-carousel__nav-item--active',
    );

    await fireEvent.click(getByTitle('Next'));

    // check nav buttons
    expect(container.querySelectorAll('.neon-image-carousel__nav-item')[0].className).not.toMatch(
      'neon-image-carousel__nav-item--active',
    );
    expect(container.querySelectorAll('.neon-image-carousel__nav-item')[1].className).toMatch(
      'neon-image-carousel__nav-item--active',
    );
  });

  it(`checks image styles when previous is clicked`, async () => {
    const { container, getByTitle } = harness;
    await fireEvent.click(getByTitle('Next'));
    await fireEvent.click(getByTitle('Previous'));

    // check image styles
    expect(container.querySelectorAll('.neon-image-carousel__item')[0].className).toMatch(
      'neon-image-carousel__item--active',
    );
    expect(container.querySelectorAll('.neon-image-carousel__item')[1].className).not.toMatch(
      'neon-image-carousel__item--active',
    );
  });

  it(`checks nav styles when previous is clicked`, async () => {
    const { container, getByTitle } = harness;
    await fireEvent.click(getByTitle('Next'));
    await fireEvent.click(getByTitle('Previous'));

    // check nav buttons
    expect(container.querySelectorAll('.neon-image-carousel__nav-item')[0].className).toMatch(
      'neon-image-carousel__nav-item--active',
    );
    expect(container.querySelectorAll('.neon-image-carousel__nav-item')[1].className).not.toMatch(
      'neon-image-carousel__nav-item--active',
    );
  });

  it(`navigates to image when a nav button is clicked`, async () => {
    const { container } = harness;

    await fireEvent.click(container.querySelectorAll('.neon-image-carousel__nav-item')[1]);

    // check image styles
    expect(container.querySelectorAll('.neon-image-carousel__item')[0].className).not.toMatch(
      'neon-image-carousel__item--active',
    );
    expect(container.querySelectorAll('.neon-image-carousel__item')[1].className).toMatch(
      'neon-image-carousel__item--active',
    );

    // check nav buttons
    expect(container.querySelectorAll('.neon-image-carousel__nav-item')[0].className).not.toMatch(
      'neon-image-carousel__nav-item--active',
    );
    expect(container.querySelectorAll('.neon-image-carousel__nav-item')[1].className).toMatch(
      'neon-image-carousel__nav-item--active',
    );
  });

  it('emits current-image event', async () => {
    const { emitted, getByTitle } = harness;
    await fireEvent.click(getByTitle('Next'));
    expect(emitted()['current-image']).toEqual([[1]]);
  });

  it('expanded when clicking on the image', async () => {
    const { container } = harness;
    await fireEvent.click(container.querySelectorAll<HTMLImageElement>('.neon-image-carousel__image')[0]);
    expect(container.querySelector('.neon-image-carousel--expanded'));
  });

  it('closes when clicking the close button', async () => {
    const { container, getByTitle } = harness;
    await fireEvent.click(container.querySelectorAll<HTMLImageElement>('.neon-image-carousel__image')[0]);
    await fireEvent.click(getByTitle('Close'));
    expect(container.querySelector('.neon-image-carousel--expanded')).toBeNull();
  });

  it('overrides close button title', async () => {
    const { container, getByTitle, rerender } = harness;
    await rerender({ closeLabel: 'Close me' });
    await fireEvent.click(container.querySelectorAll<HTMLImageElement>('.neon-image-carousel__image')[0]);
    await fireEvent.click(getByTitle('Close me'));
    expect(container.querySelector('.neon-image-carousel--expanded')).toBeNull();
  });

  it('emits update:expanded events', async () => {
    const { container, emitted, getByTitle } = harness;
    await fireEvent.click(container.querySelectorAll<HTMLImageElement>('.neon-image-carousel__image')[0]);
    await fireEvent.click(getByTitle('Close'));

    expect(emitted()['update:expanded']).toEqual([[true], [false]]);
  });
});
