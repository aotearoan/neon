import type { RenderResult } from '@testing-library/vue';
import { render } from '@testing-library/vue';
import NeonGrid from './NeonGrid.vue';
import { NeonResponsive } from '../../../common/enums/NeonResponsive';

describe('NeonGrid', () => {
  const id = 'grid1';
  const layouts = [
    {
      breakpoint: NeonResponsive.All,
      grid: [['area1', 'area1']],
    },
  ];

  const props = { id, layouts };

  let harness: RenderResult;

  beforeEach(() => {
    harness = render(NeonGrid, {
        props,
        slots: { default: '<p>test</p>' },
      },
    );
  });

  it('renders default slot contents', () => {
    // given
    const { html } = harness;
    // when / then
    expect(html()).toMatch('<p>test</p>');
    expect(html()).toMatch(`id="${id}"`);
  });
});
