<template>
  <neon-card v-if="apiModel.description || $slots.default">
    <neon-card-header>
      <h1>{{ componentTitle }}</h1>
    </neon-card-header>
    <neon-card-body v-if="apiModel.description">
      <div v-html="apiModel.description"></div>
    </neon-card-body>
    <neon-card-body v-if="$slots.default">
      <slot></slot>
    </neon-card-body>
  </neon-card>
</template>

<script lang="ts" src="./ApiDescription.ts"></script>
