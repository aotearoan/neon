import { Component, Vue } from 'vue-property-decorator';
import { NeonCard, NeonCardBody, NeonLabel } from '../../../../components';
import ComponentDocumentation from '../../../components/component-documentation/ComponentDocumentation.vue';
import { Menu, MenuModel } from '../../../Menu';

@Component({
  components: {
    NeonCard,
    NeonCardBody,
    NeonLabel,
    ComponentDocumentation,
  },
})
export default class Label extends Vue {
  private menuModel: MenuModel | null = null;

  private headline = 'Tag or emphasize content with labels';

  private examples = [
    {
      title: 'Label sizes',
      template: `<div class="example--horizontal">
  <neon-label size="xs" label="Extra small" />
  <neon-label size="s" label="Small" />
  <neon-label size="m" label="Medium" />
  <neon-label size="l" label="Large" />
</div>`,
    },
    {
      title: 'Label colors',
      template: `<div class="example--horizontal">
  <neon-label label="Default" />
  <neon-label color="brand" label="Brand" />
  <neon-label color="primary" label="Primary" />
  <neon-label color="info" label="Info" />
</div>`,
    },
    {
      title: 'Gradient labels',
      template: `<div class="example--horizontal">
  <neon-label color="brand" alternate-color="primary" label="Brand" />
  <neon-label color="primary" alternate-color="brand" label="Primary" />
  <neon-label color="success" alternate-color="success" label="Success" />
  <neon-label color="warn" alternate-color="warn" label="Warning" />
</div>`,
    },
    {
      title: 'Labels with icons',
      template: `<div class="example--horizontal">
  <neon-label icon="check" size="xs" color="warn" label="Extra small" />
  <neon-label icon="check" color="error" label="Small" />
  <neon-label icon="lock" icon-position="right" color="high-contrast" label="Icon right" />
</div>`,
    },
  ];

  public mounted() {
    this.menuModel = Menu.getComponentConfig('NeonLabel');
  }
}
