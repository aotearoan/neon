import { defineComponent, onMounted, ref } from 'vue';
import { NeonCard, NeonCardBody, NeonExpansionPanel, NeonStack } from '@/neon';
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
    NeonStack,
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

    const content = `Spicy jalapeno bacon ipsum dolor amet biltong porchetta cupim sausage pork loin. Ham porchetta
brisket, kielbasa ham hock sirloin ground round strip steak jowl jerky short ribs pork loin frankfurter.`;

    const sizesTemplate = `<neon-expansion-panel v-model="expanded1"
                      label="Small"
                      size="s"
>
  <p>{{ content }}</p>
</neon-expansion-panel>
<neon-expansion-panel v-model="expanded2"
                      label="Medium"
                      size="m"
>
  <p>{{ content }}</p>
</neon-expansion-panel>
<neon-expansion-panel v-model="expanded3"
                      label="Large"
                      size="l"
>
  <p>{{ content }}</p>
</neon-expansion-panel>`;

    const moreTemplate = `<neon-expansion-panel v-model="expanded4"
                      icon="contrast"
                      label="With icon"
>
  <p>{{ content }}</p>
</neon-expansion-panel>
<neon-expansion-panel v-model="expanded5"
                      color="success"
                      icon="contrast"
                      label="Colored label"
>
  <p>{{ content }}</p>
</neon-expansion-panel>
<neon-expansion-panel v-model="expanded6"
                      :full-width="true"
                      label="Full width"
>
  <p>{{ content }}</p>
</neon-expansion-panel>
<neon-expansion-panel v-model="expanded7"
                      :disabled="true"
                      label="Disabled"
>
  <p>{{ content }}</p>
</neon-expansion-panel>
<neon-expansion-panel v-model="expanded8"
                      label="From bottom"
                      position="bottom"
>
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
    };
  },
});
