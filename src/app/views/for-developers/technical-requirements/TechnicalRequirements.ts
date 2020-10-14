import { Component, Vue } from 'vue-property-decorator';
import { NeonAnchor, NeonCard, NeonCardBody, NeonCardHeader, NeonLink, NeonNote } from '../../../../components';

@Component({
  components: {
    NeonAnchor,
    NeonCard,
    NeonCardHeader,
    NeonCardBody,
    NeonLink,
    NeonNote,
  },
})
export default class TechnicalRequirements extends Vue {}
