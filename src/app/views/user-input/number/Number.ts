import { Component, Vue } from 'vue-property-decorator';
import { NeonCard, NeonCardBody, NeonCardHeader, NeonNumber } from '../../../../components';
import { Menu, MenuModel } from '../../../Menu';
import ComponentDocumentation from '../../../components/component-documentation/ComponentDocumentation.vue';

@Component({
  components: {
    ComponentDocumentation,
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
    NeonNumber,
  },
})
export default class Number extends Vue {
  private menuModel: MenuModel | null = null;

  private headline = 'HTML number spinner';

  private data = {
    smallNumber: null,
    mediumNumber: undefined,
    largeNumber: 0,
    lcNumber: 1,
    hcNumber: -45,
    errorNumber: 2.5,
    disabledNumber: 10,
  };

  private numberSizeExamples = `<div class="neon-vertically-spaced">
  <neon-number size="s" v-model="smallNumber" placeholder="Value" />
  <neon-number size="m" v-model="mediumNumber" placeholder="Value" />
  <neon-number size="l" v-model="largeNumber" placeholder="Value" />
</div>`;

  private numberColorExamples = `<div class="neon-vertically-spaced">
  <neon-number color="low-contrast" v-model="lcNumber" placeholder="Value" />
  <neon-number color="high-contrast" v-model="hcNumber" placeholder="Value" />
  <neon-number color="error" v-model="errorNumber" placeholder="Value" />
  <neon-number disabled="disabled" v-model="disabledNumber" placeholder="Value" />
</div>`;

  private examples = [
    {
      title: 'Number sizes',
      template: this.numberSizeExamples,
      data: this.data,
    },
    {
      title: 'Number colors',
      template: this.numberColorExamples,
      data: this.data,
    },
  ];

  public mounted() {
    this.menuModel = Menu.getComponentConfig('NeonNumber');
  }
}
