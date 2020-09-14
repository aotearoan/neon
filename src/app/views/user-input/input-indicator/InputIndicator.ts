import { Component, Vue } from 'vue-property-decorator';
import {
  NeonCard,
  NeonCardBody,
  NeonCardHeader,
  NeonFieldGroup,
  NeonInput,
  NeonInputIndicator,
} from '../../../../components';
import { Menu, MenuModel } from '../../../Menu';
import ComponentDocumentation from '../../../components/component-documentation/ComponentDocumentation.vue';

@Component({
  components: {
    ComponentDocumentation,
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
    NeonFieldGroup,
    NeonInput,
    NeonInputIndicator,
  },
})
export default class InputIndicator extends Vue {
  private menuModel: MenuModel | null = null;

  private headline = 'Indicate read only information about an input';

  private data = {
    field1: '',
    field2: '',
    field3: '',
  };

  private inputIndicatorExamples = `<div class="neon-vertically-spaced">
  <neon-field-group>
    <neon-input type="text" size="s" v-model="field1" placeholder="Rate" />
    <neon-input-indicator size="s" label="%" />
  </neon-field-group>
  <neon-field-group>
    <neon-input-indicator icon="user" />
    <neon-input type="text" v-model="field2" placeholder="Username" />
  </neon-field-group>
  <neon-field-group>
    <neon-input-indicator size="l" icon="mail" />
    <neon-input type="text" size="l" v-model="field3" placeholder="Username" />
    <neon-input-indicator size="l" label="@aol.com" />
  </neon-field-group>
</div>`;

  private examples = [
    {
      title: 'Input Indicator Examples',
      template: this.inputIndicatorExamples,
      data: this.data,
    },
  ];

  public mounted() {
    this.menuModel = Menu.getComponentConfig('NeonInputIndicator');
  }
}
