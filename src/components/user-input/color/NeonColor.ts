import { computed, defineComponent, useAttrs } from 'vue';
import { NeonSize } from '@/common/enums/NeonSize';
import { NeonFunctionalColor } from '@/common/enums/NeonFunctionalColor';
import NeonInput from '@/components/user-input/input/NeonInput.vue';

export default defineComponent({
  name: 'NeonColor',
  components: {
    NeonInput,
  },
  props: {
    /**
     * The Hexadecimal color code.
     */
    modelValue: { type: String, required: true },
    /**
     * Disable color picker
     */
    disabled: { type: Boolean, default: false },
    /**
     * Only display the color picker
     */
    pickerOnly: { type: Boolean, default: false },
    /**
     * The size of the color picker, one of NeonSize.Small | NeonSize.Medium | NeonSize.Large.
     */
    size: { type: String as () => NeonSize, default: NeonSize.Medium },
    /**
     * Color of the input
     */
    color: { type: String as () => NeonFunctionalColor, default: NeonFunctionalColor.LowContrast },
    /**
     * This is the placeholder for the text input when no value is provided.
     */
    placeholder: { type: String, required: false },
  },
  setup(props, { emit }) {
    const attrs = useAttrs();
    const localValue = computed({
      get() {
        return props.modelValue;
      },
      set(val: string) {
        emit('update:modelValue', val);
      },
    });

    return {
      attrs,
      localValue,
    };
  },
});
