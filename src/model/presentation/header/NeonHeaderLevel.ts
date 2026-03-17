/**
 * Represents the different levels of headers that can be used in a Neon page.
 */
export enum NeonHeaderLevel {
  /**
   * The top level header for a page. This is the equivalent of an H1 and can also include breadcrumbs.
   */
  Page = 'page',
  /**
   * A header that is used to page sections. This is the equivalent of an H2.
   */
  Section = 'section',
  /**
   * A header that is used in page subsections. This is the equivalent of an H3.
   */
  SubSection = 'sub-section',
}
