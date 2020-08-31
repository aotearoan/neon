<template>
  <div
    class="neon-label"
    :class="[
      `neon-label--${color}`,
      `neon-label--${size}`,
      icon ? `neon-label--icon-${iconPosition}` : '',
      {
        'neon-label--with-icon': icon,
        'neon-label--with-label': label,
      },
    ]"
  >
    <neon-icon v-if="icon" class="neon-label__icon" :name="icon"></neon-icon>
    <span v-if="label" class="neon-label__label">{{ label }}</span>
  </div>
</template>

<script lang="ts" src="./NeonLabel.ts" />
