<template>
  <label
    ref="toggleChipLabel"
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
    @keydown.space.prevent="toggleChip"
  >
    <neon-icon v-if="modelValue && showCheck" :disabled="disabled" class="neon-toggle-chip__checked" name="check" />
    <!-- @slot override the label with custom contents -->
    <slot>
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
