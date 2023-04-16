import { defineComponent, onMounted, ref } from 'vue';
import { NeonCard, NeonCardBody, NeonCardHeader, NeonInput } from '@/neon';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';
import Editor from '@/app/components/editor/Editor.vue';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names,vue/no-reserved-component-names
  name: 'Input',
  components: {
    ComponentDocumentation,
    Editor,
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
    NeonInput,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('HTML input and textarea component');

    const small = ref('');
    const medium = ref('');
    const large = ref('');
    const ready = ref('');
    const loading = ref('');
    const success = ref('');
    const error = ref('');
    const lowContrast = ref('');
    const highContrast = ref('');
    const brand = ref('');
    const primary = ref('');
    const info = ref('');
    const disabled = ref('');
    const textArea = ref('');
    const textAreaDisabled = ref('');

    const inputSizeExamples = `<neon-input v-model="small"
                      placeholder="Type here"
                      size="s"
                      type="text"
          />
          <neon-input v-model="medium"
                      placeholder="Type here"
                      size="m"
                      type="text"
          />
          <neon-input v-model="large"
                      placeholder="Type here"
                      size="l"
                      type="text"
          />`;

    const inputStateExamples = `<neon-input v-model="ready"
            placeholder="Type here"
            size="l" state="ready"
            type="text"
/>
<neon-input v-model="loading"
            placeholder="Type here"
            size="l"
            state="loading"
            type="text"
/>
<neon-input v-model="success"
            placeholder="Type here"
            size="l"
            state="success"
            type="text"
/>
<neon-input v-model="error"
            placeholder="Type here"
            size="l"
            state="error"
            type="text"
/>`;

    const inputColorExamples = `<neon-input v-model="lowContrast"
            color="low-contrast"
            placeholder="Type here"
            type="text"
/>
<neon-input v-model="highContrast"
            color="high-contrast"
            placeholder="Type here"
            type="text"
/>
<neon-input v-model="brand"
            color="brand"
            placeholder="Type here"
            type="text"
/>
<neon-input v-model="primary"
            color="primary"
            placeholder="Type here"
            type="text"
/>
<neon-input v-model="info"
            color="info"
            placeholder="Type here"
            type="text"
/>
<neon-input v-model="disabled"
            isabled="disabled"
            placeholder="Type here"
            type="text"
/>`;

    const textareaExamples = `<neon-input v-model="textArea"
            :maxlength="100"
            :rows="5"
            placeholder="Type here"
            type="text"
/>
<neon-input v-model="textAreaDisabled"
            :maxlength="100"
            :rows="5"
            disabled="disabled"
            placeholder="Type here"
            type="text"
/>`;

    const messageExamples = `<neon-input v-model="textArea"
            :maxlength="100"
            message="Bacon ipsum dolor amet venison"
            placeholder="Type here"
            type="text"
/>
<neon-input v-model="textAreaDisabled"
            :maxlength="100"
            message="Bacon ipsum dolor amet venison"
            message-level="error"
            placeholder="Type here"
            type="text"
/>`;

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonInput')));

    return {
      menuModel,
      headline,
      small,
      medium,
      large,
      ready,
      loading,
      success,
      error,
      lowContrast,
      highContrast,
      brand,
      primary,
      info,
      disabled,
      textArea,
      textAreaDisabled,
      inputSizeExamples,
      inputStateExamples,
      inputColorExamples,
      textareaExamples,
      messageExamples,
    };
  },
});
