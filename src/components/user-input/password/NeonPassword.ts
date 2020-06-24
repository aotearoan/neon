import { Component, Vue } from 'vue-property-decorator';

/**
 * <p>The <span class="neon-monospaced">NeonPassword</span> component is the equivalent of an
 * <span class="neon-monospaced">&lt;input type="password" /&gt;</span>. It supports the same properties as
 * <a href="/user-input/input"><span class="neon-monospaced">NeonInput</span></a> with the exception of the icon which is used to toggle the
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
