export class NeonScrollUtils {
  public static scrollIntoView(element: HTMLElement) {
    if (element) {
      const parent = element.parentElement as HTMLElement;
      if (element.offsetTop - parent.scrollTop > element.offsetHeight * 4) {
        parent.scrollTop = element.offsetTop - element.offsetHeight * 4;
      }
      if (element.offsetTop < parent.scrollTop) {
        parent.scrollTop = element.offsetTop;
      }
    }
  }
}
