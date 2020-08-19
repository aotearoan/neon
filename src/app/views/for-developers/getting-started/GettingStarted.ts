import { Component, Vue } from 'vue-property-decorator';
import { NeonAnchor, NeonCard, NeonCardBody, NeonCardHeader } from '../../../../components';
import AppPre from '../../../components/pre/AppPre.vue';

@Component({
  components: {
    NeonAnchor,
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
    AppPre,
  },
})
export default class GettingStarted extends Vue {}
