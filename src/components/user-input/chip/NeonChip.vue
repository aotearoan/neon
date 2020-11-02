<template>
  <transition name="neon-transition-chip">
    <div
      v-if="open"
      class="no-style neon-chip"
      :class="[
        `neon-chip--${size}`,
        `neon-chip--${color}`,
        `neon-chip--${action}`,
        { 'neon-chip--disabled': disabled, 'neon-chip--active': active },
      ]"
      :role="role"
      :aria-disabled="disabled"
      @click="clicked()"
      @keydown="keyDown"
      @keyup="keyUp"
      :tabindex="!disabled ? 0 : undefined"
      ref="chip"
    >
      <neon-icon v-if="icon" :name="icon" class="neon-chip__icon" :color="color" />
      <span class="neon-chip__label">{{ label }}</span>
      <neon-icon v-if="action === 'remove'" name="times" class="neon-chip__close" color="neutral" />
    </div>
  </transition>
</template>

<script lang="ts" src="./NeonChip.ts" />
