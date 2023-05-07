<template>
  <label
    class="no-style neon-input-indicator"
    :class="[
      `neon-input-indicator--${size}`,
      {
        'neon-input-indicator--with-icon': icon,
        'neon-input-indicator--with-label': label,
        'neon-input-indicator--disabled': disabled,
      },
    ]"
  >
    <neon-icon v-if="icon" :name="icon" :disabled="disabled" class="neon-input-indicator__icon" />
    <span v-if="label" class="neon-input-indicator__label">{{ label }}</span>
  </label>
</template>

<script lang="ts" src="./NeonInputIndicator.ts" />
