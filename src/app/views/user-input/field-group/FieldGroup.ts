import { Component, Vue } from 'vue-property-decorator';
import {
  NeonCard,
  NeonCardBody,
  NeonCardHeader,
  NeonFieldGroup,
  NeonInput,
  NeonInputIndicator,
  NeonSelect,
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
    NeonSelect,
  },
})
export default class FieldGroup extends Vue {
  private menuModel: MenuModel | null = null;

  private headline = 'Compose richer input components';

  private data = {
    indexFilter: '',
    currency: 'NZD',
    currencies: [
      {
        key: 'CAD',
        label: 'CAD',
        separatorBefore: true,
      },
      {
        key: 'EUR',
        label: 'EUR',
        separatorBefore: true,
      },
      {
        key: 'NZD',
        label: 'NZD',
        separatorBefore: true,
      },
      {
        key: 'PLN',
        label: 'PLN',
        separatorBefore: true,
      },
      {
        key: 'USD',
        label: 'USD',
        separatorBefore: true,
      },
    ],
  };

  private inputIndicatorExamples = `<div class="neon-vertically-spaced">
  <neon-field-group>
    <neon-input-indicator size="s" label="Salary" />
    <neon-input size="s" type="text" color="primary" v-model="indexFilter" placeholder="Enter amount" />
    <neon-select size="s" color="primary" v-model="currency" :options="currencies" placeholder="Currency" />
  </neon-field-group>
  <neon-field-group>
    <neon-input type="text" color="primary" v-model="indexFilter" placeholder="Enter rate" />
    <neon-input-indicator label="%" />
  </neon-field-group>
  <neon-field-group>
    <neon-input-indicator size="l" label="$" />
    <neon-input size="l" type="text" v-model="indexFilter" placeholder="Enter amount" />
    <neon-button size="l" label="Submit" />
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
