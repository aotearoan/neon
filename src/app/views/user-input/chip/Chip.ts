import { Component, Vue } from 'vue-property-decorator';
import { NeonCard, NeonCardBody, NeonToggle } from '../../../../components';
import { Menu, MenuModel } from '../../../Menu';
import ComponentDocumentation from '../../../components/component-documentation/ComponentDocumentation.vue';

@Component({
  components: {
    NeonCard,
    NeonCardBody,
    NeonToggle,
    ComponentDocumentation,
  },
})
export default class Chip extends Vue {
  private menuModel: MenuModel | null = null;

  private headline = 'Removable chips for tagging and inputs';

  private data = {
    click: () => console.log('clicked!'),
    remove: () => console.log('removed!'),
  };

  private chipSizes = `<div class="neon-vertically-spaced">
  <neon-chip label="Small" size="s" />
  <neon-chip label="Medium" size="m" />
  <neon-chip label="Large" size="l" />
</div>`;

  private chipColors = `<div class="neon-vertically-spaced">
  <neon-chip label="Neutral" />
  <neon-chip label="Low Contrast" color="low-contrast" />
  <neon-chip label="High Contrast" color="high-contrast" />
  <neon-chip label="Brand" color="brand" />
  <neon-chip label="Info" color="info" />
  <neon-chip label="Success" color="success" />
  <neon-chip label="Warning" color="warn" />
  <neon-chip label="Error" color="error" />
</div>`;

  private chipActions = `<div class="neon-vertically-spaced">
  <neon-chip label="Clickable" color="info" @click="click" />
  <neon-chip action="remove" label="Removable" color="info" @close="remove" />
  <neon-chip :disabled="true" action="remove" label="Disabled" color="info" />
</div>`;

  private chipIcons = `<div class="neon-vertically-spaced">
  <neon-chip icon="moon" label="With icon" />
</div>`;

  private examples = [
    {
      title: 'Chip sizes',
      template: this.chipSizes,
    },
    {
      title: 'Chip colors',
      template: this.chipColors,
    },
    {
      title: 'Chip actions',
      template: this.chipActions,
      data: this.data,
    },
    {
      title: 'Chip with icon',
      template: this.chipIcons,
    },
  ];

  public mounted() {
    this.menuModel = Menu.getComponentConfig('NeonChip');
  }
}
