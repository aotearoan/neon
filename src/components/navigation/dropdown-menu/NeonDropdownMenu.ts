import { Component, Prop, Vue } from 'vue-property-decorator';
import { NeonDropdownMenuItem } from '../../../common/models/NeonDropdownMenuItem';
import { NeonSize } from '../../../common/enums/NeonSize';

/**
 * <p>A dropdown menu consisting of a button to open the menu and a list of menu items. Clicking on a menu item will result in navigating to the provided URL or notifying the parent component via the @click event.</p>
 * <p><strong>Note:</strong> As well as the options described below, pass through attributes supported by <a href="/presentation/dropdown">NeonDropdown</a> to change the style of the dropdown button.</p>
 */
@Component
export default class NeonDropdownMenu extends Vue {
  private open = false;

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

  get sanitizedListeners(): Record<string, Function | Function[]> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { input, ...sanitized } = this.$listeners;
    return sanitized;
  }

  get sanitizedAttributes(): Record<string, string> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { size, ...sanitized } = this.$attrs;
    return sanitized;
  }

  private clickItem(item: NeonDropdownMenuItem) {
    this.open = false;
    /**
     * emitted when the user clicks on a menu item.
     * @type {NeonDropdownMenuItem} the menu item the user clicked on.
     */
    this.$emit('click', item);
  }
}
