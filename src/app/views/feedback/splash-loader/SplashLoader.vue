<template>
  <component-documentation v-if="menuModel" :headline="headline" :model="menuModel" class="splash-loader-page">
    <neon-card>
      <neon-card-body>
        <p>
          Use <strong>NeonSplashLoader</strong> to indicate loading progress to the user. This can be used fullscreen
          initial site loading as well as when updating data.
        </p>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Splash loader example</h2>
        <neon-stack>
          <neon-stack>
            <neon-button color="low-contrast" label="Show loader" @click="openLoader()" />
            <neon-splash-loader v-if="open" :fullscreen="true" :overlay="true" size="xl" />
          </neon-stack>
          <editor v-model="template" />
        </neon-stack>
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./SplashLoader.ts"></script>
