import { defineComponent } from 'vue';

/**
 * The NeonTab component that defines individual tabs for use with the NeonTabs component.
 */
export default defineComponent({
  name: 'NeonTab',
  props: {
    /**
     * True if the current tab is the visible tab.
     */
    selected: { type: Boolean, required: true },
    /**
     * Id of the tab (matches the key in NeonTabModel).
     */
    id: { type: String, default: null },
    /**
     * Use fade transition when switching tabs. This is useful to prevent a reflow.
     */
    transition: { type: Boolean, default: true },
  },
});
