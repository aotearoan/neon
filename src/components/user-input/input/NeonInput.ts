import { computed, defineComponent, defineExpose, ref, useAttrs } from 'vue';
import { NeonInputType } from '@/common/enums/NeonInputType';
import { NeonState } from '@/common/enums/NeonState';
import { NeonSize } from '@/common/enums/NeonSize';
import { NeonFunctionalColor } from '@/common/enums/NeonFunctionalColor';
import NeonIcon from '@/components/presentation/icon/NeonIcon.vue';
import { NeonDebounceUtils } from '@/common/utils/NeonDebounceUtils';
import { NeonInputMode } from '@/common/enums/NeonInputMode';

/**
 * Equivalent of, and wrapper around, an HTML input. Also supports <strong>textarea</strong>.
 */
export default defineComponent({
  name: 'NeonInput',
  components: {
    NeonIcon,
  },
  props: {
    /**
     * The id the input
     */
    id: { type: String, default: null },
    /**
     * The value of the input
     */
    modelValue: { type: String, default: null },
    /**
     * The type of input this is. NOTE: Neon provides custom components as alternatives in the following cases:
     * * file (use <a href="/user-input/file">NeonFile</a>)
     * * password (use <a href="/user-input/password">NeonPassword</a>)
     */
    type: { type: String as () => NeonInputType, default: NeonInputType.Text },
    /**
     * Placeholder text to display in the input
     */
    placeholder: { type: String, default: null },
    /**
     * Size of the input
     */
    size: { type: String as () => NeonSize, default: NeonSize.Medium },
    /**
     * Color of the input
     */
    color: { type: String as () => NeonFunctionalColor, default: NeonFunctionalColor.Primary },
    /**
     * The HTML input mode as specified <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode">here</a>.
     */
    inputmode: { type: String as () => NeonInputMode, default: NeonInputMode.Text },
    /**
     * The HTML autocomplete mode as specified <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete#values">here</a>.
     * NOTE: No enum is provided in Neon as some values can be used in combination, please refer to the full list of values in the preceding link.
     */
    autocomplete: { type: String, default: 'on' },
    /**
     * The state of the input
     */
    state: { type: String as () => NeonState, default: NeonState.Ready },
    /**
     * The number of rows to display in the case of a textarea
     */
    rows: { type: Number, default: null },
    /**
     * The name of a clickable icon to display inside the input. This is used for clearing contents or e.g. in the case of
     * NeonPassword toggle showing/hiding the password. Defaults to <em>times</em> (for clearing the input's contents).
     */
    icon: { type: String, default: null },
    /**
     * Make the input field icon read-only, i.e. it will not emit events or be treated as a focusable button.
     */
    iconReadonly: { type: Boolean, default: false },
    /**
     * Hide the icon button, e.g. the X button to clear the input's contents.
     */
    hideIcon: { type: Boolean, default: false },
    /**
     * Tabindex to assign to the input.
     */
    tabindex: { type: Number, default: 0 },
    /**
     * The disabled state of the input
     */
    disabled: { type: Boolean, default: false },
    /**
     * When the state is success or error, display the field with the state color indicator, e.g. border or background
     * color.
     */
    stateHighlight: { type: Boolean, default: true },
    /**
     * When the state is success or error, display the state icon.
     */
    stateIcon: { type: Boolean, default: true },
    /**
     * The character limit for a textarea.
     */
    maxlength: { type: Number, default: null },
    /**
     * Debounce time in ms, if no value is provided the default value set in NeonDebounceUtils is used (=300ms).
     * Set to 0 to disable debounce.
     */
    debounce: { type: Number, default: undefined },
  },
  emits: [
    /**
     * Emitted when the input has gained focus
     * @type {void}
     */
    'focus',
    /**
     * Emitted when the input has lost focus
     * @type {void}
     */
    'blur',
    /**
     * Emitted when the icon is clicked
     * @type {void}
     */
    'icon-click',
    /**
     * Emitted when the input value is changed, NOTE: is not triggered if input is over the textarea length limit
     * @type {string} the contents of the input
     */
    'update:modelValue',
  ],
  setup(props, { emit }) {
    const attrs = useAttrs();
    const neonInput = ref<HTMLElement | null>(null);
    const focused = ref(false);

    const sanitizedAttributes = computed(() => {
      const {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        onBlur,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        onFocus,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        onIconClick,
        ...sanitized
      } = attrs;

      return sanitized;
    });

    const emitModelValue = NeonDebounceUtils.debounce((value: string) => {
      emit('update:modelValue', value);
    }, props.debounce);

    const iconName = computed(() => {
      switch (props.state) {
        case NeonState.Loading:
          return 'loading';
        case NeonState.Success:
          return props.stateIcon ? 'check' : undefined;
        case NeonState.Error:
          return props.stateIcon ? 'times' : undefined;
        default:
          if (props.icon) {
            return props.icon;
          } else if (props.modelValue && props.modelValue.length > 0) {
            return 'times';
          }

          return undefined;
      }
    });

    const iconVisible = computed(() => {
      return (
        iconName.value &&
        !props.hideIcon &&
        (props.state !== 'ready' || props.icon || (props.modelValue && !props.disabled && props.modelValue.length > 0))
      );
    });

    const iconColor = computed(() => {
      switch (props.state) {
        case NeonState.Success:
          return NeonFunctionalColor.Success;
        case NeonState.Error:
          return NeonFunctionalColor.Error;
        case NeonState.Loading:
          return props.color;
        default:
          return NeonFunctionalColor.LowContrast;
      }
    });

    const focus = () => {
      neonInput.value?.focus();
    };

    const click = () => {
      neonInput.value?.click();
    };

    const onFocus = () => {
      focused.value = true;
      emit('focus');
    };

    const onBlur = () => {
      focused.value = false;
      emit('blur');
    };

    const iconClicked = ($event: Event) => {
      if (!props.disabled) {
        if (props.icon) {
          emit('icon-click');
        } else {
          emitModelValue('');
        }
        $event.preventDefault();
        $event.stopPropagation();
      }
    };

    const changeValue = (event: Event) => {
      const val = (event.target as HTMLInputElement).value;
      const v = props.maxlength && val.length > props.maxlength ? val.substring(0, props.maxlength) : val;
      if (props.modelValue !== v) {
        emitModelValue(v);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (
        event.key !== 'Backspace' &&
        props.maxlength &&
        props.modelValue &&
        props.modelValue.length >= props.maxlength
      ) {
        event.preventDefault();
      }
    };

    const computedPlaceholder = computed(() => {
      if (props.placeholder) {
        return props.placeholder;
      } else {
        switch (props.type) {
          case NeonInputType.Email:
            return 'gbelson@hooli.com';
          case NeonInputType.Tel:
            return '+41785551234';
          case NeonInputType.Url:
            return 'http://www.getskeleton.com';
          default:
            return '';
        }
      }
    });

    defineExpose({ neonInput });

    return {
      neonInput,
      focused,
      sanitizedAttributes,
      iconVisible,
      iconName,
      iconColor,
      computedPlaceholder,
      focus,
      click,
      onFocus,
      onBlur,
      iconClicked,
      changeValue,
      onKeyDown,
    };
  },
});
