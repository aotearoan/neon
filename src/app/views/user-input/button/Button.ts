import { Component, Vue } from 'vue-property-decorator';
import { NeonButton, NeonCard, NeonCardBody, NeonNote } from '../../../../components';
import ComponentDocumentation from '../../../components/component-documentation/ComponentDocumentation.vue';
import { Menu, MenuModel } from '../../../Menu';

@Component({
  components: {
    NeonCard,
    NeonCardBody,
    NeonButton,
    NeonNote,
    ComponentDocumentation,
  },
})
export default class Button extends Vue {
  private menuModel: MenuModel | null = null;

  private headline = 'Styled HTML buttons';

  private sizeExamples = `<div class="example--horizontal">
  <neon-button size="s" label="Small button" />
  <neon-button size="m" label="Medium button" />
  <neon-button size="l" label="Large button" />
</div>`;

  private neutralColorExamples = `<div class="example--horizontal example--wrap">
  <neon-button color="low-contrast" label="Low contrast" />
  <neon-button color="neutral" label="Neutral" />
  <neon-button color="high-contrast" label="High contrast" />
</div>`;

  private brandColorExamples = `<div class="example--horizontal example--wrap">
  <neon-button color="brand" label="Brand" />
  <neon-button color="primary" label="Primary" />
</div>`;

  private functionalColorExamples = `<div class="example--horizontal example--wrap">
  <neon-button color="info" label="Info" />
  <neon-button color="success" label="Success" />
  <neon-button color="warn" label="Warn" />
  <neon-button color="error" label="Error" />
</div>`;

  private gradientExamples = `<div>
  <neon-note color="warn">
    <p>Use with care! It is recommended to avoid using too many variations of these buttons on a single site.</p>
  </neon-note>
  <br />
  <div class="example--horizontal example--wrap">
    <neon-button color="primary" alternate-color="primary" label="Primary" />
    <neon-button color="success" alternate-color="info" label="Success" />
    <neon-button color="brand" alternate-color="primary" label="Mixed" />
    <neon-button color="brand" alternate-color="info" :circular="true" icon="plus" />
  </div>
</div>`;

  private styleExamples = `<div class="example--vertical">
  <neon-button button-style="solid" label="Solid button" />
  <neon-button button-style="outline" label="Outline button" />
  <neon-button button-style="text" label="Text button" />
  <neon-note color="info">
    <span><strong>Note:</strong> add an <em>href</em> to buttons and they will be rendered as links</span>
  </neon-note>
  <neon-button target="_blank" href="/" label="Link button" />
  <neon-button :full-width="true" style="outline" label="Full width button" />
</div>`;

  private withIconExamples = `<div class="example--horizontal">
  <neon-button icon="plus" label="With icon" />
  <neon-button icon="plus" icon-position="right" label="Positioned right" />
</div>`;

  private iconOnlyExamples = `<div class="example--horizontal">
  <neon-button icon="plus" />
  <neon-button :circular="true" icon="plus" />
</div>`;

  private stateExamples = `<div class="example--vertical">
  <neon-note color="info">
    <span>
      <strong>Note:</strong> add button states (<strong>loading, success, error</strong>) to
      indicate the result of actions. Buttons will be disabled until set back to the
      <strong>ready</strong> state.
    </span>
  </neon-note>
  <neon-button :disabled="true" label="Disabled solid" button-style="solid" />
  <neon-button :disabled="true" label="Disabled outline" button-style="outline" />
  <neon-button :disabled="true" label="Disabled text" button-style="text" />
  <neon-button state="loading" color="primary" label="Loading" />
  <neon-button state="loading" color="primary" label="Loading button with icon" icon="plus" />
  <neon-button state="success" color="primary" label="Success" />
  <neon-button
    state="success"
    color="primary"
    label="Success button with icon"
    icon="plus"
  />
  <neon-button state="error" color="error" label="Error" />
  <neon-button
    state="error"
    color="error"
    label="Error button with icon"
    icon="plus"
  />
</div>`;

  private examples = [
    {
      title: 'Button sizes',
      template: this.sizeExamples,
    },
    {
      title: 'Neutral colors',
      template: this.neutralColorExamples,
    },
    {
      title: 'Brand colors',
      template: this.brandColorExamples,
    },
    {
      title: 'Functional colors',
      template: this.functionalColorExamples,
    },
    {
      title: 'Gradient buttons',
      template: this.gradientExamples,
    },
    {
      title: 'Button styles',
      template: this.styleExamples,
    },
    {
      title: 'Buttons with icons',
      template: this.withIconExamples,
    },
    {
      title: 'Icon only buttons',
      template: this.iconOnlyExamples,
    },
    {
      title: 'Button states',
      template: this.stateExamples,
    },
  ];

  public mounted() {
    this.menuModel = Menu.getComponentConfig('NeonButton');
  }
}
