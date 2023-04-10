import { defineComponent } from 'vue';
import NeonLabel from '@/components/presentation/label/NeonLabel.vue';

/**
 * An HTML label implementation supporting optional labels. Use in the same way as an HTML label either wrapping the input
 * or using the label alongside the input.
 */
export default defineComponent({
  name: 'NeonFieldLabel',
  components: {
    NeonLabel,
  },
  props: {
    /**
     * The label text to render.
     */
    label: { type: String, required: true },
    /**
     * The equivalent of the <em>for</em> attribute on an HTML label.
     */
    labelFor: { type: String, default: null },
    /**
     * Display an "optional" indicator with the label.
     */
    optional: { type: Boolean, default: false },
    /**
     * The default "optional" label text.
     */
    optionalLabel: { type: String, default: 'Optional' },
  },
});
