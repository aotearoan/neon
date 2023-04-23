<template>
  <div :class="`neon-note--${color}`" class="neon-note" role="note">
    <div class="neon-note__container">
      <neon-icon v-if="iconName" :color="color" :name="iconName" class="neon-note__icon" />
      <!-- @slot the contents of the note -->
      <slot></slot>
    </div>
    <neon-button
      v-if="closable"
      :aria-label="ariaLabelCloseNote"
      :circular="true"
      :color="color"
      button-style="text"
      class="neon-note__close"
      icon="times"
      size="s"
      tabindex="0"
      @click="closeNote"
      @keydown.enter="closeNote"
      @keydown.space.stop="closeNote"
    ></neon-button>
  </div>
</template>

<script lang="ts" src="./NeonNote.ts" />
