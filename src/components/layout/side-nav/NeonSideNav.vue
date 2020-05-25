<template>
  <div class="neon-side-nav">
    <div class="neon-side-nav__sticky" v-if="$slots.sticky">
      <!-- @slot: side-nav sticky contents -->
      <slot name="sticky"></slot>
    </div>
    <hr v-if="$slots.sticky && $slots.scrolling" />
    <div class="neon-side-nav__scrolling" v-if="$slots.scrolling">
      <!-- @slot: side-nav scrolling contents -->
      <slot name="scrolling"></slot>
    </div>
  </div>
</template>

<script lang="ts" src="./NeonSideNav.ts"></script>
