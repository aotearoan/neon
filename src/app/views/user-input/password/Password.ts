import { defineComponent, onMounted, ref } from 'vue';
import { NeonCard, NeonCardBody, NeonCardHeader, NeonInput } from '@/neon';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Password',
  components: {
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
    NeonInput,
    ComponentDocumentation,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('An HTML password input');

    const data = ref({
      value: '1234567',
    });

    const passwordExample = `<div class="neon-vertically-spaced">
  <neon-password v-model="value" />
</div>`;

    const examples = ref([
      {
        template: passwordExample,
        data,
      },
    ]);

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonPassword')));

    return {
      menuModel,
      headline,
      data,
      examples,
    };
  },
});
