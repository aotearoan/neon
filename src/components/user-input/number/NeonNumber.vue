<template>
  <neon-field-group
    class="neon-number"
    :class="[
      `neon-number--${size}`,
      `neon-number--${color}`,
      {
        'neon-number--disabled': disabled,
        'neon-number--editable': editable,
        'neon-number--with-buttons': spinButtons,
      },
    ]"
  >
    <neon-button
      v-if="spinButtons"
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
      class="neon-number__input"
      type="text"
      role="spinbutton"
      :aria-valuemax="max"
      :max="max"
      :aria-valuemin="min"
      :min="min"
      :step="computedStep"
      :aria-valuenow="value"
      :value="focus ? rawValue : formattedValue"
      :size="size"
      :color="color"
      :disabled="disabled || !editable"
      :inputmode="inputmode"
      v-bind="sanitizedAttributes"
      v-on="sanitizedListeners"
      @input="valueChanged"
      @focus="onFocus()"
      @blur="onBlur()"
      @keydown.up.prevent="increment()"
      @keydown.down.prevent="decrement()"
    />
    <neon-button
      v-if="spinButtons"
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
