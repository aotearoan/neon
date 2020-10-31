<template>
  <div
    class="neon-expansion-panel"
    :class="[
      { 'neon-expansion-panel--expanded': value, 'neon-expansion-panel--disabled': disabled },
      `neon-expansion-panel--${position}`,
      `neon-expansion-panel--${size}`,
      `neon-expansion-panel--${color}`,
    ]"
    :aria-expanded="value"
    :aria-disabled="disabled"
  >
    <div
      class="neon-expansion-panel__header"
      :class="`neon-color-text-${color}`"
      @click="toggleExpanded"
      tabindex="-1"
      :aria-controls="id"
    >
      <div
        class="neon-expansion-panel__label-container neon-expansion-panel__label-container--outline-text"
        tabindex="0"
        @keydown.enter="toggleExpanded"
        @keydown.space="toggleExpanded"
        @keypress.space.prevent=""
      >
        <neon-icon v-if="icon" :name="icon" :color="color" :disabled="disabled" />
        <span class="neon-expansion-panel__label">{{ label }}</span>
      </div>
      <neon-expansion-indicator :disabled="disabled" :expanded="value" />
    </div>
    <div class="neon-expansion-panel__content" v-show="value" :id="id">
      <!-- @slot The expansion panel contents -->
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" src="./NeonExpansionPanel.ts" />
