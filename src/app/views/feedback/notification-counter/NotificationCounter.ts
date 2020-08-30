import { Component, Vue } from 'vue-property-decorator';
import { NeonNotificationCounter } from '../../../../components';
import ComponentDocumentation from '../../../components/component-documentation/ComponentDocumentation.vue';
import { Menu, MenuModel } from '../../../Menu';

@Component({
  components: {
    NeonNotificationCounter,
    ComponentDocumentation,
  },
})
export default class NotificationCounter extends Vue {
  private menuModel: MenuModel | null = null;

  private headline = 'A component for notifying the user of new items';

  private example = `<div class="collection">
  <neon-switch label="Activate notifications" v-model="active" />
  <span class="positioned-element">No value<neon-notification-counter :active="active" /></span>
  <span class="positioned-element">With value<neon-notification-counter count="9" :active="active" /></span>
  <span class="positioned-element">Large number<neon-notification-counter count="42" :active="active" /></span>
  <span class="positioned-element">With color<neon-notification-counter count="9" color="brand" :active="active" /></span>
</div>`;

  private examples = [
    {
      title: 'Notification counters',
      template: this.example,
      data: {
        active: true,
      },
    },
  ];

  public mounted() {
    this.menuModel = Menu.getComponentConfig('NeonNotificationCounter');
  }
}
