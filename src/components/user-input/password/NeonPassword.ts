import { computed, defineComponent, ref } from 'vue';
import NeonInput from '../input/NeonInput.vue';

/**
 * <p>The <strong>NeonPassword</strong> component is the equivalent of an
 * <strong>&lt;input type="password" /&gt;</strong>. It supports the same properties as
 * <a href="/user-input/input"><strong>NeonInput</strong></a> with the exception of the icon which is used to toggle the
 * display of the password.
 * </p>
 */
export default defineComponent({
  name: 'NeonPassword',
  components: {
    NeonInput,
  },
  emits: [
    /**
     * Emitted when the show/hide password icon is clicked
     *
     * @type {void}
     */
    'icon-click',
  ],
  setup(props, { attrs, emit }) {
    const show = ref(false);

    const sanitizedAttributes = computed(() => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { iconClicked, ...sanitized } = attrs;
      return sanitized;
    });

    const iconClicked = () => {
      show.value = !show.value;
      emit('icon-click');
    };

    return {
      show,
      sanitizedAttributes,
      iconClicked,
    };
  },
});
