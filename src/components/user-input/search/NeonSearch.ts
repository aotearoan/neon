import { computed, defineComponent, onMounted, onUnmounted, ref, useAttrs, watch } from 'vue';
import { NeonSize } from '@/common/enums/NeonSize';
import { NeonFunctionalColor } from '@/common/enums/NeonFunctionalColor';
import NeonDropdown from '@/components/presentation/dropdown/NeonDropdown.vue';
import NeonIcon from '@/components/presentation/icon/NeonIcon.vue';
import type { NeonSearchOption } from '@/common/models/NeonSearchOption';
import NeonInput from '@/components/user-input/input/NeonInput.vue';
import NeonChip from '@/components/user-input/chip/NeonChip.vue';
import { NeonDropdownPlacement } from '@/common/enums/NeonDropdownPlacement';
import { NeonScrollUtils } from '@/common/utils/NeonScrollUtils';

/**
 * <p>
 *   The <strong>NeonSearch</strong> component is equivalent to an HTML &lt;input type="search"&gt; element. It is
 *   useful as an alternative to <em>NeonSelect</em> to provide filtered results when the universe of results is very
 *   large and/or the results need to be requested from a server side API.
 * </p>
 * <p><strong>NeonSearch</strong> provides input chips in the case the search allows multiple selection.</p>
 */
export default defineComponent({
  name: 'NeonSearch',
  components: {
    NeonChip,
    NeonDropdown,
    NeonIcon,
    NeonInput,
  },
  props: {
    /**
     * Either a string indicating the key of the selected option ('' if there is no selection) or an array of selected
     * NeonSearchOption in the case when multiple = true (necessary to display them as chips).
     */
    modelValue: { type: [String, Array as () => Array<NeonSearchOption>], required: true },
    /**
     * Placeholder to display in search input when there is no search string entered.
     */
    placeholder: { type: String, required: true },
    /**
     * The list of search results.
     */
    options: { type: Array as () => Array<NeonSearchOption>, required: true },
    /**
     * Allow multi-select.
     */
    multiple: { type: Boolean, default: false },
    /**
     * Disable the search
     */
    disabled: { type: Boolean, default: false },
    /**
     * The size of the dropdown - Small, Medium or Large.
     */
    size: { type: String as () => NeonSize, default: NeonSize.Medium },
    /**
     * The color of the search.
     */
    color: { type: String as () => NeonFunctionalColor, default: NeonFunctionalColor.Primary },
    /**
     * Placement of the dropdown contents.
     */
    placement: { type: String as () => NeonDropdownPlacement, default: NeonDropdownPlacement.BottomLeft },
  },
  emits: [
    /**
     * emitted when the user changes the selection.
     * @type {string | NeonSearchOption[]} either the selected option's key (single select) or an array of the
     * selected options (multi-select).
     */
    'update:modelValue',
    /**
     * emitted when the user types in filter box.
     * @type {string} the current filter criteria. This can be used by the application to filter the displayed options.
     */
    'filter-changed',
  ],
  setup(props, { emit }) {
    const attrs = useAttrs();

    const dropdown = ref<InstanceType<typeof NeonDropdown> | null>(null);
    const searchInput = ref<InstanceType<typeof NeonInput> | null>(null);
    const dropdownPlacement = ref<NeonDropdownPlacement | undefined>(props.placement);

    const open = ref(false);
    const highlightedKey = ref<string | null>(null);
    const highlightedIndex = ref(-1);
    const filter = ref('');

    watch(
      () => open.value,
      (open: boolean) => {
        if (open && props.options.length > 0) {
          highlightedKey.value = props.options[0].key;
          highlightedIndex.value = 0;
        }
      },
    );

    const isReverse = () => {
      switch (dropdownPlacement.value) {
        case NeonDropdownPlacement.TopLeft:
        case NeonDropdownPlacement.TopRight:
        case NeonDropdownPlacement.LeftBottom:
        case NeonDropdownPlacement.RightBottom:
          return true;
      }

      return false;
    };

    const onNavigate = () => {
      const element: HTMLElement | null = dropdown.value?.dropdownContent?.querySelector(
        '.neon-search__option--highlighted',
      ) as HTMLElement;

      if (element) {
        element.focus();
        NeonScrollUtils.scrollIntoView(element);
      }
    };

    const navigateBy = (offset: number, $event: KeyboardEvent) => {
      const newIndex = highlightedIndex.value + offset;
      if (newIndex >= 0 && newIndex <= props.options.length - 1) {
        highlightedIndex.value = newIndex;
        highlightedKey.value = props.options[highlightedIndex.value].key;
        $event.preventDefault();
        setTimeout(onNavigate);
      }
    };

    const emitInputEvent = (value: string | NeonSearchOption[]) => {
      emit('update:modelValue', value);
    };

    const onFilterChange = (_filter: string) => {
      if (!props.multiple) {
        emitInputEvent('');
      }

      filter.value = _filter;
      emit('filter-changed', _filter);
    };

    const clickOption = (option: NeonSearchOption) => {
      if (props.multiple) {
        const values = (props.modelValue as NeonSearchOption[]).map((v) => v);
        const index = values.findIndex((v) => v.key === option.key);
        if (index >= 0) {
          values.splice(index, 1);
        } else {
          values.push(option);
        }
        emitInputEvent(values);
      } else {
        emitInputEvent(option.key);
      }

      onFilterChange(props.multiple ? '' : option.label.toString());
    };

    const keyboardHandler = ($event: KeyboardEvent) => {
      if (open.value) {
        switch ($event.code) {
          case 'ArrowUp':
          case 'ArrowDown':
            {
              const reverseOffset = isReverse() ? -1 : 1;
              if ($event.code === 'ArrowUp') {
                navigateBy(-1 * reverseOffset, $event);
              } else {
                navigateBy(1 * reverseOffset, $event);
              }
            }
            break;
          case 'Enter':
          case 'Space':
            if (!($event.target as HTMLElement).classList.contains('neon-search__input')) {
              clickOption(props.options[highlightedIndex.value]);
              $event.preventDefault();
            }
            break;
          case 'Tab':
            if (
              document.activeElement !== searchInput.value?.neonInput &&
              !$event.ctrlKey &&
              !$event.metaKey &&
              !$event.altKey
            ) {
              open.value = false;
            }
            break;
        }
      }
    };

    const onPlacement = (placement: NeonDropdownPlacement) => {
      dropdownPlacement.value = placement;
    };

    onMounted(() => {
      document.addEventListener('keydown', keyboardHandler);
    });

    onUnmounted(() => {
      document.removeEventListener('keydown', keyboardHandler);
    });

    const sanitizedAttributes = computed(() => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { onFilterChanged, ...sanitized } = attrs;
      return sanitized;
    });

    const changeHighlighted = (key: string) => {
      highlightedKey.value = key;
      highlightedIndex.value = props.options.findIndex((opt) => opt.key === key);
    };

    const showOptions = () => (open.value = true);

    const removeSelected = (removed: NeonSearchOption) =>
      emitInputEvent((props.modelValue as NeonSearchOption[]).filter((v) => v.key !== removed.key));

    const computedOptions = computed(() => {
      return props.multiple ? props.options : props.options.filter((opt) => opt.label !== filter.value);
    });

    return {
      dropdown,
      searchInput,
      open,
      highlightedKey,
      filter,
      sanitizedAttributes,
      computedOptions,
      dropdownPlacement,
      onPlacement,
      onFilterChange,
      clickOption,
      changeHighlighted,
      showOptions,
      removeSelected,
    };
  },
});
