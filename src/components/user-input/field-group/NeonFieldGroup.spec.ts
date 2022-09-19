import { render } from '@testing-library/vue';
import NeonFieldGroup from './NeonFieldGroup.vue';

describe('NeonFieldGroup', () => {
  it('renders default slot', () => {
    // given
    const content = 'xdd';
    const { container } = render(NeonFieldGroup, {
      props: {},
      slots: { default: `<p>${content}</p>` },
    });
    // when / then
    expect(container.querySelector('.neon-field-group p')?.textContent).toEqual(content);
  });
});
