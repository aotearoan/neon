import { computed, defineComponent, ref, useAttrs } from 'vue';
import { NeonButtonSize } from '@/common/enums/NeonButtonSize';
import { NeonFunctionalColor } from '@/common/enums/NeonFunctionalColor';
import { NeonButtonStyle } from '@/common/enums/NeonButtonStyle';
import { NeonHorizontalPosition } from '@/common/enums/NeonHorizontalPosition';
import NeonIcon from '@/components/presentation/icon/NeonIcon.vue';
import NeonLink from '@/components/navigation/link/NeonLink.vue';
import NeonExpansionIndicator from '@/components/presentation/expansion-indicator/NeonExpansionIndicator.vue';
import { NeonState } from '@/common/enums/NeonState';

/**
 * A button component. Renders an HTML button or, if an href is provided, renders using NeonLink in the style of a button. NeonButton supports all events and attributes of HTML buttons, e.g, @click.
 */
export default defineComponent({
  name: 'NeonButton',
  components: {
    NeonExpansionIndicator,
    NeonIcon,
    NeonLink,
  },
  props: {
    /**
     * Optional href for rendering a button as a link
     */
    href: { type: String, default: null },
    /**
     * The text to display on a button
     */
    label: { type: String, default: null },
    /**
     * The button size
     */
    size: { type: String as () => NeonButtonSize, default: NeonButtonSize.Medium },
    /**
     * The button color
     */
    color: { type: String as () => NeonFunctionalColor, default: NeonFunctionalColor.LowContrast },
    /**
     * Display the button as high-contrast with inverted colors. This is useful for placing a button on a colored background.
     * NOTE: Supports Solid & Outline button styles only (gradient & text buttons are not supported)
     */
    inverse: { type: Boolean, default: false },
    /**
     * Solid buttons ONLY. Alternate color for creating a gradient buttons. NOTE: can also be the same color as 'color'.
     */
    alternateColor: { type: String as () => NeonFunctionalColor, default: null },
    /**
     * Optional icon to display
     */
    icon: { type: String, default: null },
    /**
     * Position of the icon if combined with text
     */
    iconPosition: { type: String as () => NeonHorizontalPosition, default: NeonHorizontalPosition.Left },
    /**
     * The style of button
     */
    buttonStyle: { type: String as () => NeonButtonStyle, default: NeonButtonStyle.Solid },
    /**
     * Provide button states of <em>ready, loading, success or error</em> which change the display of the button (with icons) to reflect the state.
     */
    state: { type: String as () => NeonState, default: NeonState.Ready },
    /**
     * Whether the button is disabled
     */
    disabled: { type: Boolean, default: false },
    /**
     * For text buttons, do not display the background. This is useful for icon buttons in headers.
     */
    transparent: { type: Boolean, default: false },
    /**
     * Whether to display a button outline when the button has focus
     */
    outline: { type: Boolean, default: true },
    /**
     * Make the button circular. NOTE: This is only for icon only buttons.
     */
    circular: { type: Boolean, default: null },
    /**
     * Make a button extend to the full width of the parent container.
     */
    fullWidth: { type: Boolean, default: null },
    /**
     * INTERNAL USE ONLY: display a NeonExpansionIndicator on the button (used for dropdown buttons)
     * @ignore
     */
    indicator: { type: Boolean, default: false },
    /**
     * INTERNAL USE ONLY: display the NeonExpansionIndicator on the button as <em>open</em> or <em>closed</em>.
     * @ignore
     */
    indicatorExpanded: { type: Boolean, default: null },
  },
  setup(props) {
    const attrs = useAttrs();

    const button = ref<HTMLElement | null>(null);

    const iconName = computed(() => {
      switch (props.state) {
        case NeonState.Loading:
          return 'loading';
        case NeonState.Success:
          return 'check';
        case NeonState.Error:
          return 'times';
        default:
          return props.icon;
      }
    });

    const classes = computed(() => {
      return [
        `neon-button--${props.size}`,
        !props.inverse && `neon-button--${props.color}`,
        `neon-button--${props.buttonStyle}`,
        `neon-button--state-${props.state}`,
        {
          'neon-button--text-transparent': props.transparent && props.buttonStyle === NeonButtonStyle.Text,
          'neon-button--disabled': props.disabled,
          'neon-button--inverse': props.inverse,
          'neon-button--circular': props.circular,
          'neon-button--no-outline': !props.outline,
          'neon-button--full-width': props.fullWidth,
          'neon-button--with-icon neon-button--icon-only': !props.label && props.icon && !props.indicator,
          'neon-button--with-icon neon-button--icon-left': props.label && props.icon && props.iconPosition === 'left',
          'neon-button--with-icon neon-button--icon-right': props.label && props.icon && props.iconPosition === 'right',
          [`neon-button--alternate-color-${props.alternateColor}`]: props.alternateColor,
        },
      ];
    });

    const click = () => {
      console.log(button.value);
      button.value?.click();
    };

    return {
      iconName,
      classes,
      button,
      attrs,
      click,
    };
  },
});
