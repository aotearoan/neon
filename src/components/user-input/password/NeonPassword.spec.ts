import type { RenderResult } from '@testing-library/vue';
import { fireEvent, render } from '@testing-library/vue';
import NeonPassword from './NeonPassword.vue';
import { NeonInputType } from '../../../common/enums/NeonInputType';

describe('NeonPassword', () => {
  const modelValue = '123456';
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(NeonPassword, { props: { modelValue } });
  });

  it('renders type as password by default', () => {
    const { container } = harness;
    expect(container.querySelector('input')?.getAttribute('type')).toEqual(NeonInputType.Password);
  });

  it('emits icon-clicked', async () => {
    // given
    const { container, emitted } = harness;
    // when
    await fireEvent.click(container.querySelector('.neon-icon') as HTMLElement);
    // then
    expect(emitted()['icon-click'][0]).toBeDefined();
  });
});
