import { defineComponent } from 'vue';

/**
 * A grid area is the basic container corresponding to a grid area defined in the NeonGrid component.
 */
export default defineComponent({
  name: 'NeonGridArea',
  props: {
    /**
     * Identifier of the grid area (this should match a named area in the grid layout)
     */
    id: { type: String, required: true },
  },
});
