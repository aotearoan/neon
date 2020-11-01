<template>
  <div
    class="neon-dropdown"
    :class="[
      {
        'neon-dropdown--with-indicator': indicator,
        'neon-dropdown--open': value,
        'neon-dropdown--open-on-hover': openOnHover,
        'neon-dropdown--icon-only': icon && !label,
        'neon-dropdown--disabled': disabled,
      },
      `neon-dropdown--${size}`,
      `neon-dropdown--${color}`,
    ]"
  >
    <div ref="dropdownButton" v-if="dropdownStyle === 'text-button' || dropdownStyle === 'solid-button'">
      <neon-button
        class="neon-dropdown__button"
        :button-style="dropdownStyle === 'text-button' ? 'text' : 'solid'"
        :color="color"
        :size="size"
        :indicator="indicator"
        :indicator-expanded="value"
        :disabled="disabled"
        :label="label"
        :icon="icon"
        @click="toggleOpen()"
        @blur="onBlur()"
        @focus="onFocus()"
        aria-haspopup="true"
        :aria-expanded="value"
      />
    </div>
    <div
      v-else
      @click="toggleOpen"
      @keydown.enter="toggleOpen"
      @keydown.space="toggleOpen"
      @keypress.space.prevent=""
      ref="dropdownButton"
      role="button"
      :tabindex="!disabled ? 0 : undefined"
      class="neon-dropdown__badge"
    >
      <neon-badge
        :icon="icon"
        :label="label"
        :size="size"
        :color="color"
        :disabled="disabled"
        :circular="dropdownStyle === 'circular-badge'"
        :image="image"
        :imageAlt="imageAlt"
      />
      <neon-expansion-indicator
        v-if="indicator"
        class="neon-button__indicator"
        :disabled="disabled"
        :color="color"
        :expanded="value"
      />
    </div>
    <div class="neon-dropdown__click-blocker" />
    <div ref="dropdownContent" class="neon-dropdown__content" :class="`neon-dropdown__content--${dropdownPlacement}`">
      <template v-if="openOnHover || value">
        <!-- @slot The content of the open dropdown -->
        <slot></slot>
      </template>
    </div>
  </div>
</template>

<script lang="ts" src="./NeonDropdown.ts"></script>
