<template>
  <neon-link v-if="href" :href="href" v-bind="$attrs" v-on="$listeners" class="neon-button" :class="classes">
    <neon-icon v-if="icon || state !== 'ready'" :name="iconName" />
    <span v-if="label" class="neon-button__label">{{ label }}</span>
  </neon-link>
  <button
    v-else
    v-bind="$attrs"
    v-on="$listeners"
    :disabled="disabled || state !== 'ready'"
    class="neon-button"
    :class="classes"
  >
    <neon-icon v-if="icon || state !== 'ready'" :name="iconName" />
    <span v-if="label" class="neon-button__label">{{ label }}</span>
    <neon-expansion-indicator
      v-if="indicator"
      :color="color"
      class="neon-button__indicator"
      :expanded="indicatorExpanded"
    />
  </button>
</template>

<script lang="ts" src="./NeonButton.ts" />
