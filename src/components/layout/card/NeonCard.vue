<template>
  <div
    :class="[
      `neon-card--${orientation}`,
      `neon-card--${size}`,
      `neon-card--horizontal-breakpoint-${horizontalBreakpoint}`,
      noBreak && 'neon-card--horizontal-breakpoint-no-break',
      orientation === NeonOrientation.Horizontal && horizontalBorders && 'neon-card--with-horizontal-borders',
    ]"
    class="neon-card"
    v-bind="attrs"
  >
    <!-- @slot card contents -->
    <slot></slot>
  </div>
</template>

<script lang="ts" src="./NeonCard.ts"></script>
