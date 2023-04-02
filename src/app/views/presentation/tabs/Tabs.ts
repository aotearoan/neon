import { defineComponent, onMounted, ref } from 'vue';
import { NeonCard, NeonCardBody, NeonTab, NeonTabs } from '@/neon';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Tabs',
  components: {
    NeonCard,
    NeonCardBody,
    NeonTab,
    NeonTabs,
    ComponentDocumentation,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('Present content in tabbed panes');

    const tabContent = ref(
      'Spicy jalapeno bacon ipsum dolor amet biltong porchetta cupim sausage pork loin. Ham porchetta brisket, kielbasa ham hock sirloin ground round strip steak jowl jerky short ribs pork loin frankfurter. Flank turkey cupim chuck pastrami picanha short loin shankle. Tongue pork loin turducken, tenderloin pork belly ham boudin spare ribs sirloin pancetta jerky picanha corned beef ribeye alcatra. Kielbasa salami flank cow, beef sausage biltong jerky prosciutto strip steak. Meatball prosciutto ham hock salami, jowl tongue kevin fatback ground round beef ribs bacon pork loin meatloaf turducken strip steak.',
    );

    const data = ref({
      selected: 'tab1',
      toggleSelected: (selected: string) => {
        data.value = { ...data.value, selected };
      },
      tabs: [
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
      ],
    });

    const examples = ref([
      {
        title: 'Tabbed content',
        template: `
          <neon-tabs :tabs="tabs" :model-value="selected" @update:modelValue="toggleSelected">
          <neon-tab v-for="(tab, index) in tabs" :key="tab.key" :tab="tab" :selected="selected === tab.key">
            <h6>Tab {{ index + 1 }}</h6>
            <span>${tabContent.value}</span>
          </neon-tab>
          </neon-tabs>`,
        data,
      },
    ]);

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonTabs')));

    return {
      menuModel,
      headline,
      examples,
      data,
    };
  },
});
