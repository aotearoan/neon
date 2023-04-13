import { defineComponent, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { NeonCard, NeonCardBody, NeonCardHeader } from '@/neon';
import Editor from '@/app/components/editor/Editor.vue';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names,vue/no-reserved-component-names
  name: 'Source',
  components: {
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
    Editor,
  },
  setup() {
    const route = useRoute();
    const className = ref<string | null>(null);
    const ghLink = ref<string | null>(null);
    const template = ref<string | null>(null);

    watch(
      () => route.path,
      (to) => {
        className.value = to.split('/').pop() || null;
        if (className.value && className.value.indexOf('Neon') === 0) {
          fetch(`${import.meta.env.VITE_RESOURCE_URL}files/${to}.ts`).then((response) => {
            response.text().then((file) => {
              template.value = file;
            });
          });
          ghLink.value = `https://github.com/aotearoan/neon/tree/master/src/common${to}.ts`;
        }
      },
      { immediate: true },
    );

    return {
      className,
      ghLink,
      template,
    };
  },
});
