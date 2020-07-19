import { Component, Vue } from 'vue-property-decorator';
import { NeonCard, NeonCardBody, NeonCardHeader, NeonLogo } from '../../../../components';
import Example from '../../../components/example/Example.vue';

@Component({
  components: {
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
    NeonLogo,
    Example,
  },
})
export default class Logo extends Vue {
  private example = {
    title: 'Logo example',
    template: `<neon-logo />`,
  };
}
