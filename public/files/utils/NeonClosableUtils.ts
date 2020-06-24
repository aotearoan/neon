export class NeonClosableUtils {
  private readonly target: HTMLElement;
  private readonly closeCallback: () => void;

  public constructor(target: HTMLElement, closeCallback: () => void) {
    this.target = target;
    this.closeCallback = closeCallback;
    document.addEventListener('keyup', this.escapeKeyListener.bind(this));
    document.addEventListener('mousedown', this.handleOutsideClick.bind(this));
    document.addEventListener('touchstart', this.handleOutsideClick.bind(this));
  }

  public destroy() {
    document.removeEventListener('keyup', this.escapeKeyListener.bind(this));
    document.removeEventListener('mousedown', this.handleOutsideClick.bind(this));
    document.removeEventListener('touchstart', this.handleOutsideClick.bind(this));
  }

  private escapeKeyListener(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.closeCallback();
    }
  }

  private handleOutsideClick(event: MouseEvent | TouchEvent) {
    const target = event.target && (event.target as Element);
    if (target && !this.target.contains(target)) {
      this.closeCallback();
    }
    return true;
  }
}
