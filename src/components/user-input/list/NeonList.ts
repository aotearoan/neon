import { defineComponent } from 'vue';
import { NeonSize } from '../../../common/enums/NeonSize';
import type { NeonListItem } from '../../../common/models/NeonListItem';
import { NeonFunctionalColor } from '../../../common/enums/NeonFunctionalColor';
import NeonIcon from '../../presentation/icon/NeonIcon.vue';

/**
 * Renders a list of removable items. This can be used as an alternative to removable chips where a vertical list is
 * more appropriate.
 */
export default defineComponent({
  name: 'NeonList',
  components: {
    NeonIcon,
  },
  props: {
    /**
     * The list items.
     */
    modelValue: { type: Array as () => Array<NeonListItem>, required: true },
    /**
     * The file component size
     */
    size: { type: String as () => NeonSize, default: NeonSize.Medium },
    /**
     * The file component color
     */
    color: { type: String as () => NeonFunctionalColor, default: NeonFunctionalColor.LowContrast },
    /**
     * The disabled state of the component
     */
    disabled: { type: Boolean, default: false },
  },
  emits: [
    /**
     * Emitted when an item is removed from the list
     * @type {NeonListItem[]} updated list of items
     */
    'update:modelValue',
    /**
     * Emitted when an item is removed from the list
     * @type {string} key of the item removed
     */
    'close',
  ],
  setup(props, { emit }) {
    const remove = (key: string) => {
      if (!props.disabled) {
        emit(
          'update:modelValue',
          props.modelValue.filter((v) => v.key !== key),
        );
        emit('close', key);
      }
    };

    return {
      remove,
    };
  },
});
