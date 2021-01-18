import { Component, Prop, Vue } from 'vue-property-decorator';
import { NeonSize } from '../../../common/enums/NeonSize';
import { NeonFunctionalColor } from '../../../common/enums/NeonFunctionalColor';
import NeonIcon from '../../presentation/icon/NeonIcon.vue';
import { NeonFilterListItem } from '../../../common/models/NeonFilterListItem';
import { TranslateResult } from 'vue-i18n';
import NeonLink from '../../navigation/link/NeonLink.vue';

/**
 * <p><strong>NeonFilterList</strong> is an alternative component to a select where the values are displayed in a
 * visible list to the user. This component is particularly useful for presenting filters to the user and also provides
 * the option of displaying the item counts with each list item.</p>
 */
@Component({
  components: {
    NeonIcon,
    NeonLink,
  },
})
export default class NeonFilterList extends Vue {
  private showAll = false;

  /**
   * The list if items to display
   */
  @Prop({ required: true })
  public items!: NeonFilterListItem[];

  /**
   * Either a single string, indicating the key of the selected item or an array of selected keys in the case
   * multiple = true.
   */
  @Prop({ required: true })
  public value!: string | string[];

  /**
   * Allow multi-select of items.
   */
  @Prop({ default: true })
  public multiple!: boolean;

  /**
   * The size of the list items - Small, Medium or Large.
   */
  @Prop({ default: NeonSize.Medium })
  public size!: NeonSize;

  /**
   * The color of the selected list items..
   */
  @Prop({ default: NeonFunctionalColor.LowContrast })
  public color!: NeonFunctionalColor;

  /**
   * The number of visible items. If there are more items they will be placed behind an expansion
   * button which toggles displaying displayCount items and all items.
   */
  @Prop()
  public displayCount?: number;

  /**
   * Label for the Show more toggle if <em>displayCount</em> is set. The default is 'Show {count} more'
   */
  @Prop()
  public showMoreLabel?: TranslateResult;

  /**
   * Label for the expanded Show more toggle if <em>displayCount</em> is set. The default is 'Show less'.
   */
  @Prop()
  public showLessLabel?: TranslateResult;

  private get selected(): Record<string, boolean> {
    const result: Record<string, boolean> = {};
    (this.multiple ? (this.value as string[]) : [this.value as string]).forEach((v) => (result[v] = true));
    return result;
  }

  private toggleItem(key: string, $event?: Event) {
    if (this.multiple) {
      if (this.selected[key]) {
        this.emitInput((this.value as string[]).filter((v) => v !== key));
      } else {
        this.emitInput([...this.value, key]);
      }
    } else {
      this.emitInput(key === this.value ? '' : key);
    }

    if ($event) {
      ($event.target as HTMLDivElement).blur();
    }
  }

  private emitInput(value: string | string[]) {
    /**
     * emitted when the user selects or toggles the selection of an item..
     * @type {string | string[]} either the selected option's key (single select) or an array of the selected keys
     * (multi-select).
     */
    this.$emit('input', value);
  }

  private displayShowAllToggle() {
    return this.displayCount && this.items.length > this.displayCount;
  }

  private toggleShowAll() {
    this.showAll = !this.showAll;
  }

  private get visibleItems() {
    return this.displayShowAllToggle() && !this.showAll
      ? this.items.filter((item, index) => !this.displayCount || index < this.displayCount)
      : this.items;
  }

  private computedShowMoreLabel() {
    return this.showMoreLabel || this.$t('Show {count} more', { count: this.items.length - this.visibleItems.length });
  }

  private computedShowLessLabel() {
    return this.showLessLabel || this.$t('Show less');
  }

  private get toggleShowAllLabel() {
    return this.showAll ? this.computedShowLessLabel() : this.computedShowMoreLabel();
  }
}
