/**
 * Describes the necessary properties to render a carousel image. See
 * <a href="/presentation/image-carousel">NeonImageCarousel</a>.
 */
export interface NeonCarouselImage {
  /**
   * The URL of the image.
   */
  src: string;
  /**
   * Alt text to be displayed with the image for accessibility.
   */
  alt?: string;
  /**
   * Image title to be displayed with the image.
   */
  title?: string;
}
