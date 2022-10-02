<template>
  <div
    :class="[
      `neon-badge--${color}`,
      alternateColor ? `neon-badge--alternate-color-${alternateColor}` : '',
      `neon-badge--${size}`,
      {
        'neon-badge--with-label': label,
        'neon-badge--disabled': disabled,
        'neon-badge--with-image': image,
        'neon-badge--with-icon': icon,
      },
      circular ? 'neon-badge--circular' : 'neon-badge--square',
    ]"
    class="neon-badge"
  >
    <span v-if="label" class="neon-badge__label">{{ label }}</span>
    <img v-else-if="image" :alt="imageAlt" :src="image" class="neon-badge__image" />
    <neon-icon v-else-if="icon" :disabled="disabled" :inverse="!!color" :name="icon" class="neon-badge__icon" />
  </div>
</template>

<script lang="ts" src="./NeonBadge.ts" />
