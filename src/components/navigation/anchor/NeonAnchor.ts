import { defineComponent } from 'vue';

/**
 * An HTML anchor component. This component is offset by the top nav (at all responsive breakpoints) which means
 * fragments will scroll to the correct position offset by the top nav. Just place NeonAnchor directly inside a
 * positioned element you want to create a fragment for and give it the correct id.
 */
export default defineComponent({
  name: 'NeonAnchor',
  props: {
    /**
     * The id of the anchor, this should correspond to the URL fragment name.
     */
    id: { type: String, required: true },
  },
});
