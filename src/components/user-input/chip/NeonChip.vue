<template>
  <transition name="neon-transition-chip">
    <div
      v-if="open"
      class="no-style neon-chip"
      :class="[
        `neon-chip--${size}`,
        `neon-chip--${color}`,
        `neon-chip--${action}`,
        { 'neon-chip--disabled': disabled },
      ]"
      @click="clicked()"
      @keydown="keyDown"
      :tabindex="!disabled && action !== 'none' ? 0 : undefined"
      ref="chip"
    >
      <neon-icon v-if="icon" :name="icon" class="neon-chip__icon" :color="color" />
      <span class="neon-chip__label">{{ label }}</span>
      <neon-icon v-if="action === 'remove'" name="times" class="neon-chip__close" color="neutral" />
    </div>
  </transition>
</template>

<script lang="ts" src="./NeonChip.ts" />
