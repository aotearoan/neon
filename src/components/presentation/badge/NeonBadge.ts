import { computed, defineComponent } from 'vue';
import { NeonFunctionalColor } from '@/common/enums/NeonFunctionalColor';
import NeonFile from '@/components/user-input/file/NeonFile.vue';
import NeonIcon from '@/components/presentation/icon/NeonIcon.vue';
import { NeonJazziconUtils } from '@/common/utils/NeonJazziconUtils';
import { NeonColorUtils } from '@/common/utils/NeonColorUtils';
import { NeonBadgeSize } from '@/common/enums/NeonBadgeSize';

/**
 * A badge is a small square or circular component for representing user avatars. These can be in the form of an image, an icon or a two character string (e.g. the user's initials).
 */
export default defineComponent({
  name: 'NeonBadge',
  components: {
    NeonFile,
    NeonIcon,
  },
  emits: [
    /**
     * emitted when the user selects or clears their image in edit mode.
     * NOTE: This emit event DOES NOT set the badge image, it is the responsibility of the parent component to pass an
     * image URL back into the component's image property to set it, e.g. a data URI.
     * @type {File}
     */
    'change-image',
  ],
  props: {
    /**
     * The two character <em>initials</em> to display on the badge.
     */
    label: { type: String, default: null },
    /**
     * URL of the image to display on the badge.
     */
    image: { type: String, default: null },
    /**
     * An icon to display on the badge.
     */
    icon: { type: String, default: null },
    /**
     * If true, render the badge as a circle, instead of a square.
     */
    circular: { type: Boolean, default: false },
    /**
     * The size of the badge - s, m, l, xl, xxl.
     */
    size: { type: String as () => NeonBadgeSize, default: NeonBadgeSize.Medium },
    /**
     * The color of the badge. This is one of the provided NeonFunctionalColors.
     */
    color: { type: String as () => NeonFunctionalColor, default: NeonFunctionalColor.Primary },
    /**
     * Alternate color for creating gradient badges. NOTE: can also be the same color as 'color'.
     */
    alternateColor: { type: String as () => NeonFunctionalColor, default: null },
    /**
     * Allow editing of the image. This will place an image file lookup button on top of the image allowing the user to
     * choose a new image to upload.
     */
    editable: { type: Boolean, default: false },
    /**
     * Accept string for the filetype to support selecting.
     */
    accept: { type: String, default: 'image/*' },
    /**
     * Display the badge in the disable style
     */
    disabled: { type: Boolean, default: false },
    /**
     * Apply the generated Jazzicon style based on the unique identified provided (e.g. a wallet address, name, etc)
     */
    jazziconId: { type: String, default: null },
    /**
     * Badge image alt text.
     */
    imageAlt: { type: String, default: 'Badge' },
    /**
     * Title for the file upload button in edit mode.
     */
    editButtonTitle: { type: String, default: 'Edit' },
  },
  setup(props, { emit }) {
    const getColor = (key: NeonFunctionalColor) => {
      let colorString = getComputedStyle(document.documentElement).getPropertyValue(`--neon-rgb-${key}-l1`);
      if (colorString.length === 0) {
        colorString = '0, 0, 0';
      }
      const colorRgb = colorString
        .trim()
        .split(', ')
        .map((str) => +str);
      return NeonColorUtils.rgbToHex(colorRgb);
    };

    const palette = computed(() => [
      '#000000',
      getColor(NeonFunctionalColor.Brand),
      getColor(NeonFunctionalColor.Primary),
      getColor(NeonFunctionalColor.Info),
      getColor(NeonFunctionalColor.Success),
      getColor(NeonFunctionalColor.Warn),
      getColor(NeonFunctionalColor.Error),
    ]);

    const svg = computed(() =>
      props.jazziconId
        ? NeonJazziconUtils.genSvg(
            palette.value,
            props.jazziconId,
            props.size === NeonBadgeSize.Small ? 32 : props.size === NeonBadgeSize.Medium ? 40 : 48,
          )
        : null,
    );

    return {
      emit,
      svg,
    };
  },
});
