import { Component, Vue } from 'vue-property-decorator';
import { NeonCard, NeonCardBody, NeonCardHeader, NeonLink } from '../../../components';

@Component({
  components: {
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
    NeonLink,
  },
})
export default class Home extends Vue {
  private static readonly developerType = ['React', 'Angular', 'GWT', 'Scala.js', 'Less', 'Lodash', 'JQuery'];

  private get developers() {
    return Home.developerType[Math.floor(Math.random() * 10) % Home.developerType.length];
  }
}
