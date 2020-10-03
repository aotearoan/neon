<template>
  <label
    class="neon-switch no-style"
    :class="[
      `neon-switch--${switchStyle}`,
      `neon-switch--${size}`,
      `neon-switch--${color}`,
      {
        'neon-switch--disabled neon--disabled': disabled,
        'neon-switch--checked': value,
      },
    ]"
  >
    <neon-icon
      v-if="switchStyle === 'checkbox'"
      class="neon-switch__checkbox"
      :inverse="true"
      :disabled="disabled"
      name="check"
    />
    <span class="neon-switch__label">{{ label }}</span>
    <span v-if="switchStyle === 'switch'" class="neon-switch__switch">
      <span class="neon-switch__indicator"></span>
    </span>
    <input
      type="checkbox"
      class="neon-switch__input"
      :checked="value"
      :disabled="disabled"
      v-on="sanitizedListeners"
      v-bind="$attrs"
    />
  </label>
</template>

<script lang="ts" src="./NeonSwitch.ts" />
