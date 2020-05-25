<template>
  <label class="neon-checkbox" :class="[
    `neon-checkbox--color-${color}`,
    `neon-checkbox--style-${checkboxStyle}`,
    {
      'neon-checkbox--selected': value,
      'neon-checkbox--disabled': disabled,
    },
  ]">
    <span class="neon-checkbox__label">{{ label }}</span>
    <input type="checkbox" class="neon-checkbox__input" v-model="value" :disabled="disabled" v-bind="$attrs" />
  </label>
</template>

<script lang="ts" src="./NeonCheckbox.ts" />
