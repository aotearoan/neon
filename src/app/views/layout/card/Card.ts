import { Component, Vue } from 'vue-property-decorator';
import { NeonCard, NeonCardBody, NeonCardHeader } from '@/components';

@Component({
  components: {
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
  },
})
export default class Card extends Vue {}
