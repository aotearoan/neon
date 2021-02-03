import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { NeonSize } from '../../../common/enums/NeonSize';
import { TranslateResult } from 'vue-i18n';
import { NeonFunctionalColor } from '../../../common/enums/NeonFunctionalColor';
import NeonDropdown from '../../presentation/dropdown/NeonDropdown.vue';
import NeonDropdownClass from '../../presentation/dropdown/NeonDropdown';
import NeonIcon from '../../presentation/icon/NeonIcon.vue';
import { NeonDropdownPlacement } from '../../../common/enums/NeonDropdownPlacement';
import { NeonScrollUtils } from '../../../common/utils/NeonScrollUtils';
import { NeonSearchOption } from '../../../common/models/NeonSearchOption';
import NeonInput from '../input/NeonInput.vue';
import NeonChip from '../chip/NeonChip.vue';

/**
 * <p>
 *   The <strong>NeonSearch</strong> component is equivalent to an HTML &lt;input type="search"&gt; element. It is
 *   useful as an alternative to <em>NeonSelect</em> to provide filtered results when the universe of results is very
 *   large and/or the results need to be requested from a server side API.
 * </p>
 * <p><strong>NeonSearch</strong> provides input chips in the case the search allows multiple selection.</p>
 */
@Component({
  components: {
    NeonChip,
    NeonDropdown,
    NeonIcon,
    NeonInput,
  },
})
export default class NeonSearch extends Vue {
  readonly $refs!: {
    dropdown: NeonDropdownClass;
  };

  open = false;
  highlightedKey: string | null = null;
  highlightedIndex = -1;
  private filter = '';

  /**
   * Either a string indicating the key of the selected option ('' if there is no selection) or an array of selected
   * NeonSearchOption in the case when multiple = true (necessary to display them as chips).
   */
  @Prop({ required: true })
  public value!: string | NeonSearchOption[];

  /**
   * Placeholder to display in search input when there is no search string entered.
   */
  @Prop({ required: true })
  public placeholder!: TranslateResult;

  /**
   * The list of search results.
   */
  @Prop({ required: true })
  public options!: NeonSearchOption[];

  /**
   * Allow multi-select.
   */
  @Prop({ default: false })
  public multiple!: boolean;

  /**
   * Disable the search
   */
  @Prop({ default: false })
  public disabled!: boolean;

  /**
   * The size of the dropdown - Small, Medium or Large.
   */
  @Prop({ default: NeonSize.Medium })
  public size!: NeonSize;

  /**
   * The color of the search.
   */
  @Prop({ default: NeonFunctionalColor.LowContrast })
  public color!: NeonFunctionalColor;

  @Watch('open')
  private toggleOpen(open: boolean) {
    if (open && this.options.length > 0) {
      this.highlightedKey = this.options[0].key;
      this.highlightedIndex = 0;
    }
  }

  public mounted() {
    document.addEventListener('keydown', this.keyboardHandler);
  }

  public beforeDestroy() {
    document.removeEventListener('keydown', this.keyboardHandler);
  }

  get sanitizedListeners(): Record<string, Function | Function[]> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { input, ...sanitized } = this.$listeners;
    return sanitized;
  }

  get sanitizedAttributes(): Record<string, string> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { size, disabled, label, icon, color, ...sanitized } = this.$attrs;
    return sanitized;
  }

  private clickOption(option: NeonSearchOption) {
    if (this.multiple) {
      const values = [...(this.value as NeonSearchOption[])];
      const index = values.findIndex((v) => v.key === option.key);
      if (index >= 0) {
        values.splice(index, 1);
      } else {
        values.push(option);
      }
      this.emitInputEvent(values);
    } else {
      this.emitInputEvent(option.key);
    }

    this.onFilterChange(this.multiple ? '' : option.label.toString());
  }

  private changeHighlighted(key: string) {
    this.highlightedKey = key;
    this.highlightedIndex = this.options.findIndex((opt) => opt.key === key);
  }

  keyboardHandler($event: KeyboardEvent) {
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
          this.clickOption(this.options[this.highlightedIndex]);
          $event.preventDefault();
          break;
        case 'Tab':
          if (!$event.ctrlKey && !$event.metaKey && !$event.altKey) {
            this.open = false;
          }
          break;
      }
    }
  }

  private navigateBy(offset: number, $event: KeyboardEvent) {
    const newIndex = this.highlightedIndex + offset;
    if (newIndex >= 0 && newIndex <= this.options.length - 1) {
      this.highlightedIndex = newIndex;
      this.highlightedKey = this.options[this.highlightedIndex].key;
      $event.preventDefault();
      setTimeout(this.scrollOnNavigate);
    }
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

  scrollOnNavigate() {
    const element = this.$el.querySelector('.neon-search__option--highlighted') as HTMLElement;
    NeonScrollUtils.scrollIntoView(element);
  }

  private emitInputEvent(value: string | NeonSearchOption[]) {
    /**
     * emitted when the user changes the selection.
     * @type {string | NeonSearchOption[]} either the selected option's key (single select) or an array of the
     * selected options (multi-select).
     */
    this.$emit('input', value);
  }

  private onFilterChange(filter: string) {
    if (!this.multiple) {
      this.emitInputEvent('');
    }

    this.filter = filter;
    /**
     * emitted when the user types in filter box.
     * @type {string} the current filter criteria. This can be used by the application to filter the displayed options.
     */
    this.$emit('filter-changed', filter);
  }

  showOptions() {
    this.open = true;
  }

  private removeSelected(removed: NeonSearchOption) {
    this.emitInputEvent((this.value as NeonSearchOption[]).filter((v) => v.key !== removed.key));
  }

  private get computedOptions() {
    return this.options.filter((opt) => opt.label !== this.filter);
  }
}
