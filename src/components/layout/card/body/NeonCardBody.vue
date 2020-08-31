<template>
  <div class="neon-card-body" :class="{ 'neon-card-body--full-width': fullWidth }">
    <!-- @slot card body content -->
    <slot></slot>
  </div>
</template>

<script lang="ts" src="./NeonCardBody.ts"></script>
