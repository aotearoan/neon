import { defineComponent, onMounted, ref } from 'vue';
import { NeonCard, NeonCardBody, NeonExpansionPanel } from '@/neon';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';

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

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data = ref<Record<string, any>>({
      expanded1: false,
      expanded2: false,
      expanded3: false,
      expanded4: false,
      expanded5: false,
      expanded6: false,
      expanded7: false,
      expanded8: false,
      toggleExpanded: (key: string) => {
        data.value[key] = !data.value[key];
        data.value = { ...data.value };
      },
    });

    const content =
      ref(`<p>Spicy jalapeno bacon ipsum dolor amet biltong porchetta cupim sausage pork loin. Ham porchetta
brisket, kielbasa ham hock sirloin ground round strip steak jowl jerky short ribs pork loin frankfurter.</p>`);

    const examples = ref([
      {
        title: 'Expansion panel sizes',
        template: `
          <div class="example--vertical example-expansion-panel">
          <neon-expansion-panel :model-value="expanded1" label="Small" size="s"
                                @update:modelValue="toggleExpanded('expanded1')">
            ${content.value}
          </neon-expansion-panel>
          <neon-expansion-panel :model-value="expanded2" label="Medium" size="m"
                                @update:modelValue="toggleExpanded('expanded2')">
            ${content.value}
          </neon-expansion-panel>
          <neon-expansion-panel :model-value="expanded3" label="Large" size="l"
                                @update:modelValue="toggleExpanded('expanded3')">
            ${content.value}
          </neon-expansion-panel>
          </div>`,
        data,
      },
      {
        title: 'More styles',
        template: `
          <div class="example--vertical example-expansion-panel">
          <neon-expansion-panel :model-value="expanded4" icon="contrast" label="With icon"
                                @update:modelValue="toggleExpanded('expanded4')">
            ${content.value}
          </neon-expansion-panel>
          <neon-expansion-panel :model-value="expanded5" color="success" icon="contrast" label="Colored label"
                                @update:modelValue="toggleExpanded('expanded5')">
            ${content.value}
          </neon-expansion-panel>
          <neon-expansion-panel :full-width="true" :model-value="expanded6" label="Full width"
                                @update:modelValue="toggleExpanded('expanded6')">
            ${content.value}
          </neon-expansion-panel>
          <neon-expansion-panel :model-value="expanded7" :disabled="true" label="Disabled"
                                @update:modelValue="toggleExpanded('expanded7')">
            ${content.value}
          </neon-expansion-panel>
          <neon-expansion-panel :model-value="expanded8" position="bottom" label="From bottom"
                                @update:modelValue="toggleExpanded('expanded8')">
            ${content.value}
          </neon-expansion-panel>
          </div>`,
        data,
      },
    ]);

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonExpansionPanel')));

    return {
      menuModel,
      headline,
      examples,
      data,
    };
  },
});
