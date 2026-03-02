import { defineComponent } from 'vue';
import NeonInline from '@/components/layout/inline/NeonInline.vue';
import NeonNote from '@/components/feedback/note/NeonNote.vue';
import type { NeonNoteModel } from '@/common/models/NeonNoteModel';

/**
 * A component for rendering a page header with slots for a subtitle and actions and the possibility to render an on
 * page note.
 */
export default defineComponent({
  name: 'NeonPageHeader',
  components: {
    NeonNote,
    NeonInline,
  },
  props: {
    /**
     * The title of the page.
     */
    title: { type: String, required: true },
    /**
     * A note to display on the page.
     */
    note: { type: Object as () => NeonNoteModel },
  },
});
