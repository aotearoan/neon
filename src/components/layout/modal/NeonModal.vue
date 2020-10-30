<template>
  <div class="neon-modal" :class="{ 'neon-modal--open': open }" role="dialog">
    <div class="neon-modal__container" ref="modal">
      <!-- @slot modal contents -->
      <slot></slot>
      <neon-button
        @click="close"
        @keydown.space="$event.stopPropagation() && close() && $event.preventDefault()"
        @keydown.enter="close"
        button-style="text"
        icon="times"
        size="s"
        tabindex="0"
        :circular="true"
        class="neon-modal__close"
        color="low-contrast"
      ></neon-button>
    </div>
    <div class="neon-modal__overlay"></div>
  </div>
</template>

<script lang="ts" src="./NeonModal.ts"></script>
