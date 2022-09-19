import { computed, defineComponent, ref } from 'vue';
import { NeonInputType } from '../../../common/enums/NeonInputType';
import { NeonState } from '../../../common/enums/NeonState';
import { NeonSize } from '../../../common/enums/NeonSize';
import { NeonFunctionalColor } from '../../../common/enums/NeonFunctionalColor';
import NeonIcon from '../../presentation/icon/NeonIcon.vue';
import { NeonVueUtils } from '../../../common/utils/NeonVueUtils';

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
    color: { type: String as () => NeonFunctionalColor, default: NeonFunctionalColor.LowContrast },
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
  setup(props, { attrs, emit }) {
    const neonInput = ref<HTMLElement | null>(null);
    const focused = ref(false);

    const sanitizedAttributes = computed((): Record<string, unknown> => {
      const {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        id,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        tabindex,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        type,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        disabled,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        placeholder,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        rows,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        onBlur,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        onFocus,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        onUpdate,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        onIconClicked,
        ...sanitized
      } = attrs;

      return NeonVueUtils.sanitizeAttributes(sanitized, 'onUpdate:modelValue');
    });

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
          emit('update:modelValue', '');
        }
        $event.preventDefault();
        $event.stopPropagation();
      }
    };

    const changeValue = (event: InputEvent) => {
      const val = (event.target as HTMLInputElement).value;
      const v =
        props.maxlength && val.length > props.maxlength ? val.substring(0, props.maxlength) : val;
      if (props.modelValue !== v) {
        emit('update:modelValue', v);
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
    };
  },
});
