import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { NeonSize } from '../../../common/enums/NeonSize';
import { NeonSelectGroup } from '../../../common/models/NeonSelectGroup';
import { NeonSelectOption } from '../../../common/models/NeonSelectOption';
import { TranslateResult } from 'vue-i18n';
import { NeonFunctionalColor } from '../../../common/enums/NeonFunctionalColor';
import NeonDropdown from '../../presentation/dropdown/NeonDropdown.vue';
import NeonDropdownClass from '../../presentation/dropdown/NeonDropdown';
import NeonIcon from '../../presentation/icon/NeonIcon.vue';
import NeonSwitch from '../switch/NeonSwitch.vue';
import { NeonDropdownPlacement } from '../../../common/enums/NeonDropdownPlacement';
import { NeonScrollUtils } from '../../../common/utils/NeonScrollUtils';

/**
 * <p>The <strong>NeonSelect</strong> is the equivalent of an HTML &lt;select&gt; form control. On touch devices
 * NeonSelect will use the native select for input. <strong>NeonSelect</strong> supports grouping and multiselect.</p>
 * <p><strong>Note:</strong> As well as the options described below, pass through attributes supported by
 * <a href="/presentation/dropdown">NeonDropdown</a> to change the style of the dropdown button.</p>
 */
@Component({
  components: {
    NeonDropdown,
    NeonIcon,
    NeonSwitch,
  },
})
export default class NeonSelect extends Vue {
  readonly $refs!: {
    dropdown: NeonDropdownClass;
  };

  private open = false;
  private highlightedKey: string | null = null;
  private highlightedIndex = -1;

  /**
   * Placeholder to display as button label when there is no option selected.
   */
  @Prop({ required: true })
  public placeholder!: TranslateResult;

  /**
   * Display the placeholder as the first option in the select, this is useful as an alternative to a label.
   */
  @Prop({ default: false })
  public placeholderAsOption!: boolean;

  /**
   * Optional placeholder icon.
   */
  @Prop()
  public placeholderIcon?: string;

  /**
   * A list of options to render in the select.
   */
  @Prop()
  public options!: NeonSelectOption[];

  /**
   * A list of grouped options to render in the select.
   */
  @Prop()
  public groupedOptions?: NeonSelectGroup[];

  /**
   * Either a single string, indicating the key of the selected option or an array of selected keys in the case
   * multiple = true.
   */
  @Prop({ required: true })
  public value!: string | string[];

  /**
   * Allow multi-select.
   */
  @Prop({ default: false })
  public multiple!: boolean;

  /**
   * Placeholder when multiple values are selected.
   */
  @Prop()
  public multiselectPlaceholder?: TranslateResult;

  /**
   * Disable the select
   */
  @Prop({ default: false })
  public disabled!: boolean;

  /**
   * The size of the dropdown - Small, Medium or Large.
   */
  @Prop({ default: NeonSize.Medium })
  public size!: NeonSize;

  /**
   * The color of the select.
   */
  @Prop({ default: NeonFunctionalColor.LowContrast })
  public color!: NeonFunctionalColor;

  @Watch('open')
  private toggleOpen(open: boolean) {
    if (open) {
      this.highlightedKey = this.flattenedOptions[0].key;
      this.highlightedIndex = 0;
    }
  }

  public mounted() {
    document.addEventListener('keydown', this.keyboardHandler);
  }

  public beforeDestroy() {
    document.removeEventListener('keydown', this.keyboardHandler);
  }

  get computedOptions(): NeonSelectGroup[] {
    return (
      this.groupedOptions || [
        {
          group: '',
          options: this.options,
        },
      ]
    );
  }

  get flattenedOptions(): NeonSelectOption[] {
    return this.options || (this.groupedOptions && this.groupedOptions.flatMap((group) => group.options));
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

  get computedLabel() {
    if (this.multiple && this.value.length > 0) {
      if (this.multiselectPlaceholder) {
        return this.multiselectPlaceholder;
      } else if (this.value.length > 1) {
        return `${this.value.length} items selected`;
      } else {
        const selected = this.flattenedOptions.find((option) => option.key === this.value[0]);
        return selected ? selected.label : '';
      }
    } else if (this.value) {
      const selected = this.flattenedOptions.find((option) => option.key === this.value);

      if (selected) {
        return selected.label;
      }
    }

    return this.placeholder;
  }

  get computedIcon() {
    if (this.value) {
      const selected = this.flattenedOptions.find((option) => option.key === this.value);

      if (selected) {
        return selected.icon;
      }
    }

    return this.placeholderIcon;
  }

  private clickOption(option: NeonSelectOption) {
    this.open = false;

    if (this.multiple) {
      const values = [...this.value];
      const index = values.findIndex((v) => v === option.key);
      if (index >= 0) {
        values.splice(index, 1);
      } else {
        values.push(option.key);
      }
      this.emitInputEvent(values);
    } else if (this.value !== option.key) {
      this.emitInputEvent(option.key);
    }
  }

  private nativeSelectChange(event: Event) {
    const selectedKeys = Array.from((event.target as HTMLSelectElement).options)
      .filter((opt) => opt.selected)
      .map((opt) => opt.value);
    const selectedOptions = this.flattenedOptions.filter((v) => selectedKeys.indexOf(v.key) >= 0);
    const value = this.multiple ? selectedOptions.map((value) => value.key) : selectedOptions[0].key;
    this.emitInputEvent(value);
  }

  private emitInputEvent(value: string | string[]) {
    /**
     * emitted when the user changes the selection.
     * @type {string | string[]} either the selected option's key (single select) or an array of the selected keys
     * (multi-select).
     */
    this.$emit('input', value);
  }

  private changeHighlighted(key: string) {
    this.highlightedKey = key;
    this.highlightedIndex = this.flattenedOptions.findIndex((opt) => opt.key === key);
  }

  private keyboardHandler($event: KeyboardEvent) {
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
          if (!this.flattenedOptions[this.highlightedIndex].disabled) {
            this.clickOption(this.flattenedOptions[this.highlightedIndex]);
            $event.preventDefault();
          }
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
    if (newIndex >= 0 && newIndex <= this.flattenedOptions.length - 1) {
      this.highlightedIndex = newIndex;
      this.highlightedKey = this.flattenedOptions[this.highlightedIndex].key;
      $event.preventDefault();
      setTimeout(this.scrollOnNavigate);
    }
  }

  private isReverse() {
    if (!this.groupedOptions) {
      switch (this.$refs.dropdown.getPlacement()) {
        case NeonDropdownPlacement.TopLeft:
        case NeonDropdownPlacement.TopRight:
        case NeonDropdownPlacement.LeftBottom:
        case NeonDropdownPlacement.RightBottom:
          return true;
      }
    }

    return false;
  }

  private scrollOnNavigate() {
    const element = this.$el.querySelector('.neon-select__option--highlighted') as HTMLElement;
    NeonScrollUtils.scrollIntoView(element);
  }

  public get dropdown() {
    return this.$refs.dropdown;
  }
}
