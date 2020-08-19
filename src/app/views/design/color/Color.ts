import { Component, Vue } from 'vue-property-decorator';
import { NeonAnchor, NeonCard, NeonCardBody, NeonCardHeader } from '../../../../components';
import AppPre from '../../../components/pre/AppPre.vue';
import Example from '../../../components/example/Example.vue';

@Component({
  components: {
    NeonAnchor,
    NeonCard,
    NeonCardHeader,
    NeonCardBody,
    AppPre,
    Example,
  },
})
export default class Color extends Vue {
  private example = {
    template: `<div>
  <div class="neon-color-text">This is the default text color</div>
  <div class="color-example-inverse-bg neon-color-inverse">This is the inverse text color</div>
  <div class="neon-color-text-brand">This is the brand text color</div>
  <div class="neon-color-text-primary">This is the primary text color</div>
  <div class="neon-color-text-info">This is the info text color</div>
  <div class="neon-color-text-success">This is the success text color</div>
  <div class="neon-color-text-warn">This is the warn text color</div>
  <div class="neon-color-text-error">This is the error text color</div>
  <div class="neon-color-text-neutral">This is the neutral text color</div>
  <div class="neon-color-text-high-contrast">This is the high-contrast text color</div>
  <div class="neon-color-text-low-contrast">This is the low contrast text color</div>
</div>`,
  };
}
