<template>
  <div
    class="neon-drawer"
    :class="[
      `neon-drawer--${position}`,
      {
        'neon-drawer--open': open,
        'neon-drawer--with-overlay': overlay,
      },
    ]"
  >
    <div class="neon-drawer__overlay"></div>
    <div class="neon-drawer__container" :class="{ 'neon-drawer__container--full-width': fullWidth }" ref="drawer">
      <!-- @slot drawer contents -->
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" src="./NeonDrawer.ts"></script>
