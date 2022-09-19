import { defineComponent } from 'vue';
import type { ExampleModel } from '../example/ExampleModel';
import Example from '../example/Example.vue';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Examples',
  components: {
    Example,
  },
  props: {
    examples: { type: Array as () => Array<ExampleModel>, required: true },
  },
});
