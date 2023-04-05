import { defineComponent, ref } from 'vue';
import { NeonSize } from '@/common/enums/NeonSize';
import { NeonFunctionalColor } from '@/common/enums/NeonFunctionalColor';
import NeonCard from '@/components/layout/card/NeonCard.vue';
import NeonCardHeader from '@/components/layout/card/header/NeonCardHeader.vue';
import NeonSwitch from '@/components/user-input/switch/NeonSwitch.vue';
import { NeonResponsive } from '@/common/enums/NeonResponsive';

/**
 * <p>
 * <strong>NeonSelectableCard</strong> is a horizontal card that is selectable by clicking on it. It can be used in
 * lists to easily allow users to select multiple items, providing richer content & a larger footprint for clicking on.
 * </p>
 */
export default defineComponent({
  name: 'NeonSelectableCard',
  components: {
    NeonCard,
    NeonCardHeader,
    NeonSwitch,
  },
  props: {
    /**
     * The selected state of the card
     */
    modelValue: { type: Boolean, required: true },
    /**
     * The size of the card.
     */
    size: { type: String as () => NeonSize, default: NeonSize.Small },
    /**
     * The selection color. This will be used for the checkbox as well as borders & the background color
     */
    color: { type: String as () => NeonFunctionalColor, default: NeonFunctionalColor.Brand },
    /**
     * The disabled state of the card.
     */
    disabled: { type: Boolean, default: false },
  },
  emits: [
    /**
     * Emitted when the user clicks on the card, toggling the selection state.
     * @type {boolean} the current selection state of the card.
     */
    'update:modelValue',
  ],
  setup(props, { emit }) {
    const active = ref<boolean>(false);
    const clicked = () => {
      if (!props.disabled) {
        emit('update:modelValue', !props.modelValue);
      }
    };

    return {
      active,
      clicked,
      NeonResponsive,
    };
  },
});
