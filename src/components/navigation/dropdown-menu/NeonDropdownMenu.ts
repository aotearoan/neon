import { computed, defineComponent, onMounted, onUnmounted, ref, watch } from 'vue';
import type { NeonDropdownMenuItem } from '@/common/models/NeonDropdownMenuItem';
import { NeonSize } from '@/common/enums/NeonSize';
import { NeonFunctionalColor } from '@/common/enums/NeonFunctionalColor';
import NeonDropdown from '@/components/presentation/dropdown/NeonDropdown.vue';
import { NeonDropdownPlacement } from '@/common/enums/NeonDropdownPlacement';
import { NeonScrollUtils } from '@/common/utils/NeonScrollUtils';
import NeonIcon from '@/components/presentation/icon/NeonIcon.vue';
import NeonLink from '@/components/link/NeonLink.vue';

/**
 * <p>A dropdown menu consisting of a button to open the menu and a list of menu items. Clicking on a menu item will
 * result in navigating to the provided URL or notifying the parent component via the @click event.</p>
 * <p><strong>Note:</strong> As well as the options described below, pass through attributes supported by
 * <a href="/presentation/dropdown">NeonDropdown</a> to change the style of the dropdown button.</p>
 */
export default defineComponent({
  name: 'NeonDropdownMenu',
  components: {
    NeonDropdown,
    NeonIcon,
    NeonLink,
  },
  props: {
    /**
     * A list of menu items to render in the dropdown menu.
     */
    model: { type: Array as () => Array<NeonDropdownMenuItem>, required: true },
    /**
     * The size of the dropdown - Small, Medium or Large.
     */
    size: { type: String as () => NeonSize, default: NeonSize.Medium },
    /**
     * The dropdown color.
     */
    color: { type: String as () => NeonFunctionalColor, default: NeonFunctionalColor.LowContrast },
    /**
     * Whether the dropdown button is disabled or not.
     */
    disabled: { type: Boolean, default: false },
    /**
     * Instead of opening on click (default), open on hover.
     */
    openOnHover: { type: Boolean, default: false },
  },
  emits: [
    /**
     * emitted when the user clicks on a menu item.
     * @type {NeonDropdownMenuItem} the menu item the user clicked on.
     */
    'click',
    /**
     * emitted on initialisation
     * @type {HTMLElement} the reference to the HTMLElement for the dropdown menu button.
     */
    'button-ref',
  ],
  setup(props, { attrs, emit }) {
    const dropdown = ref<HTMLElement | null>(null);
    const dropdownPlacement = ref<NeonDropdownPlacement | null>(null);
    const items = ref<Array<HTMLLIElement>>([]);
    const open = ref(false);
    const highlightedKey = ref<string | null>(null);
    const highlightedIndex = ref(-1);

    const sanitizedAttributes = computed(() => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { size, color, ...attributes } = Object.entries(attrs).filter(([key, _value]) => key !== 'onInput');
      return attributes;
    });

    const changeHighlighted = (key: string) => {
      highlightedKey.value = key;
      highlightedIndex.value = props.model.findIndex((item) => item.key === key);
    };

    const onPlacement = (placement: NeonDropdownPlacement) => {
      dropdownPlacement.value = placement;
    };

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

    const scrollOnNavigate = () => {
      const element = dropdown.value?.querySelector('.neon-dropdown-menu__item--highlighted') as HTMLElement;
      NeonScrollUtils.scrollIntoView(element);
    };

    const navigateBy = (offset: number, $event: KeyboardEvent) => {
      const newIndex = highlightedIndex.value + offset;
      if (newIndex >= 0 && newIndex <= props.model.length - 1) {
        highlightedIndex.value = newIndex;
        highlightedKey.value = props.model[highlightedIndex.value].key;
        $event.preventDefault();
        setTimeout(scrollOnNavigate);
      }
    };

    const keyboardHandler = ($event: KeyboardEvent) => {
      if (!props.disabled) {
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
              if (props.model[highlightedIndex.value] && !props.model[highlightedIndex.value].disabled) {
                clickItem(props.model[highlightedIndex.value]);
                $event.preventDefault();
              }
              break;
            case 'Tab':
              if (!$event.ctrlKey && !$event.metaKey && !$event.altKey) {
                open.value = false;
              }
              break;
            case 'Escape':
              open.value = false;
              break;
          }
        }
      }
    };

    const clickItem = (item: NeonDropdownMenuItem) => {
      if (!item.disabled) {
        if (item.href) {
          const anchor = items.value[highlightedIndex.value]?.firstElementChild as HTMLAnchorElement;
          anchor && anchor.click();
        } else {
          emit('click', item);
        }
        open.value = false;
      }
    };

    const onFocus = () => {
      if (props.openOnHover) {
        open.value = true;
      }
    };

    const onBlur = () => {
      if (props.openOnHover) {
        open.value = false;
      }
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
          highlightedKey.value = props.model[0].key;
          highlightedIndex.value = 0;
        }
      },
    );

    return {
      dropdown,
      items,
      open,
      highlightedKey,
      highlightedIndex,
      sanitizedAttributes,
      changeHighlighted,
      keyboardHandler,
      onBlur,
      onFocus,
      clickItem,
      navigateBy,
      onPlacement,
    };
  },
});
