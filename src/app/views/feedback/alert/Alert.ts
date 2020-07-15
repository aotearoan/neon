import { Component, Vue } from 'vue-property-decorator';
import { NeonAlertService, NeonButton, NeonCard, NeonCardBody, NeonCardHeader, NeonPre } from '../../../../components';

@Component({
  components: {
    NeonButton,
    NeonCard,
    NeonCardHeader,
    NeonCardBody,
    NeonPre,
  },
})
export default class Alert extends Vue {
  private infoAlert() {
    NeonAlertService.info('Info alert', 'This is an example of an info alert.');
  }

  private successAlert() {
    NeonAlertService.success('Success alert', 'This is an example of a success alert.');
  }

  private warnAlert() {
    NeonAlertService.warning('Warning alert', 'This is an example of a warning alert.');
  }

  private errorAlert() {
    NeonAlertService.error('Error alert', 'This is an example of an error alert.');
  }
}
