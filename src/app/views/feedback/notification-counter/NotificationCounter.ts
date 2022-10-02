import { defineComponent, onMounted, ref } from 'vue';
import { NeonCard, NeonCardBody, NeonNotificationCounter, NeonSwitch } from '@/neon';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';

export default defineComponent({
  name: 'NotificationCounter',
  components: {
    NeonCard,
    NeonCardBody,
    NeonNotificationCounter,
    NeonSwitch,
    ComponentDocumentation,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('A component for notifying the user of new items');

    const example = ref(`<div class="example--vertical">
  <div class="example--horizontal example--margin-top">
    <span class="positioned-element">No value<neon-notification-counter :active="active" /></span>
    <span class="positioned-element">With value<neon-notification-counter :count="9" :active="active" /></span>
    <span class="positioned-element">Large number<neon-notification-counter :count="42" :active="active" /></span>
    <span class="positioned-element">With color<neon-notification-counter :count="9" color="brand" :active="active" /></span>
  </div>
  <neon-switch label="Activate notifications" v-model="active" />
</div>`);

    const examples = ref([
      {
        title: 'Notification counters',
        template: example.value,
        data: {
          active: true,
        },
      },
    ]);

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonNotificationCounter')));

    return {
      menuModel,
      headline,
      example,
      examples,
    };
  },
});
