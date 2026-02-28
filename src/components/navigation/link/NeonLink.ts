import { computed, defineComponent, useAttrs } from 'vue';
import { NeonOutlineStyle } from '@/common/enums/NeonOutlineStyle';
import NeonIcon from '@/components/presentation/icon/NeonIcon.vue';
import { useRoute, useRouter } from 'vue-router';

/**
 * An HTML anchor component which handles VueRouter links (internal), href links (external) and clickable links (no href).
 */
export default defineComponent({
  name: 'NeonLink',
  components: {
    NeonIcon,
  },
  props: {
    /**
     * The href of the link, this can be an internal (relative or absolute) or an external link.
     */
    href: { type: String, default: null },
    /**
     * set to true if you would like a completely unstyled link. This is useful for creating a complex component which may use NeonLink.
     */
    noStyle: { type: Boolean, default: false },
    /**
     * Style of the outline to use when the link has focus, use <em>text</em> for wrapping text content and
     * <em>border</em> for tooltips wrapping "block" elements, e.g. buttons.
     */
    outlineStyle: { type: String as () => NeonOutlineStyle, default: NeonOutlineStyle.Text },
    /**
     * Display an external link icon to the right of the link indicating clicking it will take the user to another site.
     */
    externalIndicator: { type: Boolean, default: false },
  },
  emits: [
    /**
     * Emitted when the user triggers the link by clicking on it or hitting Enter or Space when the link has focus.
     * @type {void}
     */
    'click',
  ],
  setup(props, { emit }) {
    const attrs = useAttrs();
    const router = useRouter();
    const route = useRoute();
    const routerUrl = computed(() => (props.href?.indexOf('/') === 0 ? props.href : undefined));

    const activeRoute = computed(() => props.href && props.href.indexOf(route.fullPath) === 0);
    const exactRoute = computed(() => activeRoute.value && props.href === route.fullPath);

    const sanitizedAttributes = computed(() => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { onClick, ...sanitized } = attrs;
      return sanitized;
    });

    const onClick = () => {
      emit('click');
    };

    const onSpace = async () => {
      onClick();

      if (routerUrl.value) {
        await router.push(props.href);
      } else if (props.href) {
        window.location.replace(props.href);
      }
    };

    return {
      routerUrl,
      sanitizedAttributes,
      activeRoute,
      exactRoute,
      onClick,
      onSpace,
    };
  },
});
