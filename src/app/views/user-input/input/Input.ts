import { defineComponent, onMounted, ref } from 'vue';
import { NeonCard, NeonCardBody, NeonCardHeader, NeonInput } from '@/neon';
import type { MenuModel } from '../../../Menu';
import { Menu } from '../../../Menu';
import ComponentDocumentation from '../../../components/component-documentation/ComponentDocumentation.vue';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names,vue/no-reserved-component-names
  name: 'Input',
  components: {
    ComponentDocumentation,
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
    NeonInput,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('HTML input and textarea component');

    const data = ref({
      small: '',
      medium: '',
      large: '',
      ready: '',
      loading: '',
      success: '',
      error: '',
      lowContrast: '',
      highContrast: '',
      brand: '',
      primary: '',
      info: '',
      disabled: '',
      textArea: '',
      textAreaDisabled: '',
    });

    const inputSizeExamples = `<div class="neon-vertically-spaced">
  <neon-input type="text" size="s" v-model="small" placeholder="Type here" />
  <neon-input type="text" size="m" v-model="medium" placeholder="Type here" />
  <neon-input type="text" size="l" v-model="large" placeholder="Type here" />
</div>`;

    const inputStateExamples = `<div class="neon-vertically-spaced">
  <neon-input type="text" size="l" state="ready" v-model="ready" placeholder="Type here" />
  <neon-input type="text" size="l" state="loading" v-model="loading" placeholder="Type here" />
  <neon-input type="text" size="l" state="success" v-model="success" placeholder="Type here" />
  <neon-input type="text" size="l" state="error" v-model="error" placeholder="Type here" />
</div>`;

    const inputColorExamples = `<div class="neon-vertically-spaced">
  <neon-input color="low-contrast" type="text" v-model="lowContrast" placeholder="Type here" />
  <neon-input color="high-contrast" type="text" v-model="highContrast" placeholder="Type here" />
  <neon-input color="brand" type="text" v-model="brand" placeholder="Type here" />
  <neon-input color="primary" type="text" v-model="primary" placeholder="Type here" />
  <neon-input color="info" type="text" v-model="info" placeholder="Type here" />
  <neon-input disabled="disabled" type="text" v-model="disabled" placeholder="Type here" />
</div>`;

    const textareaExamples = `<div class="neon-vertically-spaced">
  <neon-input type="text" :maxlength="100" :rows="5" v-model="textArea" placeholder="Type here" />
  <neon-input disabled="disabled" :maxlength="100" :rows="5" type="text" v-model="textAreaDisabled" placeholder="Type here" />
</div>`;

    const examples = ref([
      {
        title: 'Input sizes',
        template: inputSizeExamples,
        data: data.value,
      },
      {
        title: 'Input colors',
        template: inputColorExamples,
        data: data.value,
      },
      {
        title: 'Input states',
        template: inputStateExamples,
        data: data.value,
      },
      {
        title: 'Textarea examples',
        template: textareaExamples,
        data: data.value,
      },
    ]);

    onMounted(() => menuModel.value = Menu.getComponentConfig('NeonInput'));

    return {
      menuModel,
      headline,
      data,
      examples,
    };
  },
});
