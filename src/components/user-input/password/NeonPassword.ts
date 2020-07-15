import { Component, Vue } from 'vue-property-decorator';

/**
 * <p>The <strong>NeonPassword</strong> component is the equivalent of an
 * <strong>&lt;input type="password" /&gt;</strong>. It supports the same properties as
 * <a href="/user-input/input"><strong>NeonInput</strong></a> with the exception of the icon which is used to toggle the
 * display of the password.
 * </p>
 */
@Component({})
export default class NeonPassword extends Vue {
  private show = false;

  private get sanitizedListeners(): Record<string, Function | Function[]> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { iconClicked, ...sanitized } = this.$listeners;
    return sanitized;
  }

  private iconClicked() {
    this.show = !this.show;
    /**
     * Event triggered when the show/hide password icon is clicked
     *
     * @event icon-click
     */
    this.$emit('icon-click');
  }
}
