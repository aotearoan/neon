import { Component, Prop, Vue } from 'vue-property-decorator';
import { NeonSize } from '../../../common/enums/NeonSize';
import { NeonListItem } from '../../../common/models/NeonListItem';
import { NeonFunctionalColor } from '../../../common/enums/NeonFunctionalColor';
import NeonIcon from '../../presentation/icon/NeonIcon.vue';

/**
 * Renders a list of removable items. This can be used as an alternative to removable chips where a vertical list is
 * more appropriate.
 */
@Component({
  components: {
    NeonIcon,
  },
})
export default class NeonList extends Vue {
  /**
   * The list items.
   */
  @Prop({ required: true })
  public value!: NeonListItem[];

  /**
   * The file component size
   */
  @Prop({ default: NeonSize.Medium })
  public size!: NeonSize;

  /**
   * The file component color
   */
  @Prop({ default: NeonFunctionalColor.LowContrast })
  public color!: NeonFunctionalColor;

  /**
   * The disabled state of the component
   */
  @Prop({ default: false })
  public disabled!: boolean;

  private remove(key: string) {
    if (!this.disabled) {
      /**
       * Emitted when an item is removed from the list
       * @type {NeonListItem[]} updated list of items
       */
      this.$emit(
        'input',
        this.value.filter((v) => v.key !== key),
      );
      /**
       * Emitted when an item is removed from the list
       * @type {string} key of the item removed
       */
      this.$emit('close', key);
    }
  }
}
