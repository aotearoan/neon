import { Component, Vue } from 'vue-property-decorator';
import { NeonCard, NeonCardBody, NeonCardHeader, NeonSwitch } from '@/components';

@Component({
  components: {
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
    NeonSwitch,
  },
})
export default class SwitchExample extends Vue {
  private data = {
    checked: true,
  };

  private switchTemplate = `<div>
  <h2>Sizes</h2>
  <div class="neon-horizontal neon-spaced-apart">
    <neon-switch size="s" label="Small switch" v-model="checked" />
    <neon-switch label="Medium switch" v-model="checked" />
    <neon-switch size="l" label="Large switch" v-model="checked" />
  </div>
  <h2>Colors</h2>
  <div class="neon-horizontal neon-spaced-apart">
    <neon-switch size="m" label="Low contrast" color="low-contrast" v-model="checked" />
    <neon-switch size="m" label="Primary" color="primary" v-model="checked" />
    <neon-switch size="m" label="Info" color="info" v-model="checked" />
    <neon-switch size="m" label="Warn" color="warn" v-model="checked" />
    <neon-switch size="m" label="Success" color="success" v-model="checked" />
    <neon-switch size="m" label="Error" color="error" v-model="checked" />
    <neon-switch size="m" label="Disabled" color="primary" :disabled="true" v-model="checked" />
  </div>
</div>`;

  private checkboxTemplate = `<div>
  <neon-switch size="s" label="Small checkbox" v-model="checked" switch-style="checkbox" />
  <neon-switch label="Medium checkbox" v-model="checked" switch-style="checkbox" />
  <neon-switch size="l" label="Large checkbox" v-model="checked" :disabled="true" switch-style="checkbox" />
</div>`;
}
