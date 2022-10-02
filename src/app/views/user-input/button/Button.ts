import { defineComponent, onMounted, ref } from 'vue';
import { NeonButton, NeonCard, NeonCardBody, NeonNote } from '@/neon';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names,vue/no-reserved-component-names
  name: 'Button',
  components: {
    NeonCard,
    NeonCardBody,
    NeonButton,
    NeonNote,
    ComponentDocumentation,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('Styled HTML buttons');

    const sizeExamples = ref(`<div class="example--horizontal">
  <neon-button size="s" label="Small button" />
  <neon-button size="m" label="Medium button" />
  <neon-button size="l" label="Large button" />
</div>`);

    const neutralColorExamples = ref(`<div class="example--horizontal example--wrap">
  <neon-button color="low-contrast" label="Low contrast" />
  <neon-button color="neutral" label="Neutral" />
  <neon-button color="high-contrast" label="High contrast" />
</div>`);

    const brandColorExamples = ref(`<div class="example--horizontal example--wrap">
  <neon-button color="brand" label="Brand" />
  <neon-button color="primary" label="Primary" />
</div>`);

    const functionalColorExamples = ref(`<div class="example--horizontal example--wrap">
  <neon-button color="info" label="Info" />
  <neon-button color="success" label="Success" />
  <neon-button color="warn" label="Warn" />
  <neon-button color="error" label="Error" />
</div>`);

    const gradientExamples = ref(`<div>
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
</div>`);

    const styleExamples = ref(`<div class="example--vertical">
  <neon-button button-style="solid" label="Solid button" />
  <neon-button button-style="outline" label="Outline button" />
  <neon-button button-style="text" label="Text button" />
  <neon-note color="info">
    <span><strong>Note:</strong> add an <em>href</em> to buttons and they will be rendered as links</span>
  </neon-note>
  <neon-button target="_blank" href="/" label="Link button" />
  <neon-button :full-width="true" style="outline" label="Full width button" />
</div>`);

    const withIconExamples = ref(`<div class="example--horizontal">
  <neon-button icon="plus" label="With icon" />
  <neon-button icon="plus" icon-position="right" label="Positioned right" />
</div>`);

    const iconOnlyExamples = ref(`<div class="example--horizontal">
  <neon-button icon="plus" />
  <neon-button :circular="true" icon="plus" />
</div>`);

    const stateExamples = ref(`<div class="example--vertical">
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
</div>`);

    const examples = ref([
      {
        title: 'Button sizes',
        template: sizeExamples.value,
      },
      {
        title: 'Neutral colors',
        template: neutralColorExamples.value,
      },
      {
        title: 'Brand colors',
        template: brandColorExamples.value,
      },
      {
        title: 'Functional colors',
        template: functionalColorExamples.value,
      },
      {
        title: 'Gradient buttons',
        template: gradientExamples.value,
      },
      {
        title: 'Button styles',
        template: styleExamples.value,
      },
      {
        title: 'Buttons with icons',
        template: withIconExamples.value,
      },
      {
        title: 'Icon only buttons',
        template: iconOnlyExamples.value,
      },
      {
        title: 'Button states',
        template: stateExamples.value,
      },
    ]);

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonButton')));

    return {
      menuModel,
      headline,
      examples,
    };
  },
});
