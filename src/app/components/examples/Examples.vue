<template>
  <neon-card v-if="examples" class="examples">
    <neon-card-header>
      <h2>Examples</h2>
    </neon-card-header>
    <neon-card-body v-for="example in examples" :key="example.title" class="example" :full-width="example.fullWidth">
      <example :example="example" />
    </neon-card-body>
  </neon-card>
</template>

<script lang="ts" src="./Examples.ts"></script>
