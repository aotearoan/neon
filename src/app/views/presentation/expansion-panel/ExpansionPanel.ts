import type { Ref } from 'vue';
import { defineComponent, onMounted, ref } from 'vue';
import { NeonCard, NeonCardBody, NeonExpansionPanel } from '@/neon';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';
import Editor from '@/app/components/editor/Editor.vue';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';

export default defineComponent({
  name: 'ExpansionPanel',
  components: {
    NeonCard,
    NeonCardBody,
    NeonExpansionPanel,
    ComponentDocumentation,
    Editor,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('Expandable/collapsible container for content');

    const expanded1 = ref(false);
    const expanded2 = ref(false);
    const expanded3 = ref(false);
    const expanded4 = ref(false);
    const expanded5 = ref(false);
    const expanded6 = ref(false);
    const expanded7 = ref(false);
    const expanded8 = ref(false);

    const data: Record<string, Ref<boolean>> = {
      expanded1,
      expanded2,
      expanded3,
      expanded4,
      expanded5,
      expanded6,
      expanded7,
      expanded8,
    };

    const toggleExpanded = (key: string) => {
      if (data[key]) {
        data[key].value = !data[key].value;
      }
    };

    const content = `Spicy jalapeno bacon ipsum dolor amet biltong porchetta cupim sausage pork loin. Ham porchetta
brisket, kielbasa ham hock sirloin ground round strip steak jowl jerky short ribs pork loin frankfurter.`;

    const sizesTemplate = `<neon-expansion-panel :model-value="expanded1"
                      label="Small"
                      size="s"
                      @update:modelValue="toggleExpanded('expanded1')">
  <p>{{ content }}</p>
</neon-expansion-panel>
<neon-expansion-panel :model-value="expanded2"
                      label="Medium"
                      size="m"
                      @update:modelValue="toggleExpanded('expanded2')">
  <p>{{ content }}</p>
</neon-expansion-panel>
<neon-expansion-panel :model-value="expanded3"
                      label="Large"
                      size="l"
                      @update:modelValue="toggleExpanded('expanded3')">
  <p>{{ content }}</p>
</neon-expansion-panel>`;

    const moreTemplate = `<neon-expansion-panel :model-value="expanded4"
                      icon="contrast" label="With icon"
                      @update:modelValue="toggleExpanded('expanded4')">
  <p>{{ content }}</p>
</neon-expansion-panel>
<neon-expansion-panel :model-value="expanded5"
                      color="success"
                      icon="contrast"
                      label="Colored label"
                      @update:modelValue="toggleExpanded('expanded5')">
  <p>{{ content }}</p>
</neon-expansion-panel>
<neon-expansion-panel :full-width="true"
                      :model-value="expanded6"
                      label="Full width"
                      @update:modelValue="toggleExpanded('expanded6')">
  <p>{{ content }}</p>
</neon-expansion-panel>
<neon-expansion-panel :model-value="expanded7"
                      :disabled="true"
                      label="Disabled"
                      @update:modelValue="toggleExpanded('expanded7')">
  <p>{{ content }}</p>
</neon-expansion-panel>
<neon-expansion-panel :model-value="expanded8"
                      position="bottom"
                      label="From bottom"
                      @update:modelValue="toggleExpanded('expanded8')">
  <p>{{ content }}</p>
</neon-expansion-panel>`;

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonExpansionPanel')));

    return {
      menuModel,
      headline,
      sizesTemplate,
      moreTemplate,
      content,
      expanded1,
      expanded2,
      expanded3,
      expanded4,
      expanded5,
      expanded6,
      expanded7,
      expanded8,
      toggleExpanded,
    };
  },
});
