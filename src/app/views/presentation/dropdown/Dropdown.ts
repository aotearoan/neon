import { Component, Vue } from 'vue-property-decorator';
import { NeonCard, NeonCardBody, NeonCardHeader, NeonDropdown } from '../../../../components';

@Component({
  components: {
    NeonCard,
    NeonCardHeader,
    NeonCardBody,
    NeonDropdown,
  },
})
export default class Dropdown extends Vue {
  private data = {
    sOpen: false,
    mOpen: false,
    lOpen: false,
    disabledOpen: false,
    withIconOpen: false,
    iconOnlyOpen: false,
    textOpen: false,
    textIconOpen: false,
    primaryOpen: false,
    primaryTextOpen: false,
    badgeSquareOpen: false,
    badgeCircularOpen: false,
    tlOpen: false,
    trOpen: false,
    blOpen: false,
    brOpen: false,
    ltOpen: false,
    lbOpen: false,
    rtOpen: false,
    rbOpen: false,
  };

  private sizeExamples = `<div class="neon-vertically-spaced">
  <neon-dropdown v-model="sOpen" size="s" label="Small dropdown">
    <neon-card-body>
      <p>Dropdown contents</p>
    </neon-card-body>
  </neon-dropdown>
  <neon-dropdown v-model="mOpen" size="m" label="Medium dropdown">
    <neon-card-body>
      <p>Dropdown contents</p>
    </neon-card-body>
  </neon-dropdown>
  <neon-dropdown v-model="lOpen" size="l" label="Large dropdown">
    <neon-card-body>
      <p>Dropdown contents</p>
    </neon-card-body>
  </neon-dropdown>
</div>`;

  private styleExamples = `<div class="neon-vertically-spaced">
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
  <neon-dropdown v-model="textOpen" dropdown-style="text-button" label="Text dropdown">
    <neon-card-body>
      <p>Dropdown contents</p>
    </neon-card-body>
  </neon-dropdown>
  <neon-dropdown v-model="textIconOpen" dropdown-style="text-button" icon="plus">
    <neon-card-body>
      <p>Dropdown contents</p>
    </neon-card-body>
  </neon-dropdown>
  <neon-dropdown v-model="badgeSquareOpen" dropdown-style="square-badge" icon="user">
    <neon-card-body>
      <p>Dropdown contents</p>
    </neon-card-body>
  </neon-dropdown>
  <neon-dropdown v-model="badgeCircularOpen" dropdown-style="circular-badge" label="XD">
    <neon-card-body>
      <p>Dropdown contents</p>
    </neon-card-body>
  </neon-dropdown>
  <neon-dropdown v-model="disabledOpen" :disabled="true" label="Disabled">
    <neon-card-body>
      <p>Dropdown contents</p>
    </neon-card-body>
  </neon-dropdown>
</div>`;

  private colorExamples = `<div class="neon-vertically-spaced">
  <neon-dropdown v-model="primaryOpen" color="primary" label="Primary">
    <neon-card-body>
      <p>Dropdown contents</p>
    </neon-card-body>
  </neon-dropdown>
  <neon-dropdown v-model="primaryTextOpen" color="primary" dropdown-style="text-button" label="Primary text">
    <neon-card-body>
      <p>Dropdown contents</p>
    </neon-card-body>
  </neon-dropdown>
</div>`;

  private positionExamples = `<div class="neon-vertically-spaced">
  <neon-dropdown v-model="blOpen" label="Bottom left aligned">
    <neon-card-body>
      <p>Bacon ipsum dolor amet t-bone ribeye</p>
    </neon-card-body>
  </neon-dropdown>
  <neon-dropdown v-model="brOpen" placement="bottom-right" label="Bottom right aligned">
    <neon-card-body>
      <p>Bacon ipsum dolor amet t-bone ribeye</p>
    </neon-card-body>
  </neon-dropdown>
  <neon-dropdown v-model="trOpen" placement="top-right" label="Top right aligned">
    <neon-card-body>
      <p>Bacon ipsum dolor amet t-bone ribeye</p>
    </neon-card-body>
  </neon-dropdown>
  <neon-dropdown v-model="tlOpen" placement="top-left" label="Top left aligned">
    <neon-card-body>
      <p>Bacon ipsum dolor amet t-bone ribeye</p>
    </neon-card-body>
  </neon-dropdown>
  <neon-dropdown v-model="ltOpen" placement="left-top" label="Left top aligned">
    <neon-card-body>
      <p>Bacon ipsum dolor amet t-bone ribeye</p>
    </neon-card-body>
  </neon-dropdown>
  <neon-dropdown v-model="lbOpen" placement="left-bottom" label="Left bottom aligned">
    <neon-card-body>
      <p>Bacon ipsum dolor amet t-bone ribeye</p>
    </neon-card-body>
  </neon-dropdown>
  <neon-dropdown v-model="rtOpen" placement="right-top" label="Right top aligned">
    <neon-card-body>
      <p>Bacon ipsum dolor amet t-bone ribeye</p>
    </neon-card-body>
  </neon-dropdown>
  <neon-dropdown v-model="rbOpen" placement="right-bottom" label="Right bottom aligned">
    <neon-card-body>
      <p>Bacon ipsum dolor amet t-bone ribeye</p>
    </neon-card-body>
  </neon-dropdown>
</div>`;
}
