import { defineComponent, onMounted, ref } from 'vue';
import { NeonCard, NeonCardBody, NeonExpansionIndicator } from '@/neon';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';
import Editor from '@/app/components/editor/Editor.vue';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';

export default defineComponent({
  name: 'ExpansionIndicator',
  components: {
    NeonCard,
    NeonCardBody,
    NeonExpansionIndicator,
    ComponentDocumentation,
    Editor,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('Indicate expanded / collapsed');

    const template = `<neon-expansion-indicator :expanded="false" />
<neon-expansion-indicator :expanded="true" />
<neon-expansion-indicator :expanded="false" color="primary" />
<div class="example-inverse-bg">
  <neon-expansion-indicator :expanded="false" :inverse="true" />
</div>
<neon-expansion-indicator :disabled="true" />`;

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonExpansionIndicator')));

    return {
      menuModel,
      headline,
      template,
    };
  },
});
