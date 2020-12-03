import { Component, Vue } from 'vue-property-decorator';
import { NeonCard, NeonCardBody, NeonCardHeader, NeonInput } from '../../../../components';
import { Menu, MenuModel } from '../../../Menu';
import ComponentDocumentation from '../../../components/component-documentation/ComponentDocumentation.vue';

@Component({
  components: {
    ComponentDocumentation,
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
    NeonInput,
  },
})
export default class Input extends Vue {
  private menuModel: MenuModel | null = null;

  private headline = 'HTML input and textarea component';

  private data = {
    small: '',
    medium: '',
    large: '',
    ready: '',
    loading: '',
    success: '',
    error: '',
    lowContrast: '',
    highContrast: '',
    brand: '',
    primary: '',
    info: '',
    disabled: '',
    textArea: '',
    textAreaDisabled: '',
  };

  private inputSizeExamples = `<div class="neon-vertically-spaced">
  <neon-input type="text" size="s" v-model="small" placeholder="Type here" />
  <neon-input type="text" size="m" v-model="medium" placeholder="Type here" />
  <neon-input type="text" size="l" v-model="large" placeholder="Type here" />
</div>`;

  private inputStateExamples = `<div class="neon-vertically-spaced">
  <neon-input type="text" size="l" state="ready" v-model="ready" placeholder="Type here" />
  <neon-input type="text" size="l" state="loading" v-model="loading" placeholder="Type here" />
  <neon-input type="text" size="l" state="success" v-model="success" placeholder="Type here" />
  <neon-input type="text" size="l" state="error" v-model="error" placeholder="Type here" />
</div>`;

  private inputColorExamples = `<div class="neon-vertically-spaced">
  <neon-input color="low-contrast" type="text" v-model="lowContrast" placeholder="Type here" />
  <neon-input color="high-contrast" type="text" v-model="highContrast" placeholder="Type here" />
  <neon-input color="brand" type="text" v-model="brand" placeholder="Type here" />
  <neon-input color="primary" type="text" v-model="primary" placeholder="Type here" />
  <neon-input color="info" type="text" v-model="info" placeholder="Type here" />
  <neon-input disabled="disabled" type="text" v-model="disabled" placeholder="Type here" />
</div>`;

  private textareaExamples = `<div class="neon-vertically-spaced">
  <neon-input type="text" rows="5" v-model="textArea" placeholder="Type here" />
  <neon-input disabled="disabled" rows="5" type="text" v-model="textAreaDisabled" placeholder="Type here" />
</div>`;

  private examples = [
    {
      title: 'Input sizes',
      template: this.inputSizeExamples,
      data: this.data,
    },
    {
      title: 'Input colors',
      template: this.inputColorExamples,
      data: this.data,
    },
    {
      title: 'Input states',
      template: this.inputStateExamples,
      data: this.data,
    },
    {
      title: 'Textarea examples',
      template: this.textareaExamples,
      data: this.data,
    },
  ];

  public mounted() {
    this.menuModel = Menu.getComponentConfig('NeonInput');
  }
}
