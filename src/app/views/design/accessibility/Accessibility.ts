import { Component, Vue } from 'vue-property-decorator';
import { NeonCard, NeonCardBody, NeonCardHeader, NeonLink, NeonNote } from '../../../../components';

@Component({
  components: {
    NeonCard,
    NeonCardHeader,
    NeonCardBody,
    NeonLink,
    NeonNote,
  },
})
export default class Accessibility extends Vue {}
