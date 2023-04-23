<template>
  <label
    :aria-checked="indeterminate ? 'mixed' : modelValue"
    :aria-disabled="disabled"
    :class="[
      `neon-switch--${switchStyle}`,
      `neon-switch--${size}`,
      `neon-switch--${color}`,
      `neon-switch--${labelPosition}`,
      {
        'neon-switch--disabled': disabled,
        'neon-switch--checked': modelValue,
        'neon-switch--indeterminate': indeterminate,
      },
    ]"
    :role="switchStyle"
    class="neon-switch no-style"
    tabindex="-1"
    @click.stop.prevent="toggleSwitch"
    @keydown.enter.stop.prevent="toggleSwitch"
    @keydown.space.stop.prevent="toggleSwitch"
  >
    <neon-icon
      v-if="switchStyle === 'checkbox'"
      :disabled="disabled"
      :inverse="true"
      :name="indeterminate ? 'dash' : 'check'"
      :tabindex="!disabled && label ? 0 : undefined"
      class="neon-switch__checkbox"
    />
    <span v-if="switchStyle === 'switch'" :tabindex="!disabled ? 0 : undefined" class="neon-switch__switch">
      <span class="neon-switch__indicator"></span>
    </span>
    <input
      ref="checkbox"
      :checked="!indeterminate && modelValue"
      :disabled="disabled"
      class="neon-switch__input"
      type="checkbox"
      v-bind="sanitizedAttributes"
    />
    <span v-if="label" class="neon-switch__label">{{ label }}</span>
  </label>
</template>

<script lang="ts" src="./NeonSwitch.ts" />
