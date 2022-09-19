<template>
  <div
    :aria-disabled="disabled"
    :aria-expanded="modelValue"
    :class="[
      {
        'neon-expansion-panel--expanded': modelValue,
        'neon-expansion-panel--full-width': fullWidth,
        'neon-expansion-panel--disabled': disabled,
      },
      `neon-expansion-panel--${position}`,
      `neon-expansion-panel--${size}`,
      `neon-expansion-panel--${color}`,
    ]"
    class="neon-expansion-panel"
  >
    <div :aria-controls="id" class="neon-expansion-panel__header" tabindex="-1" @click="toggleExpanded">
      <div
        class="neon-expansion-panel__label-container neon-expansion-panel__label-container--outline-text"
        tabindex="0"
        @keydown.enter="toggleExpanded"
        @keydown.space="toggleExpanded"
        @keypress.space.prevent=""
      >
        <neon-icon v-if="icon" :color="color" :disabled="disabled" :name="icon" />
        <span class="neon-expansion-panel__label">{{ label }}</span>
      </div>
      <neon-expansion-indicator :color="color" :disabled="disabled" :expanded="modelValue" />
    </div>
    <div v-show="modelValue" :id="id" class="neon-expansion-panel__content">
      <!-- @slot The expansion panel contents -->
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" src="./NeonExpansionPanel.ts" />
