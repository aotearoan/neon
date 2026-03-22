import { computed, defineComponent, ref, watch } from 'vue';
import NeonButton from '@/components/user-input/button/NeonButton.vue';
import NeonDropdown from '@/components/presentation/dropdown/NeonDropdown.vue';
import NeonFieldGroup from '@/components/user-input/field-group/NeonFieldGroup.vue';
import NeonInput from '@/components/user-input/input/NeonInput.vue';
import NeonLink from '@/components/navigation/link/NeonLink.vue';
import NeonStack from '@/components/layout/stack/NeonStack.vue';
import NeonSwitch from '@/components/user-input/switch/NeonSwitch.vue';
import type { NeonFilterItem } from '@/model/user-input/filter/NeonFilterItem';
import { NeonNumberUtils } from '@/utils/common/number/NeonNumberUtils';
import { NeonSize } from '@/model/common/size/NeonSize';
import { NeonFunctionalColor } from '@/model/common/color/NeonFunctionalColor';

/**
 * A filtering component consisting of a button and a dropdown with a list of options. The button either displayed the
 * label or information about the selected items (the selected item or the count of selected items).
 */
export default defineComponent({
  name: 'NeonFilter',
  components: {
    NeonButton,
    NeonDropdown,
    NeonFieldGroup,
    NeonInput,
    NeonLink,
    NeonStack,
    NeonSwitch,
  },
  props: {
    /**
     * The list of filter items.
     */
    modelValue: { type: Array as () => Array<NeonFilterItem>, required: true },
    /**
     * The button label. This should conform to an i18n pluralization format,
     * e.g. 'Artists | {itemLabel} | {count} artists'.
     * There are two placeholders: {itemLabel} - the name of the item and {count} the count of selected items.
     * NOTE: In the case nothing is selected the label should just be the filter label, e.g. 'Artists' instead of '0 Artists'.
     */
    label: { type: String, required: true },
    /**
     * The color of the component.
     */
    color: { type: String as () => NeonFunctionalColor, default: () => NeonFunctionalColor.HighContrast },
    /**
     * The size of the dropdown button.
     */
    size: { type: String as () => NeonSize, default: () => NeonSize.Small },
    /**
     * The disabled state of the filter buttons
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
     * The reset filter CTA label.
     */
    resetLabel: { type: String, default: 'Reset filter' },
    /**
     * The checkbox list filter placeholder text.
     */
    placeholder: { type: String, default: 'Search' },
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
     * Emitted when the selection is changed & the 'Show' CTA is triggered.
     *
     * @type {Array<NeonFilterItem>} - The filtered items.
     */
    'update:modelValue',
  ],
  setup(props, { emit }) {
    const open = ref<boolean>(false);

    const calcInternalItems = () => props.modelValue.map((item) => ({ ...item }));

    const internalItems = ref<Array<NeonFilterItem>>(calcInternalItems());

    const filterString = ref<string>('');
    const filteredItems = computed<Array<NeonFilterItem>>(() => {
      if (filterString.value === '') {
        return [...internalItems.value];
      }

      const filter = filterString.value.toLowerCase();
      return [...internalItems.value.filter((item) => item.label.toLowerCase().indexOf(filter) >= 0)];
    });

    const selected = computed<Array<NeonFilterItem>>(() => props.modelValue.filter((item) => item.selected));
    const internalSelected = computed<Array<NeonFilterItem>>(() => filteredItems.value.filter((item) => item.selected));
    const unfilteredSelected = computed<Array<NeonFilterItem>>(() =>
      internalItems.value.filter((item) => item.selected),
    );

    const selectedCount = computed<number>(() => {
      const items = unfilteredSelected.value.length > 0 ? unfilteredSelected.value : internalItems.value;
      return items.map((item) => item.count).reduce((acc, item) => acc + item, 0);
    });

    const isDirty = computed<boolean>(() => {
      return !(
        selected.value.length === internalSelected.value.length &&
        selected.value
          .map((sv) => sv.label)
          .every((selectedItem) => unfilteredSelected.value.map((us) => us.label).indexOf(selectedItem) >= 0)
      );
    });

    const resetFilter = () => {
      internalItems.value = internalItems.value.map((item) => ({ ...item, selected: false }));
    };

    const toggleSelected = (label: string) => {
      const item = internalItems.value.find((item) => item.label === label);

      if (item) {
        item.selected = !item.selected;
        internalItems.value = [...internalItems.value];
      }
    };

    const ctaClick = () => {
      if (isDirty.value) {
        emit('update:modelValue', internalItems.value);
      }

      open.value = false;
    };

    const computedTitle = computed<string>(() => {
      const labels = props.label.split('|').map((l) => l.trim());
      return labels[0];
    });

    const computedLabel = computed<string>(() => {
      const labels = props.label.split('|').map((l) => l.trim());
      const itemCount = selected.value.length;
      const label = labels[itemCount > 1 ? 2 : itemCount];
      return label
        .replace('{count}', NeonNumberUtils.formatNumber(itemCount))
        .replace('{itemLabel}', selected.value[0]?.label);
    });

    const computedShowLabel = computed<string>(() => {
      const labels = props.showLabel.split('|').map((l) => l.trim());
      const label = labels[selectedCount.value > 1 ? 2 : selectedCount.value];
      return isDirty.value
        ? label.replace('{count}', NeonNumberUtils.formatNumber(selectedCount.value))
        : props.closeLabel;
    });

    const clearSelection = () => {
      const items = props.modelValue.map((item) => ({ ...item, selected: false }));
      emit('update:modelValue', items);
    };

    watch(
      () => props.modelValue,
      () => {
        internalItems.value = calcInternalItems();
      },
      { deep: true },
    );

    return {
      open,
      filterString,
      filteredItems,
      isDirty,
      computedLabel,
      computedShowLabel,
      computedTitle,
      selected,
      clearSelection,
      resetFilter,
      toggleSelected,
      ctaClick,
      formatNumber: NeonNumberUtils.formatNumber,
    };
  },
});
