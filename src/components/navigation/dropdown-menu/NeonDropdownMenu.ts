import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { NeonDropdownMenuItem } from '../../../common/models/NeonDropdownMenuItem';
import { NeonSize } from '../../../common/enums/NeonSize';
import { NeonFunctionalColor } from '../../../common/enums/NeonFunctionalColor';
import NeonDropdown from '../../presentation/dropdown/NeonDropdown.vue';
import NeonDropdownClass from '../../presentation/dropdown/NeonDropdown';
import { NeonDropdownPlacement } from '../../../common/enums/NeonDropdownPlacement';
import { NeonScrollUtils } from '../../../common/utils/NeonScrollUtils';

/**
 * <p>A dropdown menu consisting of a button to open the menu and a list of menu items. Clicking on a menu item will
 * result in navigating to the provided URL or notifying the parent component via the @click event.</p>
 * <p><strong>Note:</strong> As well as the options described below, pass through attributes supported by
 * <a href="/presentation/dropdown">NeonDropdown</a> to change the style of the dropdown button.</p>
 */
@Component({
  components: {
    NeonDropdown,
  },
})
export default class NeonDropdownMenu extends Vue {
  readonly $refs!: {
    dropdown: NeonDropdownClass;
    items: HTMLLIElement[];
  };

  private open = false;
  private highlightedKey: string | null = null;
  private highlightedIndex = -1;

  /**
   * A list of menu items to render in the dropdown menu.
   */
  @Prop({ required: true })
  public model!: NeonDropdownMenuItem[];

  /**
   * The size of the dropdown - Small, Medium or Large.
   */
  @Prop({ default: NeonSize.Medium })
  public size!: NeonSize;

  /**
   * The dropdown color.
   */
  @Prop({ default: NeonFunctionalColor.LowContrast })
  public color!: NeonFunctionalColor;

  /**
   * Whether the dropdown button is disabled or not.
   */
  @Prop({ default: false })
  public disabled!: boolean;

  /**
   * Instead of opening on click (default), open on hover.
   */
  @Prop({ default: false })
  public openOnHover!: boolean;

  @Watch('open')
  private toggleOpen(open: boolean) {
    if (open) {
      this.highlightedKey = this.model[0].key;
      this.highlightedIndex = 0;
    }
  }

  public mounted() {
    document.addEventListener('keydown', this.keyboardHandler);
  }

  public beforeDestroy() {
    document.removeEventListener('keydown', this.keyboardHandler);
  }

  private get sanitizedListeners(): Record<string, Function | Function[]> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { input, ...sanitized } = this.$listeners;
    return sanitized;
  }

  private get sanitizedAttributes(): Record<string, string> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { size, color, ...sanitized } = this.$attrs;
    return sanitized;
  }

  private changeHighlighted(key: string) {
    this.highlightedKey = key;
    this.highlightedIndex = this.model.findIndex((item) => item.key === key);
  }

  private keyboardHandler($event: KeyboardEvent) {
    if (!this.disabled) {
      if (this.open) {
        switch ($event.code) {
          case 'ArrowUp':
          case 'ArrowDown':
            {
              const reverseOffset = this.isReverse() ? -1 : 1;
              if ($event.code === 'ArrowUp') {
                this.navigateBy(-1 * reverseOffset, $event);
              } else {
                this.navigateBy(1 * reverseOffset, $event);
              }
            }
            break;
          case 'Enter':
          case 'Space':
            if (!this.model[this.highlightedIndex].disabled) {
              this.clickItem(this.model[this.highlightedIndex]);
              $event.preventDefault();
            }
            break;
          case 'Tab':
            if (!$event.ctrlKey && !$event.metaKey && !$event.altKey) {
              this.open = false;
            }
            break;
          case 'Escape':
            this.open = false;
            break;
        }
      } else if (document.activeElement && document.activeElement.parentElement === this.$refs.dropdown.button) {
        switch ($event.code) {
          case 'Enter':
          case 'Space':
            this.open = true;
            break;
        }
      }
    }
  }

  private navigateBy(offset: number, $event: KeyboardEvent) {
    const newIndex = this.highlightedIndex + offset;
    if (newIndex >= 0 && newIndex <= this.model.length - 1) {
      this.highlightedIndex = newIndex;
      this.highlightedKey = this.model[this.highlightedIndex].key;
      $event.preventDefault();
      setTimeout(this.scrollOnNavigate);
    }
  }

  private scrollOnNavigate() {
    const element = this.$el.querySelector('.neon-dropdown-menu__item--highlighted') as HTMLElement;
    NeonScrollUtils.scrollIntoView(element);
  }

  private isReverse() {
    switch (this.$refs.dropdown.getPlacement()) {
      case NeonDropdownPlacement.TopLeft:
      case NeonDropdownPlacement.TopRight:
      case NeonDropdownPlacement.LeftBottom:
      case NeonDropdownPlacement.RightBottom:
        return true;
    }

    return false;
  }

  private clickItem(item: NeonDropdownMenuItem) {
    if (!item.disabled) {
      if (item.href) {
        const itemElement = this.$refs.items[this.highlightedIndex];
        if (itemElement) {
          const anchorElement = itemElement.firstElementChild as HTMLAnchorElement;
          if (anchorElement) {
            anchorElement.click();
          }
        }
      } else {
        /**
         * emitted when the user clicks on a menu item.
         * @type {NeonDropdownMenuItem} the menu item the user clicked on.
         */
        this.$emit('click', item);
      }
      this.open = false;
    }
  }

  public get dropdown() {
    return this.$refs.dropdown;
  }

  private onFocus() {
    if (this.openOnHover) {
      this.open = true;
    }
  }

  private onBlur() {
    if (this.openOnHover) {
      this.open = false;
    }
  }
}
