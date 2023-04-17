<template>
  <div
    v-if="responsiveView || !toggleOnIf || (toggleOnIf && selected)"
    :id="id"
    class="neon-tab"
    :class="{ 'neon-tab--selected': selected }"
    role="tabpanel"
    :aria-labelledby="id ? `${id}Button` : undefined"
    tabindex="0"
  >
    <!-- @slot The tab content -->
    <slot></slot>
  </div>
</template>

<script lang="ts" src="./NeonTab.ts"></script>
