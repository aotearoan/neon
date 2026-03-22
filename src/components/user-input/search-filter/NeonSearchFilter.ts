import { computed, defineComponent, ref } from 'vue';
import NeonButton from '@/components/user-input/button/NeonButton.vue';
import NeonDropdown from '@/components/presentation/dropdown/NeonDropdown.vue';
import NeonFieldGroup from '@/components/user-input/field-group/NeonFieldGroup.vue';
import NeonInput from '@/components/user-input/input/NeonInput.vue';
import NeonStack from '@/components/layout/stack/NeonStack.vue';
import { NeonNumberUtils } from '@/utils/common/number/NeonNumberUtils';
import { NeonSize } from '@/model/common/size/NeonSize';
import { NeonFunctionalColor } from '@/model/common/color/NeonFunctionalColor';

/**
 * A search filter component consisting of a button and a dropdown with a search input. The button either displays the
 * search label or the current search text.
 */
export default defineComponent({
  name: 'NeonSearchFilter',
  components: {
    NeonButton,
    NeonDropdown,
    NeonFieldGroup,
    NeonInput,
    NeonStack,
  },
  props: {
    /**
     * The filter text
     */
    modelValue: { type: String, required: true },
    /**
     * The count of results matching the current search string. NOTE: This is not the count for the search based on the
     * model value but rather the count based on the current search string in the dropdown. This allows the component
     * to display the matching count to the user BEFORE they trigger the CTA to update the search string & refresh the
     * actual data.
     */
    searchCount: { type: Number, required: true },
    /**
     * The button & dropdown label when nothing is selected.
     */
    label: { type: String, default: 'Search' },
    /**
     * The search input placeholder text.
     */
    placeholder: { type: String, default: 'Search' },
    /**
     * The color of the component.
     */
    color: { type: String as () => NeonFunctionalColor, default: () => NeonFunctionalColor.HighContrast },
    /**
     * The size of the dropdown button.
     */
    size: { type: String as () => NeonSize, default: () => NeonSize.Small },
    /**
     * The disabled state of the buttons.
     */
    disabled: { type: Boolean, default: false },
    /**
     * Button title when items are selected.
     */
    editTitle: { type: String, default: 'Edit' },
    /**
     * Clear button title.
     */
    clearTitle: { type: String, default: 'Clear' },
    /**
     * The close CTA label.
     */
    closeLabel: { type: String, default: 'Close' },
    /**
     * The show 'n' items CTA label. This should adhere to the vue-i18n pluralization format
     * e.g. 'Show {count} items | Show {count} item | Show {count} items'.
     * There is one placeholder: {count} - the count of items matching this filter.
     */
    showLabel: { type: String, default: 'Show {count} items | Show {count} item | Show {count} items' },
  },
  emits: [
    /**
     * Emitted when the close CTA is clicked.
     */
    'close',
    /**
     * Emits when the user changes the search field string. It is expected that the search count is refreshed based on
     * the new search string when this is triggered. This count will be displayed in the 'Show {count} items' CTA which
     * updates the model.
     *
     * @type {string} - The new search string.
     */
    'onSearch',
    /**
     * Emits when the 'Show' CTA is triggered.
     *
     * @type {string} - The filter text.
     */
    'update:modelValue',
  ],
  setup(props, { emit }) {
    const open = ref<boolean>(false);

    const search = ref<string>(props.modelValue);
    const isDirty = computed<boolean>(() => props.modelValue !== search.value);

    const updateSearch = (newValue: string) => {
      search.value = newValue;
      emit('update:modelValue', search.value);
      onClose();
    };

    const onOpen = () => {
      search.value = props.modelValue;
      open.value = true;
    };

    const onClose = () => {
      search.value = props.modelValue;
      open.value = false;
    };

    const onSearchChange = (newValue: string) => {
      search.value = newValue;
      emit('onSearch', search.value);
    };

    const onSearchClear = () => {
      if (search.value !== '') {
        search.value = '';
        emit('update:modelValue', search.value);
      }
    };

    const computedLabel = computed<string>(() => (props.modelValue !== '' ? props.modelValue : props.label));

    const computedShowLabel = computed<string>(() => {
      const labels = props.showLabel.split('|').map((l) => l.trim());
      const label = labels[props.searchCount > 1 ? 2 : props.searchCount];
      return isDirty.value
        ? label.replace('{count}', NeonNumberUtils.formatNumber(props.searchCount))
        : props.closeLabel;
    });

    return {
      open,
      search,
      computedLabel,
      computedShowLabel,
      isDirty,
      onOpen,
      onClose,
      onSearchChange,
      onSearchClear,
      updateSearch,
      formatNumber: NeonNumberUtils.formatNumber,
    };
  },
});
