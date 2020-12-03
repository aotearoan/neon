<template>
  <label
    class="neon-switch no-style"
    :class="[
      `neon-switch--${switchStyle}`,
      `neon-switch--${size}`,
      `neon-switch--${color}`,
      `neon-switch--${labelPosition}`,
      {
        'neon-switch--disabled': disabled,
        'neon-switch--checked': value,
        'neon-switch--indeterminate': indeterminate,
      },
    ]"
    tabindex="-1"
    @keydown.enter="toggleSwitch"
    @keydown.space="toggleSwitch"
    @keydown.space.prevent=""
    :role="switchStyle"
    :aria-checked="indeterminate ? 'mixed' : value"
    :aria-disabled="disabled"
  >
    <neon-icon
      v-if="switchStyle === 'checkbox'"
      class="neon-switch__checkbox"
      :inverse="true"
      :disabled="disabled"
      :name="indeterminate ? 'dash' : 'check'"
      :tabindex="!disabled ? 0 : undefined"
    />
    <span v-if="switchStyle === 'switch'" class="neon-switch__switch" :tabindex="!disabled ? 0 : undefined">
      <span class="neon-switch__indicator"></span>
    </span>
    <input
      ref="checkbox"
      type="checkbox"
      class="neon-switch__input"
      :checked="!indeterminate && value"
      :disabled="disabled"
      v-on="sanitizedListeners"
      v-bind="$attrs"
    />
    <span class="neon-switch__label">{{ label }}</span>
  </label>
</template>

<script lang="ts" src="./NeonSwitch.ts" />
