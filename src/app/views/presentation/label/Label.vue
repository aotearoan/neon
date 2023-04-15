<template>
  <component-documentation v-if="menuModel" :headline="headline" :model="menuModel">
    <neon-card>
      <neon-card-body>
        <p>
          Use <strong>NeonLabel</strong> to emphasize content in the UI. Labels can be text only, icon only or contain
          both text and icons.
        </p>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Label sizes</h2>
        <div class="example--horizontal">
          <neon-label label="XX Small" size="xxs" />
          <neon-label label="Extra small" size="xs" />
          <neon-label label="Small" size="s" />
          <neon-label label="Medium" size="m" />
          <neon-label label="Large" size="l" />
        </div>
        <editor v-model="sizesTemplate" />
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Label colors</h2>
        <div class="example--horizontal">
          <neon-label label="Default" />
          <neon-label color="brand" label="Brand" />
          <neon-label color="primary" label="Primary" />
          <neon-label color="info" label="Info" />
        </div>
        <editor v-model="colorsTemplate" />
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Gradient labels</h2>
        <div class="example--horizontal">
          <neon-label alternate-color="warn" color="error" label="Primary" />
          <neon-label alternate-color="success" color="info" label="Success" />
          <neon-label alternate-color="primary" color="brand" label="Covfefe" />
          <neon-label alternate-color="brand" color="primary" label="Hamberders" />
        </div>
        <editor v-model="gradientsTemplate" />
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Labels with icons</h2>
        <div class="example--horizontal">
          <neon-label color="warn" icon="check" label="Extra small" size="xs" />
          <neon-label color="error" icon="check" label="Small" />
          <neon-label color="high-contrast" icon="lock" icon-position="right" label="Icon right" />
        </div>
        <editor v-model="withIconsTemplate" />
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./Label.ts"></script>
