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
    v-bind="attrs"
    @keydown.space="click()"
    @keypress.space.prevent=""
  >
    <neon-icon
      v-if="icon || state !== 'ready'"
      :color="buttonStyle !== 'solid' ? color : undefined"
      :inverse="buttonStyle === 'solid'"
      :name="iconName"
    />
    <span v-if="label" class="neon-button__label">{{ label }}</span>
  </neon-link>
  <button v-else :class="classes" :disabled="disabled || state !== 'ready'" class="neon-button" v-bind="attrs">
    <neon-icon
      v-if="icon || state !== 'ready'"
      :color="buttonStyle !== 'solid' ? color : undefined"
      :disabled="disabled"
      :inverse="buttonStyle === 'solid'"
      :name="iconName"
    />
    <span v-if="label" class="neon-button__label">{{ label }}</span>
    <neon-expansion-indicator
      v-if="indicator"
      :color="color"
      :disabled="disabled"
      :expanded="indicatorExpanded"
      :inverse="buttonStyle === 'solid'"
      class="neon-button__indicator"
    />
  </button>
</template>

<script lang="ts" src="./NeonButton.ts" />
