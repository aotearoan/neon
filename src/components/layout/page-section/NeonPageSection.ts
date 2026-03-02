import { defineComponent } from 'vue';

/**
 * A component for rendering a page section including a title, content and an hr.
 */
export default defineComponent({
  name: 'NeonPageSection',
  props: {
    /**
     * The title of the section.
     */
    title: { type: String, required: true },
  },
});
