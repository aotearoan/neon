<template>
  <div class="neon-side-nav" :class="{ 'neon-side-nav--full-width': fullWidth }">
    <div v-if="$slots.sticky" class="neon-side-nav__sticky">
      <!-- @slot sticky (fixed, non-scrolling) content -->
      <slot name="sticky"></slot>
    </div>
    <hr v-if="$slots.sticky && $slots.scrolling" />
    <div v-if="$slots.scrolling" class="neon-side-nav__scrolling">
      <!-- @slot scrolling content -->
      <div class="neon-side-nav__scrolling-container">
        <slot name="scrolling"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./NeonSideNav.ts"></script>
