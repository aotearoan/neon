<template>
  <neon-card v-if="className && template" class="source-page">
    <neon-card-header>
      <h1 class="neon-h3">{{ className }}</h1>
    </neon-card-header>
    <neon-card-body>
      <editor v-model="template" :gh-link="ghLink" :read-only="true" language="typescript" />
    </neon-card-body>
  </neon-card>
</template>

<script lang="ts" src="./Source.ts"></script>
