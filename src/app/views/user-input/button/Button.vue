<template>
  <component-documentation v-if="menuModel" :headline="headline" :model="menuModel">
    <neon-card>
      <neon-card-body>
        <p>
          <strong>NeonButton</strong> is a wrapper around HTML button elements which provides multiple styles, colors
          and extra functionality. For example, adding an <em>href</em> to a button will render it semantically as a
          link. There are also multiple supported button states, which can be useful for indicating success, error and
          loading states.
        </p>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Button sizes</h2>
        <neon-stack>
          <div class="neon--horizontal">
            <neon-button label="Small button" size="s" />
            <neon-button label="Medium button" size="m" />
            <neon-button label="Large button" size="l" />
          </div>
          <editor v-model="sizeExamples" />
        </neon-stack>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Neutral colors</h2>
        <neon-stack>
          <div class="neon--horizontal example--wrap">
            <neon-button color="low-contrast" label="Low contrast" />
            <neon-button color="neutral" label="Neutral" />
            <neon-button color="high-contrast" label="High contrast" />
            <div class="example--padded example--info">
              <neon-button :inverse="true" label="Inverse" />
            </div>
          </div>
          <editor v-model="neutralColorExamples" />
        </neon-stack>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Brand colors</h2>
        <neon-stack>
          <div class="neon--horizontal example--wrap">
            <neon-button color="brand" label="Brand" />
            <neon-button color="primary" label="Primary" />
          </div>
          <editor v-model="brandColorExamples" />
        </neon-stack>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Functional colors</h2>
        <neon-stack>
          <div class="neon--horizontal example--wrap">
            <neon-button color="info" label="Info" />
            <neon-button color="success" label="Success" />
            <neon-button color="warn" label="Warn" />
            <neon-button color="error" label="Error" />
          </div>
          <editor v-model="functionalColorExamples" />
        </neon-stack>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Gradient buttons</h2>
        <neon-stack>
          <div>
            <neon-note color="warn">
              <p>
                Use with care! It is recommended to avoid using too many variations of these buttons on a single site.
              </p>
            </neon-note>
            <br />
            <div class="neon--horizontal example--wrap">
              <neon-button alternate-color="primary" color="primary" label="Primary" />
              <neon-button alternate-color="info" color="success" label="Success" />
              <neon-button alternate-color="primary" color="brand" label="Mixed" />
              <neon-button :circular="true" alternate-color="info" color="brand" icon="plus" />
            </div>
          </div>
          <editor v-model="gradientExamples" />
        </neon-stack>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Button styles</h2>
        <neon-stack>
          <div class="neon--vertical">
            <neon-button button-style="solid" label="Solid button" />
            <neon-button button-style="outline" label="Outline button" />
            <neon-button button-style="text" label="Text button" />
            <neon-note color="info">
              <span><strong>Note:</strong> add an <em>href</em> to buttons and they will be rendered as links</span>
            </neon-note>
            <neon-button href="/" label="Link button" target="_blank" />
            <neon-button :full-width="true" button-style="outline" label="Full width button" />
          </div>
          <editor v-model="styleExamples" />
        </neon-stack>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Buttons with icons</h2>
        <neon-stack>
          <div class="neon--horizontal">
            <neon-button icon="plus" label="With icon" />
            <neon-button icon="plus" icon-position="right" label="Positioned right" />
          </div>
          <editor v-model="withIconExamples" />
        </neon-stack>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Icon only buttons</h2>
        <neon-stack>
          <div class="neon--horizontal">
            <neon-button icon="plus" />
            <neon-button :circular="true" icon="plus" />
          </div>
          <editor v-model="iconOnlyExamples" />
        </neon-stack>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Button states</h2>
        <neon-stack>
          <div class="neon--vertical">
            <neon-note color="info">
              <span>
                <strong>Note:</strong> add button states (<strong>loading, success, error</strong>) to indicate the
                result of actions. Buttons will be disabled until set back to the <strong>ready</strong> state.
              </span>
            </neon-note>
            <neon-button :disabled="true" button-style="solid" label="Disabled solid" />
            <neon-button :disabled="true" button-style="outline" label="Disabled outline" />
            <neon-button :disabled="true" button-style="text" label="Disabled text" />
            <neon-button color="primary" label="Loading" state="loading" />
            <neon-button color="primary" icon="plus" label="Loading button with icon" state="loading" />
            <neon-button color="primary" label="Success" state="success" />
            <neon-button color="primary" icon="plus" label="Success button with icon" state="success" />
            <neon-button color="error" label="Error" state="error" />
            <neon-button color="error" icon="plus" label="Error button with icon" state="error" />
          </div>
          <editor v-model="stateExamples" />
        </neon-stack>
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./Button.ts"></script>
