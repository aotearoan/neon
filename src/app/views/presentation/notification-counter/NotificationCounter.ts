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

  private example = `<div class="collection">
  <span class="positioned-element">No value<neon-notification-counter /></span>
  <span class="positioned-element">With value<neon-notification-counter count="9" /></span>
  <span class="positioned-element">Large number<neon-notification-counter count="42" /></span>
</div>`;

  private examples = [
    {
      title: 'Notification counters',
      template: this.example,
    },
  ];

  public mounted() {
    this.menuModel = Menu.getComponentConfig('NeonNotificationCounter');
  }
}
