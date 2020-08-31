<template>
  <div class="neon-side-nav" :class="{ 'neon-side-nav--full-width': fullWidth }">
    <div class="neon-side-nav__sticky" v-if="$slots.sticky">
      <!-- @slot sticky (fixed, non-scrolling) content -->
      <slot name="sticky"></slot>
    </div>
    <hr v-if="$slots.sticky && $slots.scrolling" />
    <div class="neon-side-nav__scrolling" v-if="$slots.scrolling">
      <!-- @slot scrolling content -->
      <slot name="scrolling"></slot>
    </div>
  </div>
</template>

<script lang="ts" src="./NeonSideNav.ts"></script>
