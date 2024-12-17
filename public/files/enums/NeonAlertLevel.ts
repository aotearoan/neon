/**
 * Alert levels are the severity levels to be used with <a href="/feedback/alert#examples">NeonAlert & NeonToast</a>
 * components to inform the user of the severity of a message.
 */
export enum NeonAlertLevel {
  /** Information level, use for standard informational messages. */
  Info = 'info',
  /** Success level, use for indicating successful actions. */
  Success = 'success',
  /** Warning level, use for indicating a problem that the user <strong>can</strong> recover from. */
  Warn = 'warn',
  /** Error level, use for indicating a problem that the user <strong>cannot</strong> recover from. */
  Error = 'error',
}
