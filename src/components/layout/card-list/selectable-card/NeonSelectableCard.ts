import { defineComponent, ref } from 'vue';
import { NeonFunctionalColor } from '@/model/common/color/NeonFunctionalColor';
import NeonCard from '@/components/layout/card/NeonCard.vue';
import NeonCardHeader from '@/components/layout/card/header/NeonCardHeader.vue';
import NeonSwitch from '@/components/user-input/switch/NeonSwitch.vue';
import { NeonResponsive } from '@/model/common/responsive/NeonResponsive';

/**
 * <p>
 * INTERNAL USE ONLY: <strong>NeonSelectableCard</strong> is a horizontal card that is selectable by clicking on it.
 * NOTE: do not use this component directly, prefer to use the <a href="/layout/card-list">NeonCardList</a> setting
 * selectable=true. NeonCardList uses NeonSelectableCard internally.
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
