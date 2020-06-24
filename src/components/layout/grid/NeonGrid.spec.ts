import { mount } from '@vue/test-utils';
import NeonGrid from './NeonGrid.vue';
import { NeonResponsive } from '../../../common/enums/NeonResponsive';

describe('NeonGrid', () => {
  const id = 'grid1';
  const layouts = [
    {
      breakpoint: NeonResponsive.All,
      grid: [['area1']],
    },
  ];

  it('renders default slot contents', () => {
    // given
    const slotValue = 'xd';
    const wrapper = mount(NeonGrid, {
      propsData: { id, layouts },
      slots: {
        default: `<p>${slotValue}</p>`,
      },
    });
    // when / then
    expect(wrapper.find('.neon-grid p').text()).toEqual(slotValue);
  });

  it('generates correct CSS', () => {
    // given
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const wrapper: any = mount(NeonGrid, {
      propsData: { id, layouts },
    });
    // when
    const styles = wrapper.vm.generateStyles();
    // then
    expect(styles).toEqual(`@media screen {
  .neon-grid {
    grid-template-areas: "area1";
  }

  .area1 {
    grid-area: area1;
  }
}`);
  });
});
