<template>
  <neon-card>
    <neon-card-header>
      <h1>Action Menu</h1>
    </neon-card-header>
    <neon-card-body>
      <neon-action-menu :model="model" v-model="selected"></neon-action-menu>
      <pre>selected = {{ selected }}</pre>
    </neon-card-body>
  </neon-card>
</template>

<script lang="ts" src="./ActionMenu.ts"></script>
