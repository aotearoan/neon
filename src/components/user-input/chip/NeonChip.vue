<template>
  <transition name="neon-transition-chip">
    <div
      v-if="open"
      ref="chip"
      :aria-disabled="disabled"
      :class="[
        `neon-chip--${size}`,
        `neon-chip--${color}`,
        `neon-chip--${action}`,
        { 'neon-chip--disabled': disabled, 'neon-chip--active': active },
      ]"
      :role="role"
      :tabindex="!disabled ? 0 : undefined"
      class="no-style neon-chip"
      v-bind="attrs"
      @click="clicked()"
      @keyup="keyUp"
      @keydown.space="keyDown()"
      @keydown.enter="keyDown()"
      @keydown.delete="action === 'remove' && keyDown()"
      @keypress.space.prevent=""
    >
      <neon-icon v-if="icon" :color="color" :name="icon" class="neon-chip__icon" />
      <span class="neon-chip__label">{{ label }}</span>
      <neon-icon v-if="action === 'remove'" class="neon-chip__close" color="neutral" name="times" />
    </div>
  </transition>
</template>

<script lang="ts" src="./NeonChip.ts" />
