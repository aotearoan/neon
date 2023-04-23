<template>
  <div :class="{ 'neon-modal--open': open }" class="neon-modal" role="dialog">
    <div ref="modal" class="neon-modal__container">
      <!-- @slot modal contents -->
      <slot></slot>
      <neon-button
        v-if="dismissible"
        :circular="true"
        button-style="text"
        class="neon-modal__close"
        color="low-contrast"
        icon="times"
        size="s"
        tabindex="0"
        @click="close"
        @keypress.space.stop="close"
        @keydown.enter="close"
      />
    </div>
    <div
      :class="{ 'neon-modal__overlay--opaque': opaque, 'neon-modal__overlay--show-top-nav': showTopNav }"
      class="neon-modal__overlay"
    ></div>
  </div>
</template>

<script lang="ts" src="./NeonModal.ts"></script>
