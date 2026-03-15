import type { CssVariableType } from './CssVariableType';

export interface CssVariable {
  id: string;
  name: string;
  type: CssVariableType;
  description?: string;
  defaultValue: string;
  annotations?: Record<string, string>;
  // alt theme default value, e.g. dark mode
  defaultValueAlt?: string;
}
