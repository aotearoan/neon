<template>
  <article class="neon-grid" :id="id">
    <!-- @slot: contents of the grid, namely neon-grid-area components -->
    <slot></slot>
  </article>
</template>

<script lang="ts" src="./NeonGrid.ts"></script>
