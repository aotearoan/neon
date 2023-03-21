import { defineComponent, onMounted, onUnmounted, ref, watch } from 'vue';
import { NeonDropdownPlacement } from '@/common/enums/NeonDropdownPlacement';
import { NeonDropdownPlacementUtils } from '@/common/utils/NeonDropdownPlacementUtils';
import { NeonClosableUtils } from '@/common/utils/NeonClosableUtils';
import { NeonSize } from '@/common/enums/NeonSize';
import { NeonFunctionalColor } from '@/common/enums/NeonFunctionalColor';
import { NeonDropdownStyle } from '@/common/enums/NeonDropdownStyle';
import NeonBadge from '@/components/presentation/badge/NeonBadge.vue';
import NeonButton from '@/components/user-input/button/NeonButton.vue';
import NeonExpansionIndicator from '@/components/presentation/expansion-indicator/NeonExpansionIndicator.vue';

/**
 * <p>A general purpose dropdown component. This component consists of a button, to trigger the dropdown to open, and
 * the dropdown content which is displayed above the page when the user clicks the button.</p>
 * <p>This can be useful for secondary (perhaps more complex) actions for which there is not enough space on the page or
 * the action is asynchronous allowing the user to perform the action and continue what they were doing. Examples are
 * providing links to copy and letting the user send feedback.</p>
 * <p><strong>NeonDropdown</strong> is the basis for the <strong>NeonDropdownMenu</strong> component and the
 * <strong>NeonSelect</strong> form component.</p>
 */
export default defineComponent({
  name: 'NeonDropdown',
  components: {
    NeonBadge,
    NeonButton,
    NeonExpansionIndicator,
  },
  props: {
    /**
     * Whether the dropdown is currently open.
     */
    modelValue: { type: Boolean, required: true },
    /**
     * The label for the dropdown button.
     */
    label: { type: String, default: null },
    /**
     * URL of image to display if the button style is a square or circular badge.
     */
    image: { type: String, default: null },
    /**
     * Badge image ALT text.
     */
    imageAlt: { type: String, default: null },
    /**
     * An icon to display on the dropdown button. This will be to the left of any label, but can also be used on its own.
     */
    icon: { type: String, default: null },
    /**
     * Show the dropdown button's indicator (chevron).
     */
    indicator: { type: Boolean, default: true },
    /**
     * Disable the dropdown button
     */
    disabled: { type: Boolean, default: false },
    /**
     * The size of the dropdown button - Small, Medium or Large.
     */
    size: { type: String as () => NeonSize, default: NeonSize.Medium },
    /**
     * The color of the dropdown button
     */
    color: { type: String as () => NeonFunctionalColor, default: NeonFunctionalColor.LowContrast },
    /**
     * The alternate color of the dropdown button (for gradient buttons).
     */
    alternateColor: { type: String as () => NeonFunctionalColor, default: null },
    /**
     * The style of the dropdown button
     */
    dropdownStyle: { type: String as () => NeonDropdownStyle, default: NeonDropdownStyle.SolidButton },
    /**
     * Placement of the dropdown contents.
     */
    placement: { type: String as () => NeonDropdownPlacement, default: NeonDropdownPlacement.BottomLeft },
    /**
     * Restrict placement to within this container.
     */
    placementContainer: { type: Object as () => HTMLElement, default: null },
    /**
     * Instead of opening on click (default), open on hover.
     */
    openOnHover: { type: Boolean, default: false },
  },
  emits: [
    /**
     * Emitted when the dropdown button is toggled.
     * @type {boolean} the open state of the dropdown.
     */
    'update:modelValue',
    /**
     * Emitted on initialisation.
     * @type {NeonDropdownPlacement} the placement of the dropdown.
     */
    'dropdown-placement',
    /**
     * Emitted when the dropdown button is blurred.
     * @type {void}
     */
    'blur',
    /**
     * Emitted when the dropdown button is focussed.
     * @type {void}
     */
    'focus',
    /**
     * emitted on initialisation
     * @type {HTMLElement} the reference to the HTMLElement for the dropdown menu button.
     */
    'button-ref',
  ],
  setup(props, { emit }) {
    const dropdownButton = ref<HTMLElement | null>(null);
    const dropdownContent = ref<HTMLDivElement | null>(null);

    const dropdownPlacement = ref<NeonDropdownPlacement>(props.placement);
    const closableUtils = ref<NeonClosableUtils | null>(null);

    const onClose = () => {
      emit('update:modelValue', false);
    };

    const close = () => {
      if (props.modelValue) {
        onClose();
      }
    };

    const recalculatePlacement = () => {
      if (props.modelValue && dropdownButton.value && dropdownContent.value) {
        const previousValue = dropdownPlacement.value;
        dropdownPlacement.value = NeonDropdownPlacementUtils.calculatePlacement(
          dropdownButton.value,
          dropdownContent.value,
          props.placement,
          props.placementContainer,
        );

        if (previousValue !== dropdownPlacement.value) {
          emit('dropdown-placement', dropdownPlacement.value);
        }
      }
    };

    const toggleOpen = () => {
      if (!props.disabled && !props.openOnHover) {
        emit('update:modelValue', !props.modelValue);
        setTimeout(recalculatePlacement);
      }
    };

    const onBlur = () => {
      emit('blur');
    };

    const onFocus = () => {
      emit('focus');
    };

    onMounted(() => {
      if (!props.openOnHover && dropdownContent.value) {
        closableUtils.value = new NeonClosableUtils(dropdownContent.value, close);
      }
      window.addEventListener('resize', recalculatePlacement, { passive: true });
      window.addEventListener('scroll', recalculatePlacement, { passive: true });
      if (props.placementContainer) {
        props.placementContainer.addEventListener('scroll', recalculatePlacement, { passive: true });
      }
    });

    onUnmounted(() => {
      if (!props.openOnHover) {
        closableUtils.value && closableUtils.value.destroy();
      }
      window.removeEventListener('resize', recalculatePlacement);
      window.removeEventListener('scroll', recalculatePlacement);
      if (props.placementContainer) {
        props.placementContainer.removeEventListener('scroll', recalculatePlacement);
      }
    });

    watch(
      () => dropdownButton.value,
      (value) => emit('button-ref', value),
      { immediate: true },
    );

    return {
      dropdownButton,
      dropdownContent,
      dropdownPlacement,
      closableUtils,
      onClose,
      close,
      toggleOpen,
      onBlur,
      onFocus,
    };
  },
});
