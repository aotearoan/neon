<template>
  <div class="neon-note" :class="`neon-note--${color}`">
    <div class="neon-note__container">
      <neon-icon v-if="iconName" class="neon-note__icon" :name="iconName" :color="color" />
      <!-- @slot: note contents -->
      <slot></slot>
    </div>
    <neon-button
      v-if="closable"
      @click="closeNote"
      button-style="text"
      icon="times"
      size="s"
      :circular="true"
      class="neon-note__close"
    ></neon-button>
  </div>
</template>

<script lang="ts" src="./NeonNote.ts" />
