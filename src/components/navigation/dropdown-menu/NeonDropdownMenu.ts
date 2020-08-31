import { Component, Prop, Vue } from 'vue-property-decorator';
import { NeonDropdownMenuItem } from '../../../common/models/NeonDropdownMenuItem';
import { NeonSize } from '../../../common/enums/NeonSize';

/**
 * A dropdown menu consisting of a button to open the menu and a list of menu items. Clicking on a menu item will result in navigating to the provided URL or notifying the parent component via the @click event.
 */
@Component
export default class NeonDropdownMenu extends Vue {
  private open = false;

  /**
   * The size of the dropdown - Small, Medium or Large.
   */
  @Prop({ default: NeonSize.Medium })
  public size!: NeonSize;

  /**
   * A list of menu items to render in the dropdown menu.
   */
  @Prop({ required: true })
  public model!: NeonDropdownMenuItem[];

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
