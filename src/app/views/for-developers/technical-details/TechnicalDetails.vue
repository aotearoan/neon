<template>
  <neon-card>
    <neon-card-header>
      <h1>Technical Details</h1>
    </neon-card-header>
    <neon-card-body>
      <neon-anchor id="browser-support" />
      <h2>Browser Support</h2>
      <p>
        Neon aims to support all popular modern browsers.
        <em
          >However, based on Microsoft's recommendations, it must be pointed out the legacy Microsoft browsers
          <strong>IE11 and non Chromium Edge (pre v79)</strong> are specifically <strong>not supported</strong>.</em
        >
      </p>
      <p>
        With that in mind, Neon strives to use semantic native HTML and fallbacks (where possible) so you may find most
        components work OK in legacy browsers.
      </p>
      <p>Although Neon is not focused on supporting legacy browsers pull requests for bug fixes are always welcome!</p>
      <p></p>
    </neon-card-body>
    <neon-card-body>
      <neon-anchor id="framework-support" />
      <h2>Framework Support</h2>
      <p>
        Currently Neon is built using VueJS 2.0 therefore the supported VueJS version is also 2.0. Neon is built using
        Typescript and classes so is positioned well for a quick transition to Vue 3.0 in the near future.
      </p>
    </neon-card-body>
  </neon-card>
</template>

<script lang="ts" src="./TechnicalDetails.ts"></script>
