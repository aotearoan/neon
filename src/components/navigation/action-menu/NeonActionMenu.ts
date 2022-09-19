import { defineComponent } from 'vue';
import type { NeonActionMenuModel } from '../../../common/models/NeonActionMenuModel';
import NeonLink from '../../navigation/link/NeonLink.vue';
import { NeonFunctionalColor } from '../../../common/enums/NeonFunctionalColor';

/**
 * An action menu is designed for the NeonSideNav component and is designed to behave like tabs where selecting a different item switches the contents in the main page.
 */
export default defineComponent({
  name: 'NeonActionMenu',
  components: {
    NeonLink,
  },
  props: {
    /**
     * The list of action items to display in the menu.
     */
    model: { type: Array as () => Array<NeonActionMenuModel>, required: true },
    /**
     * The key of the selected model action item.
     */
    modelValue: { type: String, required: true },
    /**
     * The toggle chip color.
     */
    color: { type: String as () => NeonFunctionalColor, default: NeonFunctionalColor.Primary },
  },
  emits: [
    /**
     * emitted when the user clicks on a new action menu item.
     * @type {string} the key of the newly selected action menu item.
     */
    'update:modelValue',
  ],
  setup(props, { emit }) {
    const onClick = (key: string) => {
      if (props.modelValue !== key) {
        emit('update:modelValue', key);
      }
    };

    return {
      onClick,
    };
  },
});
