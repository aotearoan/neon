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
    role="dialog"
    aria-describedby="neonDrawerDesc"
  >
    <div class="neon-drawer__overlay"></div>
    <div
      id="neonDrawerDesc"
      ref="drawer"
      class="neon-drawer__container"
      :class="{ 'neon-drawer__container--full-width': fullWidth }"
    >
      <!-- @slot the contents of the drawer -->
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" src="./NeonDrawer.ts"></script>
