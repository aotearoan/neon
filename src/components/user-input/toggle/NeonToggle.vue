<template>
  <div
    class="neon-toggle"
    :class="[
      `neon-toggle--${toggleStyle}`,
      `neon-toggle--${color}`,
      `neon-toggle--${orientation}`,
      `neon-toggle--${size}`,
      { 'neon-toggle--disabled neon--disabled': disabled },
    ]"
  >
    <label
      v-for="option in model"
      :key="option.key"
      class="neon-toggle__label no-style"
      :class="{
        'neon-toggle__label--disabled neon--disabled': disabled || option.disabled,
        'neon-toggle__label--checked': option.key === value,
        'neon-toggle__label--with-icon': option.icon,
      }"
    >
      <input
        type="radio"
        :name="name"
        :value="option.key"
        class="neon-toggle__input"
        :checked="option.key === value"
        :disabled="disabled || option.disabled"
        v-on="sanitizedListeners"
        v-bind="$attrs"
      />
      <div v-if="toggleStyle === 'radio-buttons'" class="neon-toggle__radio-button">
        <div v-if="option.key === value" class="neon-toggle__radio-button-indicator"></div>
      </div>
      <neon-icon v-if="option.icon" :name="option.icon" />
      <span v-if="option.label">{{ option.label }}</span>
    </label>
  </div>
</template>

<script lang="ts" src="./NeonToggle.ts" />
