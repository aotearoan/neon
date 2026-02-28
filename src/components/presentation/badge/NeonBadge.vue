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
        'neon-badge--editable': editable,
      },
      circular ? 'neon-badge--circular' : 'neon-badge--square',
    ]"
    class="neon-badge"
  >
    <div v-if="jazziconId" class="neon-badge__image" v-html="svg" />
    <span v-else-if="label" class="neon-badge__label">{{ label }}</span>
    <img v-else-if="image" :alt="imageAlt" :src="image" class="neon-badge__image" />
    <neon-icon v-else-if="icon" :disabled="disabled" :inverse="!!color" :name="icon" class="neon-badge__icon" />
    <neon-file
      v-if="editable"
      :accept="accept"
      :circular="circular"
      :color="color"
      :direct-upload="true"
      :disabled="disabled"
      :size="size"
      :title="editButtonTitle"
      class="neon-badge__upload"
      icon="pencil"
      @update:modelValue="emit('change-image', $event)"
    />
  </div>
</template>

<script lang="ts" src="./NeonBadge.ts" />
