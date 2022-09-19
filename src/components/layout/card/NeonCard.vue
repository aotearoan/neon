<template>
  <div
    :class="[
      `neon-card--${orientation}`,
      `neon-card--${size}`,
      `neon-card--horizontal-breakpoint-${horizontalBreakpoint}`,
    ]"
    class="neon-card"
    v-bind="attrs"
  >
    <!-- @slot card contents -->
    <slot></slot>
  </div>
</template>

<script lang="ts" src="./NeonCard.ts"></script>
