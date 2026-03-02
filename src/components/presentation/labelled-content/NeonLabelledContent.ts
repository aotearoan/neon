import { defineComponent } from 'vue';

/**
 * A component for rendering a piece of content with a label.
 */
export default defineComponent({
  name: 'NeonLabelledContent',
  props: {
    /**
     * The label to render.
     */
    label: { type: String, required: true },
    /**
     * A single line value to render. NOTE: for more complex content use the default slot instead.
     */
    value: { type: String },
    /**
     * Apply an "important" style to the label.
     */
    important: { type: Boolean, default: false },
    /**
     * Apply the "neon-number" style to the value.
     */
    numeric: { type: Boolean, default: false },
  },
});
