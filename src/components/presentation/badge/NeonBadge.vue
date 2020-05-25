<template>
  <div
    class="neon-badge"
    :class="[
      `neon-badge--${color}`,
      `neon-badge--${size}`,
      { 'neon-badge--with-label': label },
      { 'neon-badge--with-image': image },
      { 'neon-badge--with-icon': icon },
      circular ? 'neon-badge--circular' : 'neon-badge--square',
    ]"
  >
    <span v-if="label" class="neon-badge__label">{{ label }}</span>
    <img v-else-if="image" class="neon-badge__image" :src="image" />
    <neon-icon v-else-if="icon" :name="icon" class="neon-badge__icon"></neon-icon>
  </div>
</template>

<script lang="ts" src="./NeonBadge.ts" />
