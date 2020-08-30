import { Component, Vue } from 'vue-property-decorator';
import { NeonCard, NeonCardBody, NeonCardHeader, NeonLogo } from '../../../../components';
import Examples from '../../../components/examples/Examples.vue';

@Component({
  components: {
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
    NeonLogo,
    Examples,
  },
})
export default class Logo extends Vue {
  private example = {
    title: 'Logo example',
    template: `<neon-logo />`,
  };
}
