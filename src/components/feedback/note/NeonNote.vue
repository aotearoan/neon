<template>
  <div
    :class="[
      `neon-note--${color}`,
      { 'neon-note--with-title': title, 'neon-note--with-title-only': title && !slots.default },
    ]"
    class="neon-note"
    role="note"
  >
    <div class="neon-note__container">
      <neon-stack gap="s">
        <neon-inline gap="s">
          <neon-icon v-if="iconName" :color="color" :name="iconName" class="neon-note__icon" />
          <span v-if="title" class="neon-note__title">{{ title }}</span>
        </neon-inline>
        <!-- @slot the contents of the note description -->
        <slot></slot>
      </neon-stack>
    </div>
    <neon-button
      v-if="closable"
      :aria-label="ariaLabelCloseNote"
      :circular="true"
      :transparent="true"
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
