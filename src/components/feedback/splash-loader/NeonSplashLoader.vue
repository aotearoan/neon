<template>
  <transition mode="out-in" name="neon-splash-transition">
    <div
      v-if="ready"
      :class="[
        `neon-splash-loader--${size}`,
        { 'neon-splash-loader--fullscreen': fullscreen, 'neon-splash-loader--with-overlay': overlay },
      ]"
      class="neon-splash-loader"
    >
      <neon-icon :color="color" class="neon-splash-loader__loading-icon" name="loading" />
    </div>
  </transition>
</template>

<script lang="ts" src="./NeonSplashLoader.ts"></script>
