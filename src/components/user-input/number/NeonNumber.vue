<template>
  <neon-field-group
    :class="[
      `neon-number--${size}`,
      `neon-number--${color}`,
      {
        'neon-number--disabled': disabled,
        'neon-number--editable': editable,
        'neon-number--with-buttons': spinButtons,
      },
    ]"
    class="neon-number"
  >
    <neon-button
      v-if="spinButtons"
      :aria-label="decrementLabel"
      :color="color"
      :disabled="disabled || (min !== undefined && min === modelValue)"
      :size="size"
      button-style="outline"
      class="neon-number__decrement"
      icon="minus"
      @click="decrement()"
    />
    <neon-input
      :aria-valuemax="max"
      :aria-valuemin="min"
      :aria-valuenow="modelValue"
      :color="color"
      :disabled="disabled || !editable"
      :inputmode="inputmode"
      :max="max"
      :min="min"
      :model-value="displayValue"
      :placeholder="placeholder"
      :size="size"
      :step="computedStep"
      class="neon-number__input"
      role="spinbutton"
      type="text"
      v-bind="sanitizedAttributes"
      @blur="onBlur()"
      @focus="onFocus()"
      @update:modelValue="valueChanged"
      @keydown.up.prevent="increment()"
      @keydown.down.prevent="decrement()"
    />
    <neon-button
      v-if="spinButtons"
      :aria-label="incrementLabel"
      :color="color"
      :disabled="disabled || (max !== undefined && max === modelValue)"
      :size="size"
      button-style="outline"
      class="neon-number__increment"
      icon="plus"
      @click="increment()"
    />
  </neon-field-group>
</template>

<script lang="ts" src="./NeonNumber.ts" />
