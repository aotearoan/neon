import { Component, Vue } from 'vue-property-decorator';
import { NeonCard, NeonCardBody, NeonCardHeader, NeonNotificationCounter } from '../../../../components';

@Component({
  components: {
    NeonCard,
    NeonCardHeader,
    NeonCardBody,
    NeonNotificationCounter,
  },
})
export default class NotificationCounter extends Vue {
  private example = `<div>
  <span class="positioned-element">No value<neon-notification-counter /></span>
  <span class="positioned-element">With value<neon-notification-counter count="9" /></span>
  <span class="positioned-element">Large number<neon-notification-counter count="42" /></span>
</div>`;
}
