<template>
  <neon-stack>
    <neon-card>
      <neon-card-header>
        <h1>Technical Requirements</h1>
      </neon-card-header>
    </neon-card>
    <neon-card>
      <neon-card-body>
        <neon-anchor id="browser-support" />
        <h2 class="neon-h4">Browser Support</h2>
        <neon-stack>
          <p>
            Neon aims to support all popular modern browsers. However, based on Microsoft's recommendations, it must be
            pointed out the legacy Microsoft browsers
            <strong>IE11 and non Chromium Edge (pre v79)</strong> are specifically <strong>not supported</strong>.
          </p>
          <p>
            With that in mind, Neon strives to use semantic native HTML and fallbacks (where possible) so you may find
            most components work OK in legacy browsers.
          </p>
          <p>
            Although Neon is not focused on supporting legacy browsers pull requests for bug fixes are always welcome!
          </p>
        </neon-stack>
      </neon-card-body>
      <neon-card-body>
        <neon-anchor id="framework-support" />
        <h2 class="neon-h4">Framework Support</h2>
        <p>
          Neon is built using Vue 3 therefore the supported Vue version is also 3.<br />Versions of Neon 5.2.0 & below
          support VueJS 2.x.
        </p>
      </neon-card-body>
    </neon-card>
  </neon-stack>
</template>

<script lang="ts" src="./TechnicalRequirements.ts"></script>
