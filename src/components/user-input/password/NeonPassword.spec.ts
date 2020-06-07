import Vue from 'vue';
import { mount } from '@vue/test-utils';
import NeonIcon from '../../design/icon/NeonIcon.vue';
import NeonInput from '../input/NeonInput.vue';
import NeonPassword from './NeonPassword.vue';
import { NeonInputType } from '../input/NeonInputType';

Vue.component('NeonIcon', NeonIcon);
Vue.component('NeonInput', NeonInput);

describe('NeonPassword', () => {
  it('renders type as password by default', () => {
    const value = '123456';
    const wrapper = mount(NeonPassword, {
      propsData: { value },
    });
    expect((wrapper.find('input').element as HTMLInputElement).type).toEqual(NeonInputType.Password);
  });
});
