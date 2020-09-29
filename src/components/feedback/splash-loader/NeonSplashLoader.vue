<template>
  <transition name="neon-fade-transition" mode="out-in">
    <div
      v-if="ready"
      class="neon-splash-loader"
      :class="[
        `neon-splash-loader--${size}`,
        { 'neon-splash-loader--fullscreen': fullscreen, 'neon-splash-loader--with-overlay': overlay },
      ]"
    >
      <neon-icon name="loading" :color="color" class="neon-splash-loader__loading-icon" />
    </div>
  </transition>
</template>

<script lang="ts" src="./NeonSplashLoader.ts"></script>
