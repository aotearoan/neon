import { Component, Vue } from 'vue-property-decorator';
import { NeonAnchor, NeonCard, NeonCardBody, NeonCardHeader, NeonNote } from '../../../../components';

@Component({
  components: {
    NeonAnchor,
    NeonCard,
    NeonCardHeader,
    NeonCardBody,
    NeonNote,
  },
})
export default class Typography extends Vue {}
