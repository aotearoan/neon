<template>
  <div class="neon-side-nav">
    <!-- @slot: side-nav sticky contents -->
    <slot name="sticky"></slot>
    <!-- @slot: side-nav scrolling contents -->
    <slot name="scrolling"></slot>
  </div>
</template>

<script lang="ts" src="./NeonSideNav.ts"></script>
