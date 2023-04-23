import { computed, defineComponent, ref, useAttrs, watch } from 'vue';
import { NeonSize } from '@/common/enums/NeonSize';
import { NeonFunctionalColor } from '@/common/enums/NeonFunctionalColor';
import { NeonSwitchStyle } from '@/common/enums/NeonSwitchStyle';
import { NeonHorizontalPosition } from '@/common/enums/NeonHorizontalPosition';
import NeonIcon from '@/components/presentation/icon/NeonIcon.vue';

/**
 * <p>
 * A Switch or Checkbox component used to indicate an on/off state. This is equivalent to a checkbox. The switch supports
 * both <em>Switch</em> and <em>Checkbox</em> styles which can be used in different scenarios.
 * </p>
 */
export default defineComponent({
  name: 'NeonSwitch',
  components: {
    NeonIcon,
  },
  props: {
    /**
     * The switch model.
     */
    modelValue: { type: Boolean, required: true },
    /**
     * The switch label, the label can be optional only in the case the switch is part of a more complex component.
     */
    label: { type: String, default: null },
    /**
     * The indeterminate state of the checkbox.
     */
    indeterminate: { type: Boolean, default: false },
    /**
     * The size of the switch.
     */
    size: { type: String as () => NeonSize, default: () => NeonSize.Medium },
    /**
     * The switch color.
     */
    color: { type: String as () => NeonFunctionalColor, default: () => NeonFunctionalColor.Primary },
    /**
     * Style the switch as a <em>Switch</em> or a <em>Checkbox</em>.
     */
    switchStyle: { type: String as () => NeonSwitchStyle, default: () => NeonSwitchStyle.Switch },
    /**
     * The position of the switch label.
     */
    labelPosition: { type: String as () => NeonHorizontalPosition, default: () => NeonHorizontalPosition.Right },
    /**
     * Disabled state of the switch.
     */
    disabled: { type: Boolean, default: false },
  },
  emits: [
    /**
     * Emitted when an indeterminate checkbox is toggled to checked.
     *
     * @type {boolean} The indeterminate state of the checkbox.
     */
    'indeterminate-change',
    /**
     * Emitted when the switch is toggled checked or unchecked.
     *
     * @type {boolean} The checked state of the switch.
     */
    'update:modelValue',
  ],
  setup(props, { emit }) {
    const attrs = useAttrs();

    const checkbox = ref<HTMLInputElement | null>(null);

    watch(
      () => props.indeterminate,
      (value) => {
        if (checkbox.value) {
          checkbox.value.indeterminate = value;
        }
      },
      { immediate: true },
    );

    const emitIndeterminate = (indeterminate: boolean) => {
      emit('indeterminate-change', indeterminate);
    };

    const emitChecked = (checked: boolean) => {
      emit('update:modelValue', checked);
    };

    const changeState = (newState: boolean) => {
      if (!props.disabled) {
        if (props.indeterminate) {
          emitIndeterminate(false);
          emitChecked(true);
        } else {
          emitChecked(newState);
        }
      }
    };

    const sanitizedAttributes = computed(() => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { onIndeterminateChange, onClick, ...sanitized } = attrs;
      return sanitized;
    });

    const toggleSwitch = () => {
      changeState(!props.modelValue);
    };

    return {
      checkbox,
      sanitizedAttributes,
      toggleSwitch,
    };
  },
});
