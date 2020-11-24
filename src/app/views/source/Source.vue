<template>
  <neon-card v-if="className && template" class="source-page">
    <neon-card-header>
      <h1 class="neon-h3">{{ className }}</h1>
    </neon-card-header>
    <neon-card-body>
      <editor language="typescript" :value="template" :read-only="true" :gh-link="ghLink" />
    </neon-card-body>
  </neon-card>
</template>

<script lang="ts" src="./Source.ts"></script>
