<template>
  <neon-field-group
    class="neon-number__wrapper"
    :class="[
      `neon-number__wrapper--${size}`,
      `neon-number__wrapper--${color}`,
      { 'neon-number__wrapper--disabled': disabled },
    ]"
  >
    <neon-button
      :size="size"
      :color="color"
      :disabled="disabled || (min !== undefined && min == value)"
      icon="minus"
      button-style="outline"
      @click="decrement()"
      class="neon-number__decrement"
      :aria-label="decrementLabel"
    />
    <neon-input
      type="number"
      role="spinbutton"
      :aria-valuemax="max"
      :max="max"
      :aria-valuemin="min"
      :min="min"
      :step="step"
      aria-valuenow="value"
      :value="value"
      :size="size"
      :color="color"
      :disabled="disabled"
      :inputmode="inputmode"
      v-bind="sanitizedAttributes"
      v-on="sanitizedListeners"
      @input="$emit('input', +$event)"
      class="neon-number"
    />
    <neon-button
      :size="size"
      :color="color"
      :disabled="disabled || (max !== undefined && max == value)"
      icon="plus"
      button-style="outline"
      @click="increment()"
      class="neon-number__increment"
      :aria-label="incrementLabel"
    />
  </neon-field-group>
</template>

<script lang="ts" src="./NeonNumber.ts" />
