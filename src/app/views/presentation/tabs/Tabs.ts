import { defineComponent, onMounted, ref } from 'vue';
import { NeonCard, NeonCardBody, NeonStack, NeonTab, NeonTabs } from '@/neon';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';
import Editor from '@/app/components/editor/Editor.vue';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Tabs',
  components: {
    NeonCard,
    NeonCardBody,
    NeonTab,
    NeonTabs,
    NeonStack,
    ComponentDocumentation,
    Editor,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('Present content in tabbed panes');

    const tabContent = `Spicy jalapeno bacon ipsum dolor amet biltong porchetta cupim sausage pork loin. Ham porchetta 
brisket, kielbasa ham hock sirloin ground round strip steak jowl jerky short ribs pork loin frankfurter. Flank turkey 
cupim chuck pastrami picanha short loin shankle. Tongue pork loin turducken, tenderloin pork belly ham boudin spare 
ribs sirloin pancetta jerky picanha corned beef ribeye alcatra. Kielbasa salami flank cow, beef sausage biltong jerky 
prosciutto strip steak. Meatball prosciutto ham hock salami, jowl tongue kevin fatback ground round beef ribs bacon pork 
loin meatloaf turducken strip steak.`;

    const tabs = [
      {
        key: 'tab1',
        icon: 'heart',
        label: 'Tab one',
      },
      {
        key: 'tab2',
        label: 'Tab two',
      },
      {
        key: 'tab3',
        label: 'Tab three',
      },
    ];

    const selected = ref('tab1');

    const template = `<neon-tabs v-model="selected" :tabs="tabs">
  <neon-tab v-for="(tab, index) in tabs" :key="tab.key" :selected="selected === tab.key" :tab="tab">
    <h6>Tab {{ index + 1 }}</h6>
    <span>{{ tabContent }}</span>
  </neon-tab>
</neon-tabs>`;

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonTabs')));

    return {
      menuModel,
      headline,
      selected,
      template,
      tabs,
      tabContent,
    };
  },
});
