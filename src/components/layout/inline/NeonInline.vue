<template>
  <div :class="[`neon-inline--gap-${gap}`, `neon-inline--breakpoint-${breakpoint}`]" class="neon-inline">
    <!-- @slot stack contents -->
    <slot></slot>
  </div>
</template>

<script lang="ts" src="./NeonInline.ts"></script>
