import { Component, Vue } from 'vue-property-decorator';
import { NeonCard, NeonCardBody, NeonCardHeader, NeonPre } from '../../../../components';

@Component({
  components: {
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
    NeonPre,
  },
})
export default class GettingStarted extends Vue {}
