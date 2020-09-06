import { Component, Prop, Vue } from 'vue-property-decorator';
import { NeonTabModel } from '../../../common/models/NeonTabModel';
import { NeonFunctionalColor } from '../../../common/enums/NeonFunctionalColor';
import { NeonSize } from '../../../common/enums/NeonSize';

/**
 * A component for displaying tabbed content.
 */
@Component
export default class NeonTabs extends Vue {
  /**
   * The list of tabs to display.
   * */
  @Prop({ required: true })
  public tabs!: NeonTabModel[];

  /**
   * The key of the selected tab.
   */
  @Prop({ required: true })
  public value!: string;

  /**
   * The tab highlight color.
   */
  @Prop({ default: NeonFunctionalColor.Primary })
  public color!: NeonFunctionalColor;

  /**
   * The tab size.
   */
  @Prop({ default: NeonSize.Medium })
  public size!: NeonSize;

  private onClick(key: string) {
    /**
     * Emitted when the selected tab is changed.
     * @type {string} The key of the selected tab.
     */
    this.$emit('input', key);
  }
}