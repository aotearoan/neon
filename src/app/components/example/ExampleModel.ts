export interface ExampleModel {
  title?: string;
  tip?: string;
  template: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: Record<string, any>;
  noCard?: boolean;
  fixedContent?: boolean;
}
