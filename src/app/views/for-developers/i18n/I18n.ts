import { Component, Vue } from 'vue-property-decorator';
import { NeonCard, NeonCardBody, NeonCardHeader, NeonLink } from '../../../../components';

@Component({
  components: {
    NeonCard,
    NeonCardHeader,
    NeonCardBody,
    NeonLink,
  },
})
export default class I18n extends Vue {}
