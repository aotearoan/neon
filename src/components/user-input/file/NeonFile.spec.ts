import Vue from 'vue';
import { mount } from '@vue/test-utils';
import NeonButton from '../../user-input/button/NeonButton.vue';
import NeonIcon from '../../presentation/icon/NeonIcon.vue';
import NeonInput from '../input/NeonInput.vue';
import NeonFile from './NeonFile.vue';
import NeonFileClass from './NeonFile';
import NeonList from '../list/NeonList.vue';
import { NeonFunctionalColor } from '../../../common/enums/NeonFunctionalColor';
import { NeonSize } from '../../../common/enums/NeonSize';
import { NeonState } from '../../../common/enums/NeonState';

Vue.component('NeonButton', NeonButton);
Vue.component('NeonIcon', NeonIcon);
Vue.component('NeonInput', NeonInput);
Vue.component('NeonList', NeonList);

describe('NeonFile', () => {
  it('renders default color', () => {
    const wrapper = mount(NeonFile, {
      propsData: {},
    });
    expect(wrapper.find('.neon-file--low-contrast').element).toBeDefined();
  });

  it('renders color', () => {
    const wrapper = mount(NeonFile, {
      propsData: { color: NeonFunctionalColor.Info },
    });
    expect(wrapper.find('.neon-file--info').element).toBeDefined();
  });

  it('renders default size', () => {
    const wrapper = mount(NeonFile, {
      propsData: {},
    });
    expect(wrapper.find('.neon-file--m').element).toBeDefined();
  });

  it('renders size', () => {
    const wrapper = mount(NeonFile, {
      propsData: { size: NeonSize.Small },
    });
    expect(wrapper.find('.neon-file--s').element).toBeDefined();
  });

  it('renders disabled', () => {
    const wrapper = mount(NeonFile, {
      propsData: { disabled: true },
    });
    expect(wrapper.find('.neon-file--disabled').element).toBeDefined();
  });

  it('renders single', () => {
    const wrapper = mount(NeonFile, {
      propsData: {},
    });
    expect(wrapper.find('.neon-file--single').element).toBeDefined();
  });

  it('renders multiple', () => {
    const wrapper = mount(NeonFile, {
      propsData: { multiple: true },
    });
    expect(wrapper.find('.neon-file--single').element).toBeUndefined();
  });

  it('renders directUpload', () => {
    const wrapper = mount(NeonFile, {
      propsData: { directUpload: true },
    });
    expect(wrapper.findAll('.neon-file .neon-file__actions .neon-button').length).toEqual(1);
    expect(wrapper.find('.neon-file .neon-list').element).toBeUndefined();
    expect(wrapper.find('.neon-file--direct-upload').element).toBeDefined();
  });

  it('renders accept', () => {
    const accept = 'application/pdf';
    const wrapper = mount(NeonFile, {
      propsData: { accept },
    });
    expect(wrapper.find('.neon-file__input .neon-input__textfield').attributes().accept).toEqual(accept);
  });

  it('renders button state', () => {
    const wrapper = mount(NeonFile, {
      propsData: { state: NeonState.Loading },
    });
    expect(wrapper.find('.neon-button .neon-icon').element).toBeDefined();
  });

  it('renders button icon', () => {
    const wrapper = mount(NeonFile, {
      propsData: { icon: 'check' },
    });
    expect(wrapper.find('.neon-button .neon-icon').element).toBeDefined();
  });

  it('renders button label', () => {
    const wrapper = mount(NeonFile, {
      propsData: { label: 'xdd' },
    });
    expect(wrapper.find('.neon-button').text()).toEqual('xdd');
  });

  it('calculates correct fileList', () => {
    // given
    const fileName = 'xdd.log';
    const wrapper = mount(NeonFile, {
      propsData: {},
    });
    const vm: NeonFileClass = wrapper.vm as NeonFileClass;
    // when
    vm.files.push(new File([], fileName));
    // then
    expect(vm.fileList).toEqual([{ key: fileName, label: fileName }]);
  });

  it('removes file single', () => {
    // given
    const fileName = 'xdd.log';
    const wrapper = mount(NeonFile, {
      propsData: {},
    });
    const vm: NeonFileClass = wrapper.vm as NeonFileClass;
    // when
    vm.files.push(new File([], fileName));
    vm.remove(fileName);
    // then
    expect(vm.fileList).toEqual([]);
    expect(wrapper.emitted().input[0]).toEqual([undefined]);
  });

  it('removes file multiple', () => {
    // given
    const fileName = 'xdd.log';
    const wrapper = mount(NeonFile, {
      propsData: { multiple: true },
    });
    const vm: NeonFileClass = wrapper.vm as NeonFileClass;
    // when
    vm.files.push(new File([], fileName));
    vm.remove(fileName);
    // then
    expect(vm.fileList).toEqual([]);
    expect(wrapper.emitted().input[0]).toEqual([[]]);
  });

  it('does not remove file when disabled', () => {
    // given
    const fileName = 'xdd.log';
    const wrapper = mount(NeonFile, {
      propsData: { disabled: true },
    });
    const vm: NeonFileClass = wrapper.vm as NeonFileClass;
    // when
    vm.files.push(new File([], fileName));
    vm.remove(fileName);
    // then
    expect(vm.fileList.length).toEqual(1);
    expect(wrapper.emitted().input).toBeUndefined();
  });

  it('emit directUpload clears file list', () => {
    // given
    const fileName = 'xdd.log';
    const wrapper = mount(NeonFile, {
      propsData: { directUpload: true },
    });
    const vm: NeonFileClass = wrapper.vm as NeonFileClass;
    // when
    vm.files.push(new File([], fileName));
    vm.emit();
    // then
    expect(vm.fileList.length).toEqual(0);
  });

  it('extracts files onInput', () => {
    // given
    const fileName = 'xdd.log';
    const wrapper = mount(NeonFile, {
      propsData: {},
    });
    const vm: NeonFileClass = wrapper.vm as NeonFileClass;
    // when
    // @ts-ignore
    vm.onInput({ target: { files: [new File([], fileName)] } });
    // then
    expect(vm.fileList.length).toEqual(1);
    expect(wrapper.emitted().input[0]).toBeDefined();
  });

  it('extracts files onInput multiple', () => {
    // given
    const fileName = 'xdd.log';
    const wrapper = mount(NeonFile, {
      propsData: { multiple: true },
    });
    const vm: NeonFileClass = wrapper.vm as NeonFileClass;
    // when
    // @ts-ignore
    vm.onInput({ target: { files: [new File([], fileName)] } });
    // then
    expect(vm.fileList.length).toEqual(1);
    expect(wrapper.emitted().input[0]).toBeDefined();
  });

  it('extracts files onInput no target', () => {
    // given
    const wrapper = mount(NeonFile, {
      propsData: {},
    });
    const vm: NeonFileClass = wrapper.vm as NeonFileClass;
    // when
    // @ts-ignore
    vm.onInput({});
    // then
    expect(vm.fileList.length).toEqual(0);
    expect(wrapper.emitted().input).toBeUndefined();
  });

  it('extracts files onInput no files', () => {
    // given
    const wrapper = mount(NeonFile, {
      propsData: {},
    });
    const vm: NeonFileClass = wrapper.vm as NeonFileClass;
    // when
    // @ts-ignore
    vm.onInput({ target: {} });
    // then
    expect(vm.fileList.length).toEqual(0);
    expect(wrapper.emitted().input[0]).toBeDefined();
  });

  it('clears all', () => {
    // given
    const fileName = 'xdd.log';
    const wrapper = mount(NeonFile, {
      propsData: {},
    });
    const vm: NeonFileClass = wrapper.vm as NeonFileClass;
    // when
    vm.files.push(new File([], fileName));
    vm.clearAll();
    // then
    expect(vm.fileList).toEqual([]);
    expect(wrapper.emitted().input[0]).toEqual([undefined]);
  });

  it('does not clear all when disabled', () => {
    // given
    const fileName = 'xdd.log';
    const wrapper = mount(NeonFile, {
      propsData: { disabled: true },
    });
    const vm: NeonFileClass = wrapper.vm as NeonFileClass;
    // when
    vm.files.push(new File([], fileName));
    vm.clearAll();
    // then
    expect(vm.fileList.length).toEqual(1);
    expect(wrapper.emitted().input).toBeUndefined();
  });

  it('opens file dialog', () => {
    // given
    const wrapper = mount(NeonFile, {
      propsData: {},
    });
    const vm: NeonFileClass = wrapper.vm as NeonFileClass;
    vm.$refs.fileInput.click = jest.fn();
    // when
    vm.openFileDialog();
    // then
    expect(vm.$refs.fileInput.click).toHaveBeenCalled();
  });
});
