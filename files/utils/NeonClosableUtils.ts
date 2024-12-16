export class NeonClosableUtils {
  private readonly target: HTMLElement;
  private readonly closeCallback: () => void;
  private _open = false;

  public constructor(target: HTMLElement, closeCallback: () => void) {
    this.target = target;
    this.closeCallback = closeCallback;
    document.addEventListener('keydown', this.escapeKeyListener.bind(this), { passive: true });
    document.addEventListener('mousedown', this.handleOutsideClick.bind(this), { passive: true });
    document.addEventListener('touchstart', this.handleOutsideClick.bind(this), { passive: true });
  }

  public open() {
    this._open = true;
    document.body.classList.add('neon-closable--open');
  }

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
