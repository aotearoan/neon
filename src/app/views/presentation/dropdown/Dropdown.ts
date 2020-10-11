import { Component, Vue } from 'vue-property-decorator';
import { NeonCard, NeonCardBody, NeonDropdown } from '../../../../components';
import ComponentDocumentation from '../../../components/component-documentation/ComponentDocumentation.vue';
import { Menu, MenuModel } from '../../../Menu';

@Component({
  components: {
    NeonCard,
    NeonCardBody,
    NeonDropdown,
    ComponentDocumentation,
  },
})
export default class Dropdown extends Vue {
  private menuModel: MenuModel | null = null;

  private headline = 'Display content in a popup over the page';
  private data = {
    sOpen: false,
    mOpen: false,
    lOpen: false,
    disabledOpen: false,
    withIconOpen: false,
    iconOnlyOpen: false,
    noIndicatorOpen: false,
    textOpen: false,
    solidButtonOpen: false,
    primaryOpen: false,
    warnTextOpen: false,
    badgeSquareOpen: false,
    badgeCircularOpen: false,
    trOpen: false,
    blOpen: false,
  };

  private sizeExamples = `<div class="example--horizontal">
  <neon-dropdown v-model="sOpen" size="s" label="Small">
    <neon-card-body>
      <p>Dropdown contents</p>
    </neon-card-body>
  </neon-dropdown>
  <neon-dropdown v-model="mOpen" size="m" label="Medium">
    <neon-card-body>
      <p>Dropdown contents</p>
    </neon-card-body>
  </neon-dropdown>
  <neon-dropdown v-model="lOpen" size="l" label="Large">
    <neon-card-body>
      <p>Dropdown contents</p>
    </neon-card-body>
  </neon-dropdown>
</div>`;

  private buttonStyleExamples = `<div class="example--horizontal">
  <neon-dropdown v-model="solidButtonOpen" dropdown-style="solid-button" label="Solid">
    <neon-card-body>
      <p>Dropdown contents</p>
    </neon-card-body>
  </neon-dropdown>
  <neon-dropdown v-model="textOpen" dropdown-style="text-button" label="Text">
    <neon-card-body>
      <p>Dropdown contents</p>
    </neon-card-body>
  </neon-dropdown>
</div>`;

  private badgeStyleExamples = `<div class="example--horizontal">
  <neon-dropdown v-model="badgeSquareOpen" dropdown-style="square-badge" label="XD">
    <neon-card-body>
      <p>Dropdown contents</p>
    </neon-card-body>
  </neon-dropdown>
  <neon-dropdown v-model="badgeCircularOpen" dropdown-style="circular-badge" label="XD">
    <neon-card-body>
      <p>Dropdown contents</p>
    </neon-card-body>
  </neon-dropdown>
</div>`;

  private iconExamples = `<div class="example--horizontal">
  <neon-dropdown v-model="withIconOpen" icon="plus" label="With icon">
    <neon-card-body>
      <p>Dropdown contents</p>
    </neon-card-body>
  </neon-dropdown>
  <neon-dropdown v-model="iconOnlyOpen" icon="plus">
    <neon-card-body>
      <p>Dropdown contents</p>
    </neon-card-body>
  </neon-dropdown>
  <neon-dropdown v-model="badgeSquareOpen" dropdown-style="square-badge" icon="user">
    <neon-card-body>
      <p>Dropdown contents</p>
    </neon-card-body>
  </neon-dropdown>
  <neon-dropdown v-model="noIndicatorOpen" label="No indicator" :indicator="false">
    <neon-card-body>
      <p>Dropdown contents</p>
    </neon-card-body>
  </neon-dropdown>
</div>`;

  private colorExamples = `<div class="example--horizontal">
  <neon-dropdown v-model="primaryOpen" color="primary" label="Primary">
    <neon-card-body>
      <p>Dropdown contents</p>
    </neon-card-body>
  </neon-dropdown>
  <neon-dropdown v-model="warnTextOpen" color="warn" dropdown-style="text-button" label="Warning">
    <neon-card-body>
      <p>Dropdown contents</p>
    </neon-card-body>
  </neon-dropdown>
</div>`;

  private positionExamples = `<div class="example--horizontal">
  <neon-dropdown v-model="blOpen" label="Bottom left aligned">
    <neon-card-body>
      <p>Bacon ipsum dolor amet t-bone ribeye</p>
    </neon-card-body>
  </neon-dropdown>
  <neon-dropdown v-model="trOpen" placement="top-right" label="Top right aligned">
    <neon-card-body>
      <p>Bacon ipsum dolor amet t-bone ribeye</p>
    </neon-card-body>
  </neon-dropdown>
</div>`;

  private openOnHoverExample = `<div class="example--horizontal">
  <neon-dropdown :open-on-hover="true" dropdown-style="text-button" label="Open on hover">
    <neon-card-body>
      <p>Bacon ipsum dolor amet t-bone ribeye</p>
    </neon-card-body>
  </neon-dropdown>
</div>`;

  private examples = [
    {
      title: 'Dropdown sizes',
      template: this.sizeExamples,
      data: this.data,
    },
    {
      title: 'Dropdown colors',
      template: this.colorExamples,
      data: this.data,
    },
    {
      title: 'Dropdown with icons',
      template: this.iconExamples,
      data: this.data,
    },
    {
      title: 'Dropdown button styles',
      template: this.buttonStyleExamples,
      data: this.data,
    },
    {
      title: 'Dropdown badge styles',
      template: this.badgeStyleExamples,
      data: this.data,
    },
    {
      title: 'Dropdown positions',
      template: this.positionExamples,
      data: this.data,
    },
    {
      title: 'Dropdown open on hover',
      template: this.openOnHoverExample,
    },
  ];

  public mounted() {
    this.menuModel = Menu.getComponentConfig('NeonDropdown');
  }
}
