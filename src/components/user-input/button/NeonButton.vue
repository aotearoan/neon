<template>
  <neon-link
    v-if="href"
    :href="href"
    v-bind="$attrs"
    v-on="$listeners"
    class="neon-button"
    :class="classes">
    <neon-icon v-if="icon" :name="icon" />
    <span v-if="label" class="neon-button__label">{{ label }}</span>
  </neon-link>
  <button
    v-else
    v-bind="$attrs"
    v-on="$listeners"
    :disabled="disabled"
    class="neon-button"
    :class="classes">
    <neon-icon v-if="icon" :name="icon" />
    <span v-if="label" class="neon-button__label">{{ label }}</span>
  </button>
</template>

<script lang="ts" src="./NeonButton.ts" />
