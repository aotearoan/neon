<template>
  <div
    class="neon-card"
    :class="[
      `neon-card--${orientation}`,
      `neon-card--${size}`,
      `neon-card--horizontal-breakpoint-${horizontalBreakpoint}`,
    ]"
    v-on="$listeners"
  >
    <!-- @slot card contents -->
    <slot></slot>
  </div>
</template>

<script lang="ts" src="./NeonCard.ts"></script>
