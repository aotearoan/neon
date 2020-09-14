<template>
  <div
    class="neon-input-indicator"
    :class="[
      `neon-input-indicator--${size}`,
      { 'neon-input-indicator--with-icon': icon, 'neon-input-indicator--with-label': label },
    ]"
  >
    <neon-icon v-if="icon" :name="icon" color="low-contrast" class="neon-input-indicator__icon" />
    <div v-if="label" class="neon-input-indicator__label">{{ label }}</div>
  </div>
</template>

<script lang="ts" src="./NeonInputIndicator.ts" />
