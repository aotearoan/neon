/**
 * Input states which can be applied to Neon button & inputs to give user feedback.
 */
export enum NeonState {
  /** Default state - indicates the user can interact with the component */
  Ready = 'ready',
  /**
   * Loading state - indicates there is a loading action blocking a component. Displays the loading state of the
   * component.
   */
  Loading = 'loading',
  /**
   * Success state - indicates there was a successful action & prevents user interaction with a component. Displays the
   * success state of the component & blocks user interaction.
   */
  Success = 'success',
  /**
   * Error state - indicates there was an erroneous action. Displays the error state of the component & blocks user
   * interaction.
   */
  Error = 'error',
}
