import { defineComponent, onMounted, ref } from 'vue';
import { NeonCard, NeonCardBody, NeonNotificationCounter, NeonStack, NeonSwitch } from '@/neon';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';
import Editor from '@/app/components/editor/Editor.vue';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';

export default defineComponent({
  name: 'NotificationCounter',
  components: {
    NeonCard,
    NeonCardBody,
    NeonNotificationCounter,
    NeonStack,
    NeonSwitch,
    ComponentDocumentation,
    Editor,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('A component for notifying the user of new items');

    const active = ref(true);

    const template = `<neon-notification-counter :active="active" />
<neon-notification-counter :count="9" :active="active" />
<neon-notification-counter :count="42" :active="active" />
<neon-notification-counter :count="9" color="brand" :active="active" />`;

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonNotificationCounter')));

    return {
      menuModel,
      headline,
      active,
      template,
    };
  },
});
