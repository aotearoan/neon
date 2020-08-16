import { Component, Vue } from 'vue-property-decorator';
import { NeonCard, NeonCardBody, NeonCardHeader } from '../../../../components';
import AppPre from '../../../components/pre/AppPre.vue';

@Component({
  components: {
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
    AppPre,
  },
})
export default class GettingStarted extends Vue {}
