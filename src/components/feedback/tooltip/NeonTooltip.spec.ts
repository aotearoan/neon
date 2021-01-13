import { mount } from '@vue/test-utils';
import NeonTooltip from './NeonTooltip.vue';
import NeonTooltipClass from './NeonTooltip';
import { NeonPlacement } from '../../../common/enums/NeonPlacement';
import { NeonTooltipStyle } from '../../../common/enums/NeonTooltipStyle';
import { NeonOutlineStyle } from '../../../common/enums/NeonOutlineStyle';
import { NeonFunctionalColor } from '../../../common/enums/NeonFunctionalColor';
import { NeonTooltipPlacementUtils } from '../../../common/utils/NeonTooltipPlacementUtils';

describe('NeonTooltip', () => {
  it('renders content slot', () => {
    // given
    const slotValue = 'lol';
    const wrapper = mount(NeonTooltip, {
      propsData: {},
      slots: {
        content: `<p>${slotValue}</p>`,
      },
    });
    // when / then
    expect(wrapper.find('.neon-tooltip__content-wrapper p').text()).toEqual(slotValue);
  });

  it('renders target slot', () => {
    // given
    const slotValue = 'lol';
    const wrapper = mount(NeonTooltip, {
      propsData: {},
      slots: {
        target: `<p>${slotValue}</p>`,
      },
    });
    // when / then
    expect(wrapper.find('.neon-tooltip > p').text()).toEqual(slotValue);
  });

  it('renders id', () => {
    // given
    const id = 'lol';
    const wrapper = mount(NeonTooltip, {
      propsData: { id },
      slots: {
        content: `<p>content</p>`,
        target: `<p>click me</p>`,
      },
    });
    // when / then
    expect(wrapper.find('.neon-tooltip__content').attributes().id).toEqual(id);
    expect(wrapper.find('.neon-tooltip').attributes()['aria-describedby']).toEqual(id);
  });

  it('renders default placement', () => {
    // given
    const wrapper = mount(NeonTooltip, {
      propsData: {},
      slots: {
        content: `<p>content</p>`,
        target: `<p>click me</p>`,
      },
    });
    // when / then
    expect(wrapper.find('.neon-tooltip--top').element).toBeDefined();
  });

  it('renders placement', () => {
    // given
    const wrapper = mount(NeonTooltip, {
      propsData: { placement: NeonPlacement.Bottom },
      slots: {
        content: `<p>content</p>`,
        target: `<p>click me</p>`,
      },
    });
    // when / then
    expect(wrapper.find('.neon-tooltip--bottom').element).toBeDefined();
  });

  it('renders default style', () => {
    // given
    const wrapper = mount(NeonTooltip, {
      propsData: {},
      slots: {
        content: `<p>content</p>`,
        target: `<p>click me</p>`,
      },
    });
    // when / then
    expect(wrapper.find('.neon-tooltip--tooltip').element).toBeDefined();
  });

  it('renders style', () => {
    // given
    const wrapper = mount(NeonTooltip, {
      propsData: { tooltipStyle: NeonTooltipStyle.Popover },
      slots: {
        content: `<p>content</p>`,
        target: `<p>click me</p>`,
      },
    });
    // when / then
    expect(wrapper.find('.neon-tooltip--popover').element).toBeDefined();
  });

  it('does not render arrow overlay when tooltip style', () => {
    // given
    const wrapper = mount(NeonTooltip, {
      propsData: {},
      slots: {
        content: `<p>content</p>`,
        target: `<p>click me</p>`,
      },
    });
    // when / then
    expect(wrapper.find('.neon-tooltip__arrow-overlay').element).toBeUndefined();
  });

  it('renders arrow overlay when popover style', () => {
    // given
    const wrapper = mount(NeonTooltip, {
      propsData: { tooltipStyle: NeonTooltipStyle.Popover },
      slots: {
        content: `<p>content</p>`,
        target: `<p>click me</p>`,
      },
    });
    // when / then
    expect(wrapper.find('.neon-tooltip__arrow-overlay').element).toBeDefined();
  });

  it('renders default outline style', () => {
    // given
    const wrapper = mount(NeonTooltip, {
      propsData: {},
      slots: {
        content: `<p>content</p>`,
        target: `<p>click me</p>`,
      },
    });
    // when / then
    expect(wrapper.find('.neon-tooltip--outline-text').element).toBeDefined();
  });

  it('renders outline style', () => {
    // given
    const wrapper = mount(NeonTooltip, {
      propsData: { outlineStyle: NeonOutlineStyle.Border },
      slots: {
        content: `<p>content</p>`,
        target: `<p>click me</p>`,
      },
    });
    // when / then
    expect(wrapper.find('.neon-tooltip--outline-border').element).toBeDefined();
  });

  it('renders default outline color', () => {
    // given
    const wrapper = mount(NeonTooltip, {
      propsData: {},
      slots: {
        content: `<p>content</p>`,
        target: `<p>click me</p>`,
      },
    });
    // when / then
    expect(wrapper.find('.neon-tooltip--outline-color-primary').element).toBeDefined();
  });

  it('renders outline color', () => {
    // given
    const wrapper = mount(NeonTooltip, {
      propsData: { outlineColor: NeonFunctionalColor.Info },
      slots: {
        content: `<p>content</p>`,
        target: `<p>click me</p>`,
      },
    });
    // when / then
    expect(wrapper.find('.neon-tooltip--outline-color-info').element).toBeDefined();
  });

  it('is closed by default', () => {
    // given
    const wrapper = mount(NeonTooltip, {
      propsData: {},
      slots: {
        content: `<p>content</p>`,
        target: `<p>click me</p>`,
      },
    });
    // when / then
    expect(wrapper.find('.neon-tooltip--open').element).toBeUndefined();
  });

  it('opens tooltip on mouseenter', () => {
    // given
    const wrapper = mount(NeonTooltip, {
      propsData: {},
      slots: {
        content: `<p>content</p>`,
        target: `<p>click me</p>`,
      },
    });
    // when
    wrapper.find('.neon-tooltip').trigger('mouseenter');
    // then
    expect((wrapper.vm as NeonTooltipClass).open).toEqual(true);
  });

  it('opens tooltip on keydown enter', () => {
    // given
    const wrapper = mount(NeonTooltip, {
      propsData: {},
      slots: {
        content: `<p>content</p>`,
        target: `<p>click me</p>`,
      },
    });
    // when
    wrapper.find('.neon-tooltip').trigger('keydown.enter');
    // then
    expect((wrapper.vm as NeonTooltipClass).open).toEqual(true);
  });

  it('closes tooltip on keydown enter when open', () => {
    // given
    const wrapper = mount(NeonTooltip, {
      propsData: {},
      slots: {
        content: `<p>content</p>`,
        target: `<p>click me</p>`,
      },
    });
    // when
    wrapper.find('.neon-tooltip').trigger('keydown.enter');
    wrapper.find('.neon-tooltip').trigger('keydown.enter');
    // then
    expect((wrapper.vm as NeonTooltipClass).open).toEqual(false);
  });

  it('opens tooltip on keydown space', () => {
    // given
    const wrapper = mount(NeonTooltip, {
      propsData: {},
      slots: {
        content: `<p>content</p>`,
        target: `<p>click me</p>`,
      },
    });
    // when
    wrapper.find('.neon-tooltip').trigger('keydown.space');
    // then
    expect((wrapper.vm as NeonTooltipClass).open).toEqual(true);
  });

  it('closes tooltip on keydown space, when open', () => {
    // given
    const wrapper = mount(NeonTooltip, {
      propsData: {},
      slots: {
        content: `<p>content</p>`,
        target: `<p>click me</p>`,
      },
    });
    // when
    wrapper.find('.neon-tooltip').trigger('keydown.space');
    wrapper.find('.neon-tooltip').trigger('keydown.space');
    // then
    expect((wrapper.vm as NeonTooltipClass).open).toEqual(false);
  });

  it('closes tooltip on mouseleave', () => {
    // given
    const wrapper = mount(NeonTooltip, {
      propsData: {},
      slots: {
        content: `<p>content</p>`,
        target: `<p>click me</p>`,
      },
    });
    // when
    wrapper.find('.neon-tooltip').trigger('mouseenter');
    wrapper.find('.neon-tooltip').trigger('mouseleave');
    // then
    expect((wrapper.vm as NeonTooltipClass).open).toEqual(false);
  });

  it('closes tooltip on keydown escape', () => {
    // given
    const wrapper = mount(NeonTooltip, {
      propsData: {},
      slots: {
        content: `<p>content</p>`,
        target: `<p>click me</p>`,
      },
    });
    // when
    wrapper.find('.neon-tooltip').trigger('keydown.enter');
    wrapper.find('.neon-tooltip').trigger('keydown.esc');
    // then
    expect((wrapper.vm as NeonTooltipClass).open).toEqual(false);
  });

  it('recalculates placement when open', (done) => {
    // given
    const placementFn = NeonTooltipPlacementUtils.calculatePlacement;
    NeonTooltipPlacementUtils.calculatePlacement = jest.fn();
    const wrapper = mount(NeonTooltip, {
      propsData: {},
      slots: {
        content: `<p>content</p>`,
        target: `<p>click me</p>`,
      },
    });
    // when
    (wrapper.vm as NeonTooltipClass).openTooltip();
    // then
    setTimeout(() => {
      expect(NeonTooltipPlacementUtils.calculatePlacement).toHaveBeenCalled();
      NeonTooltipPlacementUtils.calculatePlacement = placementFn;
      done();
    });
  });
});
