import NeonDraggableCard from './NeonDraggableCard.vue';
import { fireEvent, render } from '@testing-library/vue';
import { NeonFunctionalColor } from '@/model/common/color/NeonFunctionalColor';

describe('NeonDraggableCard', () => {
  const factory = (index = 0, dragIndex?: number, draggable = true) => {
    return render(NeonDraggableCard, {
      props: {
        index,
        draggable,
        color: NeonFunctionalColor.Primary,
        dragIndex,
      },
    });
  };

  it('renders the component draggable = true', () => {
    const { html } = factory();
    expect(html()).toMatchSnapshot();
  });

  it('renders the component draggable = false', () => {
    const { html } = factory(0, undefined, false);
    expect(html()).toMatchSnapshot();
  });

  it('emits on-drag start', async () => {
    const { container, emitted } = factory();
    await fireEvent.dragStart(container.querySelector<HTMLDivElement>('.neon-draggable-card') as HTMLDivElement);
    expect(emitted()['on-drag']).toEqual([[0]]);
  });

  it('emits on-drag end', async () => {
    const { container, emitted } = factory();
    await fireEvent.dragEnd(container.querySelector<HTMLDivElement>('.neon-draggable-card') as HTMLDivElement);
    expect(emitted()['on-drag']).toEqual([[undefined]]);
  });

  it('emits drop event', async () => {
    const { container, emitted } = factory(2, 5);
    await fireEvent.drop(container.querySelector<HTMLDivElement>('.neon-draggable-card') as HTMLDivElement);
    expect(emitted().drop).toEqual([[5, 2]]);
  });

  it('sets active state', async () => {
    const { container } = factory(2, 5);
    await fireEvent.dragOver(container.querySelector<HTMLDivElement>('.neon-draggable-card') as HTMLDivElement);
    expect(container.querySelector('.neon-draggable-card--active')).toBeDefined();
  });

  it('removes active state', async () => {
    const { container } = factory(2, 5);
    const cardElement = container.querySelector<HTMLDivElement>('.neon-draggable-card') as HTMLDivElement;
    await fireEvent.dragOver(cardElement);
    await fireEvent.dragLeave(cardElement);
    expect(container.querySelector('.neon-draggable-card--active')).toBeNull();
  });
  it('sets drag in progress state', async () => {
    const { container } = factory(2, 5);
    expect(container.querySelector('.neon-draggable-card--drag-in-progress')).toBeDefined();
  });

  it('sets drag in progress state - no drag', async () => {
    const { container } = factory(2);
    expect(container.querySelector('.neon-draggable-card--drag-in-progress')).toBeNull();
  });

  it('renders default slot contents', async () => {
    const { getByText } = render(NeonDraggableCard, {
      props: {
        index: 0,
        draggable: true,
      },
      slots: {
        default: '<p>Test</p>',
      },
    });
    getByText('Test');
  });
});
