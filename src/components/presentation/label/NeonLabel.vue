<template>
  <div
    class="neon-label"
    :class="[
      `neon-label--${color}`,
      alternateColor ? `neon-label--alternate-color-${alternateColor}` : '',
      `neon-label--${size}`,
      icon ? `neon-label--icon-${iconPosition}` : '',
      {
        'neon-label--with-icon': icon,
        'neon-label--with-label': label,
        'neon-label--disabled': disabled,
      },
    ]"
  >
    <neon-icon v-if="icon" class="neon-label__icon" :color="color" :disabled="disabled" :name="icon" />
    <span v-if="label" class="neon-label__label">{{ label }}</span>
  </div>
</template>

<script lang="ts" src="./NeonLabel.ts" />
