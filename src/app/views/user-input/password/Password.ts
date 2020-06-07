import { Component, Vue } from 'vue-property-decorator';
import { NeonCard, NeonCardBody, NeonCardHeader, NeonInput } from '@/components';

@Component({
  components: {
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
    NeonInput,
  },
})
export default class Password extends Vue {
  private data = {
    value: '1234567',
  };

  private passwordExample = `<div class="neon-vertically-spaced">
  <neon-password v-model="value" />
</div>`;
}
