import { computed, defineComponent, onMounted, onUnmounted, ref, useAttrs, watch } from 'vue';
import { NeonSize } from '@/common/enums/NeonSize';
import type { NeonSelectGroup } from '@/common/models/NeonSelectGroup';
import type { NeonSelectOption } from '@/common/models/NeonSelectOption';
import { NeonFunctionalColor } from '@/common/enums/NeonFunctionalColor';
import NeonDropdown from '@/components/presentation/dropdown/NeonDropdown.vue';
import NeonIcon from '@/components/presentation/icon/NeonIcon.vue';
import NeonSwitch from '@/components/user-input/switch/NeonSwitch.vue';
import { NeonDropdownPlacement } from '@/common/enums/NeonDropdownPlacement';
import { NeonScrollUtils } from '@/common/utils/NeonScrollUtils';

/**
 * <p>The <strong>NeonSelect</strong> is the equivalent of an HTML &lt;select&gt; form control. On touch devices
 * NeonSelect will use the native select for input. <strong>NeonSelect</strong> supports grouping and multiselect.</p>
 * <p><strong>Note:</strong> As well as the options described below, pass through attributes supported by
 * <a href="/presentation/dropdown">NeonDropdown</a> to change the style of the dropdown button.</p>
 */
export default defineComponent({
  name: 'NeonSelect',
  components: {
    NeonDropdown,
    NeonIcon,
    NeonSwitch,
  },
  props: {
    /**
     * Id for the dropdown button
     */
    id: { type: String },
    /**
     * Placeholder to display as button label when there is no option selected.
     */
    placeholder: { type: String, required: true },
    /**
     * Display the placeholder as the first option in the select, this is useful as an alternative to a label.
     */
    placeholderAsOption: { type: Boolean, default: false },
    /**
     * Optional placeholder icon.
     */
    placeholderIcon: { type: String, required: false },
    /**
     * A list of options to render in the select.
     */
    options: { type: Array as () => Array<NeonSelectOption>, required: false },
    /**
     * A list of grouped options to render in the select.
     */
    groupedOptions: { type: Array as () => Array<NeonSelectGroup>, required: false },
    /**
     * Either a single string, indicating the key of the selected option or an array of selected keys in the case
     * multiple = true.
     */
    modelValue: { type: [String, Array as () => Array<string>], required: true },
    /**
     * Allow multi-select.
     */
    multiple: { type: Boolean, default: false },
    /**
     * Placeholder when multiple values are selected.
     */
    multiselectPlaceholder: { type: String, required: false },
    /**
     * Disable the select
     */
    disabled: { type: Boolean, default: false },
    /**
     * The size of the dropdown - Small, Medium or Large.
     */
    size: { type: String as () => NeonSize, default: NeonSize.Medium },
    /**
     * The color of the select.
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
     * @type {string | string[]} either the selected option's key (single select) or an array of the selected keys
     * (multi-select).
     */
    'update:modelValue',
  ],
  setup(props, { emit }) {
    const attrs = useAttrs();

    const dropdown = ref<HTMLElement | null>(null);

    const open = ref(false);
    const dropdownPlacement = ref<NeonDropdownPlacement>(props.placement);
    const highlightedKey = ref<string | null>(null);
    const highlightedIndex = ref(-1);

    const flattenedOptions = computed((): NeonSelectOption[] => {
      if (props.options) {
        return props.options;
      } else if (props.groupedOptions) {
        return props.groupedOptions?.flatMap((group) => group.options);
      }
      return [];
    });

    const isReverse = () => {
      if (!props.groupedOptions) {
        switch (dropdownPlacement.value) {
          case NeonDropdownPlacement.TopLeft:
          case NeonDropdownPlacement.TopRight:
          case NeonDropdownPlacement.LeftBottom:
          case NeonDropdownPlacement.RightBottom:
            return true;
        }
      }

      return false;
    };

    const scrollOnNavigate = () => {
      const element = dropdown.value?.querySelector('.neon-select__option--highlighted') as HTMLElement;

      if (element) {
        NeonScrollUtils.scrollIntoView(element);
      }
    };

    const navigateBy = (offset: number, $event: KeyboardEvent) => {
      const newIndex = highlightedIndex.value + offset;
      if (newIndex >= 0 && newIndex <= flattenedOptions.value.length - 1) {
        highlightedIndex.value = newIndex;
        highlightedKey.value = flattenedOptions.value[highlightedIndex.value].key;
        $event.preventDefault();
        setTimeout(scrollOnNavigate);
      }
    };

    const emitInputEvent = (value: string | string[]) => {
      emit('update:modelValue', value);
    };

    const clickOption = (option: NeonSelectOption) => {
      if (props.multiple) {
        const values = [...props.modelValue];
        const index = values.findIndex((v) => v === option.key);
        if (index >= 0) {
          values.splice(index, 1);
        } else {
          values.push(option.key);
        }
        emitInputEvent(values);
      } else if (props.modelValue !== option.key) {
        open.value = false;
        emitInputEvent(option.key);
      }
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
            if (!flattenedOptions.value[highlightedIndex.value].disabled) {
              clickOption(flattenedOptions.value[highlightedIndex.value]);
              $event.preventDefault();
            }
            break;
          case 'Tab':
            if (!$event.ctrlKey && !$event.metaKey && !$event.altKey) {
              open.value = false;
            }
            break;
        }
      }
    };

    const computedOptions = computed((): Array<NeonSelectGroup> => {
      return (
        props.groupedOptions || [
          {
            group: '',
            options: props.options || [],
          },
        ]
      );
    });

    const sanitizedAttributes = computed(() => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { ...sanitized } = attrs;
      return sanitized;
    });

    const computedLabel = computed(() => {
      if (props.multiple && props.modelValue.length > 0) {
        if (props.multiselectPlaceholder) {
          return props.multiselectPlaceholder;
        } else if (props.modelValue.length > 1) {
          return `${props.modelValue.length} items selected`;
        } else {
          const selected = flattenedOptions.value.find((option) => option.key === props.modelValue[0]);
          return selected?.label || '';
        }
      } else if (props.modelValue) {
        const selected = flattenedOptions.value.find((option) => option.key === props.modelValue);

        if (selected) {
          return selected.label;
        }
      }

      return props.placeholder;
    });

    const computedIcon = computed(() => {
      if (props.modelValue) {
        const selected = flattenedOptions.value.find((option) => option.key === props.modelValue);

        if (selected) {
          return selected.icon;
        }
      }

      return props.placeholderIcon;
    });

    const nativeSelectChange = (event: Event) => {
      const selectedKeys = Array.from((event.target as HTMLSelectElement).options)
        .filter((opt) => opt.selected)
        .map((opt) => opt.value);
      const selectedOptions = flattenedOptions.value.filter((v) => selectedKeys.indexOf(v.key) >= 0);
      const value = props.multiple ? selectedOptions.map((value) => value.key) : selectedOptions[0].key;
      emitInputEvent(value);
    };

    const changeHighlighted = (key: string) => {
      highlightedKey.value = key;
      highlightedIndex.value = flattenedOptions.value.findIndex((opt) => opt.key === key);
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

    watch(
      () => open.value,
      (open: boolean) => {
        if (open) {
          highlightedKey.value = flattenedOptions.value[0].key;
          highlightedIndex.value = 0;
        }
      },
    );

    return {
      dropdown,
      open,
      highlightedKey,
      highlightedIndex,
      flattenedOptions,
      computedLabel,
      sanitizedAttributes,
      computedOptions,
      computedIcon,
      clickOption,
      nativeSelectChange,
      changeHighlighted,
      onPlacement,
    };
  },
});
