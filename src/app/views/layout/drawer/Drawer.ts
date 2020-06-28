import { Component, Vue } from 'vue-property-decorator';
import { NeonButton, NeonCard, NeonCardBody, NeonCardHeader, NeonDrawer } from '../../../../components';

@Component({
  components: {
    NeonButton,
    NeonDrawer,
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
  },
})
export default class Drawer extends Vue {
  private openLeft = false;
  private openRight = false;
  private openTop = false;
  private openBottom = false;

  get contents() {
    return `<h6>Drawer content goes here</h6>
              <p>
                Bacon ipsum dolor amet venison pig ball tip salami pork chop, drumstick tenderloin sirloin pork loin.
                Shoulder ham venison pork leberkas. Shankle pork loin pork belly turducken rump landjaeger pastrami
                tongue leberkas picanha t-bone alcatra fatback meatball. T-bone tenderloin landjaeger beef pork chop.
                Picanha ham hock t-bone, tenderloin flank frankfurter pig filet mignon bacon chuck.
              </p>
              <p>
                Ribeye chicken t-bone burgdoggen kevin shank shankle. Turkey venison pastrami short loin shankle sausage
                prosciutto. Hamburger pancetta ribeye, ham ground round capicola shank beef. Flank shoulder strip steak
                rump venison short loin corned beef. Ground round turkey bresaola meatball pork loin, buffalo chuck pork
                ribeye kielbasa.
              </p>`;
  }
}
