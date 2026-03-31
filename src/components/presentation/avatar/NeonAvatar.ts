import { computed, defineComponent } from 'vue';
import { NeonBadge } from '@/neon';
import { NeonFunctionalColor } from '@/model/common/color/NeonFunctionalColor';
import { NeonBadgeSize } from '@/model/presentation/badge/NeonBadgeSize';

/**
 * An avatar component that displays either an image or initials in a circular badge.
 * When displaying initials, it generates a consistent color based on the provided name.
 */
export default defineComponent({
  name: 'NeonAvatar',
  components: {
    NeonBadge,
  },
  props: {
    /**
     * The URL of the avatar image to display
     */
    imageUrl: { type: String, default: undefined },
    /**
     * The name to generate initials from (takes first letter of first name and first letter of last name)
     */
    name: { type: String, default: undefined },
    /**
     * The size of the avatar
     */
    size: { type: String as () => NeonBadgeSize, default: NeonBadgeSize.Small },
    /**
     * If true, render the avatar as a circle, if false render as square
     */
    circular: { type: Boolean, default: true },
    /**
     * The color of the avatar
     */
    color: { type: String as () => NeonFunctionalColor, default: undefined },
  },
  setup(props) {
    const colors = [
      NeonFunctionalColor.Brand,
      NeonFunctionalColor.Accent,
      NeonFunctionalColor.Primary,
      NeonFunctionalColor.Info,
      NeonFunctionalColor.Success,
      NeonFunctionalColor.Warn,
      NeonFunctionalColor.Error,
      NeonFunctionalColor.LowContrast,
      NeonFunctionalColor.HighContrast,
    ];

    const initials = computed(() => {
      if (props.name) {
        const parts = props.name.split(' ');
        if (parts.length === 1) {
          return props.name.substring(0, 2);
        }
        return `${parts[0][0]}${parts.length > 1 ? parts[1][0] : ''}`;
      }
      return '';
    });

    const profileColor = computed(() => {
      if (!props.name) {
        return colors[0];
      }
      // Generate consistent color based on name
      let hash = 0;
      for (let i = 0; i < props.name.length; i++) {
        hash = props.name.charCodeAt(i) + ((hash << 5) - hash);
      }
      return colors[Math.abs(hash) % colors.length];
    });

    const avatarColor = computed(() => props.color || profileColor.value);

    return {
      initials,
      avatarColor,
    };
  },
});
