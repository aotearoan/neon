<template>
  <div class="neon-card" :class="`neon-card--${orientation}`" v-on="$listeners">
    <!-- @slot: card contents -->
    <slot></slot>
  </div>
</template>

<script lang="ts" src="./NeonCard.ts"></script>
