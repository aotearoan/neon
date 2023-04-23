import { defineComponent } from 'vue';
import type { NeonTabModel } from '@/common/models/NeonTabModel';
import { NeonFunctionalColor } from '@/common/enums/NeonFunctionalColor';
import { NeonSize } from '@/common/enums/NeonSize';
import NeonIcon from '@/components/presentation/icon/NeonIcon.vue';

/**
 * A component for displaying tabbed content.
 */
export default defineComponent({
  name: 'NeonTabs',
  components: {
    NeonIcon,
  },
  props: {
    /**
     * The list of tabs to display.
     * */
    tabs: { type: Array as () => Array<NeonTabModel>, required: true },
    /**
     * The key of the selected tab.
     */
    modelValue: { type: String, required: true },
    /**
     * The tab highlight color (excludes low-contrast).
     */
    color: { type: String as () => NeonFunctionalColor, default: NeonFunctionalColor.Primary },
    /**
     * The tab size.
     */
    size: { type: String as () => NeonSize, default: NeonSize.Medium },
    /**
     * Display a border underlining all tabs. When tabs are in an element with a border-bottom it is preferable to omit the tabs border-bottom
     */
    underline: { type: Boolean, default: true },
  },
  emits: [
    /**
     * Emitted when the selected tab is changed.
     * @type {string} The key of the selected tab.
     */
    'update:modelValue',
  ],
  setup(_props, { emit }) {
    const onClick = (key: string, changeFocus = false) => {
      if (changeFocus) {
        const tab = document.getElementById(`${key}ButtonContainer`);
        if (tab) {
          tab.focus();
        }
      }
      emit('update:modelValue', key);
    };

    return {
      onClick,
    };
  },
});
