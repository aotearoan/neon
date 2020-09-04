import { Component, Vue } from 'vue-property-decorator';
import { NeonCard, NeonCardBody, NeonNotificationCounter } from '../../../../components';
import ComponentDocumentation from '../../../components/component-documentation/ComponentDocumentation.vue';
import { Menu, MenuModel } from '../../../Menu';
import NeonSwitch from '../../../../components/user-input/switch/NeonSwitch';

@Component({
  components: {
    NeonCard,
    NeonCardBody,
    NeonNotificationCounter,
    NeonSwitch,
    ComponentDocumentation,
  },
})
export default class NotificationCounter extends Vue {
  private menuModel: MenuModel | null = null;

  private headline = 'A component for notifying the user of new items';

  private example = `<div class="example--vertical">
  <div class="example--horizontal example--margin-top">
    <span class="positioned-element">No value<neon-notification-counter :active="active" /></span>
    <span class="positioned-element">With value<neon-notification-counter count="9" :active="active" /></span>
    <span class="positioned-element">Large number<neon-notification-counter count="42" :active="active" /></span>
    <span class="positioned-element">With color<neon-notification-counter count="9" color="brand" :active="active" /></span>
  </div>
  <neon-switch label="Activate notifications" v-model="active" />
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
