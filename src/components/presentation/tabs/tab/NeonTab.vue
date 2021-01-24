<template>
  <div
    class="neon-tab"
    v-if="responsiveView || !toggleOnIf || (toggleOnIf && selected)"
    :class="{ 'neon-tab--selected': selected }"
    role="tabpanel"
    :id="id"
    :aria-labelledby="id ? `${id}Button` : undefined"
    tabindex="0"
  >
    <!-- @slot The tab content -->
    <slot></slot>
  </div>
</template>

<script lang="ts" src="./NeonTab.ts"></script>
