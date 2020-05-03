<template>
  <div class="neon-card" :class="`neon-card--${orientation}`">
    <!-- @slot: card contents -->
    <slot></slot>
  </div>
</template>

<script lang="ts" src="./NeonCard.ts"></script>
