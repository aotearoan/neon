<template>
  <div class="neon-switch" :class="[
    `neon-switch--${size}`,
    {
      'neon-switch--disabled': disabled,
      'neon-switch--checked': checked,
    }
  ]">
    <label class="neon-switch__label">
      <span>{{ off.label }}</span>
      <span class="neon-switch__switch">
        <span class="neon-switch__indicator"></span>
      </span>
      <input type="checkbox" class="neon-switch__input" :checked="checked" :disabled="disabled" v-on="sanitizedListeners" />
      <span>{{ on.label }}</span>
    </label>
  </div>
</template>

<script lang="ts" src="./NeonSwitch.ts" />
