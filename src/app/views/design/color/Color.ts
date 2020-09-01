import { Component, Vue } from 'vue-property-decorator';
import { NeonAnchor, NeonCard, NeonCardBody, NeonCardHeader } from '../../../../components';
import Example from '../../../components/example/Example.vue';
import Editor from '../../../components/editor/Editor.vue';

@Component({
  components: {
    NeonAnchor,
    NeonCard,
    NeonCardHeader,
    NeonCardBody,
    Example,
    Editor,
  },
})
export default class Color extends Vue {
  private example = {
    template: `<div>
  <div class="neon-color-text">This is the default text color</div>
  <div class="color-example-inverse-bg neon-color-inverse">This is the inverse text color</div>
  <div class="neon-color-text-brand">This is the brand text color</div>
  <div class="neon-color-text-primary">This is the primary text color</div>
  <div class="neon-color-text-info">This is the info text color</div>
  <div class="neon-color-text-success">This is the success text color</div>
  <div class="neon-color-text-warn">This is the warn text color</div>
  <div class="neon-color-text-error">This is the error text color</div>
  <div class="neon-color-text-neutral">This is the neutral text color</div>
  <div class="neon-color-text-high-contrast">This is the high-contrast text color</div>
  <div class="neon-color-text-low-contrast">This is the low contrast text color</div>
</div>`,
  };

  private colorPalette = `$info-palette: (
  l5: #f6e9ff,
  l4: #ebd4ff,
  l3: #ddbcfe,
  l2: #cba1fa,
  l1: #b683f3,
  d1: #7f50ba,
  d2: #644190,
  d3: #4d346b,
  d4: #39294c,
  d5: #292033,
);`;
}
