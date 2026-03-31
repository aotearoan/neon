<template>
  <component-documentation v-if="menuModel" :headline="headline" :model="menuModel" class="basic-layout">
    <neon-card>
      <neon-card-body>
        <p>
          NeonBasicLayout is a component for a basic page layout with a header (NeonHeader) followed by the page
          content.
        </p>
      </neon-card-body>
      <neon-card-header>
        <h2 class="neon-h3">Example</h2>
      </neon-card-header>
      <neon-card-body>
        <neon-inline class="basic-layout__example-images">
          <img alt="basic layout example" src="/images/page-container.jpg" />
          <img alt="basic layout example desktop" src="/images/page-container-desktop.jpg" />
        </neon-inline>
      </neon-card-body>
      <neon-card-body>
        <editor v-model="templateBasic" />
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./BasicLayout.ts"></script>
