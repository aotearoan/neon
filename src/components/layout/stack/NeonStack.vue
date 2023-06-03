<template>
  <div :class="`neon-stack--gap-${gap}`" class="neon-stack">
    <!-- @slot stack contents -->
    <slot></slot>
  </div>
</template>

<script lang="ts" src="./NeonStack.ts"></script>
