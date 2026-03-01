<template>
  <div :class="[`neon-inline--gap-${gap}`, breakpoint && `neon-inline--breakpoint-${breakpoint}`]" class="neon-inline">
    <!-- @slot inline contents -->
    <slot></slot>
  </div>
</template>

<script lang="ts" src="./NeonInline.ts"></script>
