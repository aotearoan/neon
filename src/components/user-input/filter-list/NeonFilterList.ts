import { computed, defineComponent, ref } from 'vue';
import { NeonSize } from '../../../common/enums/NeonSize';
import { NeonFunctionalColor } from '../../../common/enums/NeonFunctionalColor';
import NeonIcon from '../../presentation/icon/NeonIcon.vue';
import type { NeonFilterListItem } from '../../../common/models/NeonFilterListItem';
import NeonLink from '../../navigation/link/NeonLink.vue';

/**
 * <p><strong>NeonFilterList</strong> is an alternative component to a select where the values are displayed in a
 * visible list to the user. This component is particularly useful for presenting filters to the user and also provides
 * the option of displaying the item counts with each list item.</p>
 */
export default defineComponent({
  name: 'NeonFilterList',
  components: {
    NeonIcon,
    NeonLink,
  },
  props: {
    /**
     * The list if items to display
     */
    items: { type: Array as () => Array<NeonFilterListItem>, required: true },
    /**
     * Either a single string, indicating the key of the selected item or an array of selected keys in the case
     * multiple = true.
     */
    modelValue: { type: [String, Array as () => Array<string>], required: true },
    /**
     * Allow multi-select of items.
     */
    multiple: { type: Boolean, default: true },
    /**
     * The size of the list items - Small, Medium or Large.
     */
    size: { type: String as () => NeonSize, default: NeonSize.Medium },
    /**
     * The color of the selected list items..
     */
    color: { type: String as () => NeonFunctionalColor, default: NeonFunctionalColor.LowContrast },
    /**
     * The number of visible items. If there are more items they will be placed behind an expansion
     * button which toggles displaying displayCount items and all items.
     */
    displayCount: { type: Number, default: null },
    /**
     * Label for the Show more toggle if <em>displayCount</em> is set. The default is 'Show {count} more' where {count} is substituted with the display count
     */
    showMoreLabel: { type: String, default: 'Show {count} more' },
    /**
     * Label for the expanded Show more toggle if <em>displayCount</em> is set. The default is 'Show less'.
     */
    showLessLabel: { type: String, default: 'Show less' },
  },
  emits: [
    /**
     * emitted when the user selects or toggles the selection of an item.
     * @type {string | string[]} either the selected option's key (single select) or an array of the selected keys
     * (multi-select).
     */
    'update:modelValue',
  ],
  setup(props, { emit }) {
    const showAll = ref(false);

    const selected = computed((): Record<string, boolean> => {
      const result: Record<string, boolean> = {};
      (props.multiple ? (props.modelValue as string[]) : [props.modelValue as string]).forEach((v) => (result[v] = true));
      return result;
    });

    const displayShowAllToggle = computed(() => props.displayCount && props.items.length > props.displayCount);

    const visibleItems = computed(() => {
      return displayShowAllToggle.value && !showAll.value
        ? props.items.filter((item, index) => !props.displayCount || index < props.displayCount)
        : props.items;
    });

    const computedShowMoreLabel = computed(() => props.showMoreLabel.replace('{count}', `${props.items.length - visibleItems.value.length}`));

    const toggleShowAllLabel = computed(() => showAll.value ? props.showLessLabel : computedShowMoreLabel.value);

    const emitInput = (value: string | string[]) => {
      emit('update:modelValue', value);
    };

    const toggleItem = (key: string, $event?: Event) => {
      if (props.multiple) {
        if (selected.value[key]) {
          emitInput((props.modelValue as string[]).filter((v) => v !== key));
        } else {
          const result = [];
          (props.modelValue as string[]).forEach((v) => result.push(v));
          result.push(key);
          emitInput(result);
        }
      } else {
        emitInput(key === props.modelValue ? '' : key);
      }

      if ($event) {
        ($event.target as HTMLDivElement).blur();
      }
    };

    const toggleShowAll = () => {
      showAll.value = !showAll.value;
    };

    return {
      showAll,
      selected,
      visibleItems,
      toggleShowAllLabel,
      displayShowAllToggle,
      toggleItem,
      toggleShowAll,
    };
  },
});
