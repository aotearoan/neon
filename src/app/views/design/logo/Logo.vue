<template>
  <div>
    <neon-card>
      <neon-card-header>
        <h1>Logo</h1>
      </neon-card-header>
      <neon-card-body>
        <p>
          The light & dark logos can be provided by overriding the
          <strong class="neon-monospaced">$logo-light</strong> and
          <strong class="neon-monospaced">$logo-dark</strong> SASS variables. To do so you need to provide the CSS
          background URL of the image which may also be inlined as base64 or a UTF-8 SVG.
        </p>
      </neon-card-body>
    </neon-card>
    <example title="Example" :template="template"></example>
  </div>
</template>

<script lang="ts" src="./Logo.ts"></script>
