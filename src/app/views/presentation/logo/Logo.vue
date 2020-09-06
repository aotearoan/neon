<template>
  <component-documentation v-if="menuModel" :examples="examples" :model="menuModel" :headline="headline">
    <neon-card>
      <neon-card-body>
        <p>Convenience component for rendering a logo in light and dark modes.</p>
        <p>
          The light & dark logos can be provided by overriding the
          <em>$logo-light</em> (light theme logo) and <em>$logo-dark</em> (dark theme logo) SASS variables. These
          describe the CSS background URLs of the logos. Specify <em>$logo-width-multiplier</em> to define the ratio of
          the logo's width to it's height.
        </p>
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./Logo.ts"></script>
