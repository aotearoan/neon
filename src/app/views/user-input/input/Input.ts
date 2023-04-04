import { defineComponent, onMounted, ref } from 'vue';
import { NeonCard, NeonCardBody, NeonCardHeader, NeonInput } from '@/neon';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';

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

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data = ref<Record<string, any>>({
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
      updateInput: (key: string, value: string) => {
        data.value[key] = value;
        data.value = { ...data.value };
      },
    });

    const inputSizeExamples = `<div class="neon-vertically-spaced">
  <neon-input type="text" size="s" :model-value="small" placeholder="Type here" @update:modelValue="updateInput('small', $event)" />
  <neon-input type="text" size="m" :model-value="medium" placeholder="Type here" @update:modelValue="updateInput('medium', $event)" />
  <neon-input type="text" size="l" :model-value="large" placeholder="Type here" @update:modelValue="updateInput('large', $event)" />
</div>`;

    const inputStateExamples = `<div class="neon-vertically-spaced">
  <neon-input type="text" size="l" state="ready" :model-value="ready" placeholder="Type here" @update:modelValue="updateInput('ready', $event)" />
  <neon-input type="text" size="l" state="loading" :model-value="loading" placeholder="Type here" @update:modelValue="updateInput('loading', $event)" />
  <neon-input type="text" size="l" state="success" :model-value="success" placeholder="Type here" @update:modelValue="updateInput('success', $event)" />
  <neon-input type="text" size="l" state="error" :model-value="error" placeholder="Type here" @update:modelValue="updateInput('error', $event)" />
</div>`;

    const inputColorExamples = `<div class="neon-vertically-spaced">
  <neon-input color="low-contrast" type="text" :model-value="lowContrast" placeholder="Type here" @update:modelValue="updateInput('lowContrast', $event)" />
  <neon-input color="high-contrast" type="text" :model-value="highContrast" placeholder="Type here" @update:modelValue="updateInput('highContrast', $event)" />
  <neon-input color="brand" type="text" :model-value="brand" placeholder="Type here" @update:modelValue="updateInput('brand', $event)" />
  <neon-input color="primary" type="text" :model-value="primary" placeholder="Type here" @update:modelValue="updateInput('primary', $event)" />
  <neon-input color="info" type="text" :model-value="info" placeholder="Type here" @update:modelValue="updateInput('info', $event)" />
  <neon-input disabled="disabled" type="text" :model-value="disabled" placeholder="Type here" @update:modelValue="updateInput('disabled', $event)" />
</div>`;

    const textareaExamples = `<div class="neon-vertically-spaced">
  <neon-input type="text" :maxlength="100" :rows="5" :model-value="textArea" placeholder="Type here" @update:modelValue="updateInput('', $event)" />
  <neon-input disabled="disabled" :maxlength="100" :rows="5" type="text" :model-value="textAreaDisabled" placeholder="Type here" @update:modelValue="updateInput('', $event)" />
</div>`;

    const messageExamples = `<div class="neon-vertically-spaced">
  <neon-input type="text" message="Bacon ipsum dolor amet venison" :maxlength="100" :model-value="textArea" placeholder="Type here" @update:modelValue="updateInput('', $event)" />
  <neon-input :maxlength="100" message-level="error" message="Bacon ipsum dolor amet venison" type="text" :model-value="textAreaDisabled" placeholder="Type here" @update:modelValue="updateInput('', $event)" />
</div>`;

    const examples = ref([
      {
        title: 'Input sizes',
        template: inputSizeExamples,
        data,
      },
      {
        title: 'Input colors',
        template: inputColorExamples,
        data,
      },
      {
        title: 'Input states',
        template: inputStateExamples,
        data,
      },
      {
        title: 'Textarea examples',
        template: textareaExamples,
        data,
      },
      {
        title: 'Message examples',
        template: messageExamples,
        data,
      },
    ]);

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonInput')));

    return {
      menuModel,
      headline,
      data,
      examples,
    };
  },
});
