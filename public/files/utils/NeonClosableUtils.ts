/**
 * Utility class for assisting with closing events for popup containers like modals, dropdowns, selects & drawers.
 * Detects click & touch events outside the popup element as well as escape key triggers.
 */
export class NeonClosableUtils {
  private readonly target: HTMLElement;
  private readonly closeCallback: () => void;
  private _open = false;

  /**
   * Initialise utility to listen to keyboard, mouse & touch events.
   *
   * @param target {HTMLElement} The popup <em>closable</em> element.
   * @param closeCallback {() => void} Callback function triggered when an event fires that should close the target
   * element.
   */
  public constructor(target: HTMLElement, closeCallback: () => void) {
    this.target = target;
    this.closeCallback = closeCallback;
    document.addEventListener('keydown', this.escapeKeyListener.bind(this), { passive: true });
    document.addEventListener('mousedown', this.handleOutsideClick.bind(this), { passive: true });
    document.addEventListener('touchstart', this.handleOutsideClick.bind(this), { passive: true });
  }

  /**
   * Inform the class that the target is now open. This adds the global <em>neon-closable--open</em> class to the
   * document body to prevent page scrolling while a popup is open.
   */
  public open() {
    this._open = true;
    document.body.classList.add('neon-closable--open');
  }

  /**
   * Destroy the listeners. Call this in the parent component's onUnmounted method.
   */
  public destroy() {
    document.removeEventListener('keydown', this.escapeKeyListener.bind(this));
    document.removeEventListener('mousedown', this.handleOutsideClick.bind(this));
    document.removeEventListener('touchstart', this.handleOutsideClick.bind(this));
  }

  escapeKeyListener(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.close();
    }
  }

  /**
   * Handle closing of the target element. This triggers the closeCallback & removes the global
   * <em>neon-closable--open</em> class from the document body.
   */
  public close() {
    this.closeCallback();

    if (this._open) {
      document.body.classList.remove('neon-closable--open');
      this._open = false;
    }
  }

  private handleOutsideClick(event: MouseEvent | TouchEvent) {
    const target = event.target && (event.target as Element);
    if (target && !this.target.contains(target)) {
      this.close();
    }
    return true;
  }
}
