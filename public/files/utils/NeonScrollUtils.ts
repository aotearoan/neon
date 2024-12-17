/**
 * Scrolling utilities.
 */
export class NeonScrollUtils {
  /**
   * Programmatically scroll an element into view. NOTE: This is for use with any element inside a scrolling parent.
   *
   * @param element {HTMLElement} Element to scroll into view.
   */
  public static scrollIntoView(element: HTMLElement) {
    const parent = element.parentElement as HTMLElement;
    if (element.offsetTop - parent.scrollTop > element.offsetHeight * 4) {
      parent.scrollTop = element.offsetTop - element.offsetHeight * 4;
    }
    if (element.offsetTop < parent.scrollTop) {
      parent.scrollTop = element.offsetTop;
    }
  }
}
