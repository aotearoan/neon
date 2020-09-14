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
    NeonInput,
    NeonInputIndicator,
    NeonFieldGroup,
  },
})
export default class FieldGroup extends Vue {
  private menuModel: MenuModel | null = null;

  private headline = 'Compose richer input components';

  private data = {
    indexFilter: '',
  };

  private inputIndicatorExamples = `<div class="neon-vertically-spaced">
  <neon-field-group>
    <neon-input-indicator size="s" label="$" />
    <neon-input size="s" type="text" color="primary" v-model="indexFilter" placeholder="Enter amount" />
  </neon-field-group>
  <neon-field-group>
    <neon-input type="text" color="primary" v-model="indexFilter" placeholder="Enter rate" />
    <neon-input-indicator label="%" />
  </neon-field-group>
  <neon-field-group>
    <neon-input-indicator size="l" label="$" />
    <neon-input size="l" type="text" color="primary" v-model="indexFilter" placeholder="Enter amount" />
    <neon-button size="l" label="Submit" color="primary" />
  </neon-field-group>
</div>`;

  private examples = [
    {
      title: 'Field Group Examples',
      template: this.inputIndicatorExamples,
      data: this.data,
    },
  ];

  public mounted() {
    this.menuModel = Menu.getComponentConfig('NeonFieldGroup');
  }
}
