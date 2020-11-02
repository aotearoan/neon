<template>
  <label
    class="neon-toggle-chip no-style"
    :class="[
      `neon-toggle-chip--${size}`,
      `neon-toggle-chip--${color}`,
      {
        'neon-toggle-chip--disabled neon--disabled': disabled,
        'neon-toggle-chip--checked': value,
        'neon-toggle-chip--show-check': showCheck,
      },
    ]"
    tabindex="0"
    :aria-checked="value"
    @keydown.enter="toggleChip"
    @keydown.space="toggleChip"
    @keypress.space.prevent=""
  >
    <neon-icon v-if="value && showCheck" class="neon-toggle-chip__checked" :disabled="disabled" name="check" />
    <span class="neon-toggle-chip__label">{{ label }}</span>
    <input
      type="checkbox"
      class="neon-toggle-chip__input"
      :checked="value"
      :disabled="disabled"
      v-on="sanitizedListeners"
      v-bind="$attrs"
      tabindex="-1"
    />
  </label>
</template>

<script lang="ts" src="./NeonToggleChip.ts" />
