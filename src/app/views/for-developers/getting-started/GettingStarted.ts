import { Component, Vue } from 'vue-property-decorator';
import { NeonCard, NeonCardBody, NeonCardHeader } from '@/components';

@Component({
  components: {
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
  },
})
export default class GettingStarted extends Vue {
  private get baseUrl() {
    return process.env.VUE_APP_BASE_URL;
  }
}
