import { Component, Vue } from 'vue-property-decorator';
import { NeonCard, NeonCardBody, NeonCardHeader } from '../../../../components';

@Component({
  components: {
    NeonCard,
    NeonCardHeader,
    NeonCardBody,
  },
})
export default class Alert extends Vue {}
