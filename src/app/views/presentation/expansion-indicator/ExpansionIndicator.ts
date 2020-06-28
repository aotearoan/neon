import { Component, Vue } from 'vue-property-decorator';
import { NeonCard, NeonCardBody, NeonCardHeader, NeonExpansionIndicator } from '../../../../components';

@Component({
  components: {
    NeonCard,
    NeonCardHeader,
    NeonCardBody,
    NeonExpansionIndicator,
  },
})
export default class ExpansionIndicator extends Vue {
  private examples = `<div>
  <neon-expansion-indicator :expanded="false" />
  <neon-expansion-indicator :expanded="true" />
</div>`;
}
