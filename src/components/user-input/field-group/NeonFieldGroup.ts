import { defineComponent } from 'vue';
import { NeonFunctionalColor } from '@/common/enums/NeonFunctionalColor';
import { NeonInputIndicatorStyle } from '@/common/enums/NeonInputIndicatorStyle';

/**
 * Used to compose a group of inputs, buttons and input indicators into a single component.
 */
export default defineComponent({
  name: 'NeonFieldGroup',
  props: {
    /**
     * The style of input indicators to use, either <em>internal</em> where the indicator is inside the adjoined input
     * field or <em>external</em> where the indicator is external to the adjoining field separated by a border & not
     * highlighted as part of the field.
     */
    indicatorStyle: { type: String as () => NeonInputIndicatorStyle, default: NeonInputIndicatorStyle.Internal },
    /**
     * The border highlight color when the indicator style is <em>internal</em>.
     */
    color: { type: String as () => NeonFunctionalColor, default: NeonFunctionalColor.Primary },
    /**
     * Use the disabled color styles when the indicator style is <em>internal</em>.
     */
    disabled: { type: Boolean, default: false },
  },
});
