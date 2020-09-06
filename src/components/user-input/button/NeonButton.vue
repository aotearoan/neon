<template>
  <neon-link v-if="href" :href="href" v-bind="$attrs" v-on="$listeners" class="neon-button" :class="classes">
    <neon-icon
      v-if="icon || state !== 'ready'"
      :name="iconName"
      :color="buttonStyle !== 'solid' ? color : undefined"
      :inverse="buttonStyle === 'solid'"
    />
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
    <neon-icon
      v-if="icon || state !== 'ready'"
      :name="iconName"
      :disabled="disabled"
      :color="buttonStyle !== 'solid' ? color : undefined"
      :inverse="buttonStyle === 'solid'"
    />
    <span v-if="label" class="neon-button__label">{{ label }}</span>
    <neon-expansion-indicator
      v-if="indicator"
      :color="color"
      class="neon-button__indicator"
      :expanded="indicatorExpanded"
      :inverse="buttonStyle === 'solid'"
      :disabled="disabled"
    />
  </button>
</template>

<script lang="ts" src="./NeonButton.ts" />
