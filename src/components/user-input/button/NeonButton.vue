<template>
  <neon-link
    v-if="href"
    ref="button"
    :class="classes"
    :href="href"
    :tabindex="!disabled ? 0 : -1"
    class="neon-button"
    outline-style="none"
    role="button"
    v-bind="sanitizedAttributes"
    @keydown.space.prevent="clickLink"
  >
    <neon-icon
      v-if="icon || state !== 'ready'"
      :color="buttonStyle !== 'solid' ? color : undefined"
      :disabled="disabled"
      :inverse="buttonStyle === 'solid' || inverse"
      :name="iconName"
    />
    <span v-if="label" class="neon-button__label">{{ label }}</span>
  </neon-link>
  <button
    v-else
    ref="button"
    :class="classes"
    :disabled="disabled || state !== 'ready'"
    :tabindex="!disabled ? 0 : -1"
    class="neon-button"
    v-bind="sanitizedAttributes"
    @click="clickButton"
  >
    <neon-icon
      v-if="icon || state !== 'ready'"
      :color="buttonStyle !== 'solid' ? color : undefined"
      :disabled="disabled"
      :inverse="buttonStyle === 'solid' || inverse"
      :name="iconName"
    />
    <span v-if="label" class="neon-button__label">{{ label }}</span>
    <neon-expansion-indicator
      v-if="indicator"
      :color="buttonStyle === 'text' ? color : 'low-contrast'"
      :disabled="disabled"
      :expanded="indicatorExpanded"
      :inverse="buttonStyle === 'solid' || inverse"
      class="neon-button__indicator"
    />
  </button>
</template>

<script lang="ts" src="./NeonButton.ts" />
