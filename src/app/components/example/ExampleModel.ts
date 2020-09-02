export interface ExampleModel {
  title?: string;
  template: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: Record<string, any>;
  fullWidth?: boolean;
  noCard?: boolean;
}
