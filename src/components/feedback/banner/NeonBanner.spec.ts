import type { RenderResult } from '@testing-library/vue';
import { render } from '@testing-library/vue';
import NeonBanner from './NeonBanner.vue';
import { NeonBannerService } from '@/common/utils/NeonBannerService';
import { nextTick } from 'vue';

describe('NeonBanner', () => {
  let harness: RenderResult;
  let callbackMock: jest.Mock;

  beforeEach(() => {
    harness = render(NeonBanner);
    callbackMock = jest.fn();
  });

  it('matches snapshot', async () => {
    // given
    NeonBannerService.info({ message: 'test message', action: { label: 'dismiss', callback: callbackMock } });
    await nextTick();
    const { html } = harness;
    // then
    expect(html()).toMatchSnapshot();
  });
});
