import { defineComponent } from 'vue';

/**
 * A "body" card section. Cards can contain multiple card body sections.
 */
export default defineComponent({
  name: 'NeonCardFooter',
  props: {
    /**
     * If true, this will remove all padding from the card body. This is useful for presenting images and also tabs as well as other content.
     */
    fullWidth: { type: Boolean, default: false },
  },
});
