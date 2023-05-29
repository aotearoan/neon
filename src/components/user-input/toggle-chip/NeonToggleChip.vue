<template>
  <label
    :aria-disabled="disabled"
    :aria-pressed="modelValue"
    :class="[
      `neon-toggle-chip--${size}`,
      `neon-toggle-chip--${color}`,
      {
        'neon-toggle-chip--disabled': disabled,
        'neon-toggle-chip--checked': modelValue,
        'neon-toggle-chip--show-check': showCheck,
      },
    ]"
    class="neon-toggle-chip no-style"
    role="button"
    tabindex="0"
    @keydown.enter="toggleChip"
    @keydown.space="toggleChip"
    @keypress.space.prevent=""
  >
    <!-- @slot override the default contents -->
    <slot>
      <neon-icon v-if="modelValue && showCheck" :disabled="disabled" class="neon-toggle-chip__checked" name="check" />
      <span class="neon-toggle-chip__label">{{ label }}</span>
    </slot>
    <input
      :checked="modelValue"
      :disabled="disabled"
      class="neon-toggle-chip__input"
      tabindex="-1"
      type="checkbox"
      v-bind="sanitizedAttributes"
      @click.prevent.stop="toggleChip"
      @input.prevent.stop="toggleChip"
    />
  </label>
</template>

<script lang="ts" src="./NeonToggleChip.ts" />
