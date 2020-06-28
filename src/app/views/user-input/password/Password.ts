import { Component, Vue } from 'vue-property-decorator';
import { NeonCard, NeonCardBody, NeonCardHeader, NeonInput } from '../../../../components';
import { Menu, MenuModel } from '../../../Menu';
import ComponentDocumentation from '../../../components/component-documentation/ComponentDocumentation.vue';

@Component({
  components: {
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
    NeonInput,
    ComponentDocumentation,
  },
})
export default class Password extends Vue {
  private menuModel: MenuModel | null = null;

  private data = {
    value: '1234567',
  };

  private passwordExample = `<div class="neon-vertically-spaced">
  <neon-password v-model="value" />
</div>`;

  private examples = [
    {
      template: this.passwordExample,
      data: this.data,
    },
  ];

  public mounted() {
    this.menuModel = Menu.getComponentConfig('NeonPassword');
  }
}
