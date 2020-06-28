import { Component, Vue } from 'vue-property-decorator';
import { NeonCard, NeonCardBody, NeonCardHeader, NeonInput } from '../../../../components';

@Component({
  components: {
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
    NeonInput,
  },
})
export default class Input extends Vue {
  private data = {
    indexFilter: '',
  };

  private inputSizeExamples = `<div class="neon-vertically-spaced">
  <neon-input type="text" size="s" v-model="indexFilter" placeholder="Type here" />
  <neon-input type="text" size="m" v-model="indexFilter" placeholder="Type here" />
  <neon-input type="text" size="l" v-model="indexFilter" placeholder="Type here" />
</div>`;

  private inputStateExamples = `<div class="neon-vertically-spaced">
  <neon-input type="text" size="l" state="ready" v-model="indexFilter" placeholder="Type here" />
  <neon-input type="text" size="l" state="loading" v-model="indexFilter" placeholder="Type here" />
  <neon-input type="text" size="l" state="success" v-model="indexFilter" placeholder="Type here" />
  <neon-input type="text" size="l" state="error" v-model="indexFilter" placeholder="Type here" />
</div>`;

  private inputColorExamples = `<div class="neon-vertically-spaced">
  <neon-input color="low-contrast" type="text" v-model="indexFilter" placeholder="Type here" />
  <neon-input color="high-contrast" type="text" v-model="indexFilter" placeholder="Type here" />
  <neon-input color="error" type="text" v-model="indexFilter" placeholder="Type here" />
  <neon-input disabled="disabled" type="text" v-model="indexFilter" placeholder="Type here" />
</div>`;

  private textareaExamples = `<div class="neon-vertically-spaced">
  <neon-input type="text" rows="5" v-model="indexFilter" placeholder="Type here" />
  <neon-input disabled="disabled" rows="5" type="text" v-model="indexFilter" placeholder="Type here" />
</div>`;
}
