import { defineComponent } from 'vue';
import NeonLabel from '@/components/presentation/label/NeonLabel.vue';
import { NeonFunctionalColor } from '@/common/enums/NeonFunctionalColor';

/**
 * An HTML label implementation supporting optional labels. Use in the same way as an HTML label either wrapping the input
 * or using the label alongside the input.
 */
export default defineComponent({
  name: 'NeonField',
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
     * Display label with disabled state.
     */
    disabled: { type: Boolean, default: false },
    /**
     * The default "optional" label text.
     */
    optionalLabel: { type: String, default: 'Optional' },
    /**
     * Message to display below the input field.
     */
    message: { type: String, default: null },
    /**
     * The color of message displayed under input. Can be any functional color.
     */
    messageColor: { type: String as () => NeonFunctionalColor, default: NeonFunctionalColor.LowContrast },
  },
});
