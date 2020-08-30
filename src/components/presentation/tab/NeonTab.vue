<template>
  <div
    class="neon-tab"
    v-if="responsiveView || !toggleOnIf || selected"
    :class="{ 'neon-tab--selected': toggleOnIf || selected }"
  >
    <!-- @slot: The tab contents -->
    <slot></slot>
  </div>
</template>

<script lang="ts" src="./NeonTab.ts"></script>
