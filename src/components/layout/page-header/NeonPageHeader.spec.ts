import NeonPageHeader from './NeonPageHeader.vue';
import { render } from '@testing-library/vue';
import { NeonFunctionalColor } from '@/model/common/color/NeonFunctionalColor';

describe('NeonPageHeader', () => {
  it('renders NeonPageHeader', () => {
    const { html } = render(NeonPageHeader, {
      props: {
        title: 'Title',
        note: {
          title: 'Note',
          color: NeonFunctionalColor.Brand,
          description: 'Description',
        },
      },
      slots: {
        subtitle: '<span>Subtitle</span>',
        actions: '<span>Do something</span>',
      },
    });
    expect(html()).toMatchSnapshot();
  });
});
