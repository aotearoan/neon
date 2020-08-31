<template>
  <div class="neon-modal" :class="{ 'neon-modal--open': open }">
    <div class="neon-modal__container" ref="modal">
      <!-- @slot modal contents -->
      <slot></slot>
    </div>
    <div class="neon-modal__overlay"></div>
  </div>
</template>

<script lang="ts" src="./NeonModal.ts"></script>
