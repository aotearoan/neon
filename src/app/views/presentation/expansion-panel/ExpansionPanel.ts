import { defineComponent, onMounted, ref } from 'vue';
import { NeonCard, NeonCardBody, NeonExpansionPanel } from '@/neon';
import ComponentDocumentation from '../../../components/component-documentation/ComponentDocumentation.vue';
import type { MenuModel } from '../../../Menu';
import { Menu } from '../../../Menu';

export default defineComponent({
  name: 'ExpansionPanel',
  components: {
    NeonCard,
    NeonCardBody,
    NeonExpansionPanel,
    ComponentDocumentation,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('Expandable/collapsible container for content');

    const data = ref({
      expanded1: false,
      expanded2: false,
      expanded3: false,
      expanded4: false,
      expanded5: false,
      expanded6: false,
      expanded7: false,
      expanded8: false,
    });

    const content = ref(`<p>Spicy jalapeno bacon ipsum dolor amet biltong porchetta cupim sausage pork loin. Ham porchetta
brisket, kielbasa ham hock sirloin ground round strip steak jowl jerky short ribs pork loin frankfurter.</p>`);

    const examples = ref([
      {
        title: 'Expansion panel sizes',
        template: `
          <div class="example--vertical example-expansion-panel">
          <neon-expansion-panel v-model="expanded1" label="Small" size="s">
            ${content.value}
          </neon-expansion-panel>
          <neon-expansion-panel v-model="expanded2" label="Medium" size="m">
            ${content.value}
          </neon-expansion-panel>
          <neon-expansion-panel v-model="expanded3" label="Large" size="l">
            ${content.value}
          </neon-expansion-panel>
          </div>`,
        data: data.value,
      },
      {
        title: 'More styles',
        template: `
          <div class="example--vertical example-expansion-panel">
          <neon-expansion-panel v-model="expanded4" icon="contrast" label="With icon">
            ${content.value}
          </neon-expansion-panel>
          <neon-expansion-panel v-model="expanded5" color="success" icon="contrast" label="Colored label">
            ${content.value}
          </neon-expansion-panel>
          <neon-expansion-panel :full-width="true" v-model="expanded6" label="Full width">
            ${content.value}
          </neon-expansion-panel>
          <neon-expansion-panel v-model="expanded7" :disabled="true" label="Disabled">
            ${content.value}
          </neon-expansion-panel>
          <neon-expansion-panel v-model="expanded8" position="bottom" label="From bottom">
            ${content.value}
          </neon-expansion-panel>
          </div>`,
        data: data.value,
      },
    ]);

    onMounted(() => menuModel.value = Menu.getComponentConfig('NeonExpansionPanel'));

    return {
      menuModel,
      headline,
      examples,
      data,
    };
  },
});
