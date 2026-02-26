<template>
  <div
    :class="[
      {
        'neon-dropdown--with-indicator': indicator,
        'neon-dropdown--open': modelValue,
        'neon-dropdown--open-on-hover': openOnHover,
        'neon-dropdown--icon-only': icon && !label,
        'neon-dropdown--disabled': disabled,
      },
      `neon-dropdown--${size}`,
      `neon-dropdown--${color}`,
    ]"
    class="neon-dropdown"
  >
    <div ref="dropdownButton">
      <!-- @slot optionally replace the dropdown button with a custom control -->
      <slot name="dropdown-button">
        <div v-if="isButtonStyle" class="neon-dropdown__button-wrapper">
          <neon-button
            :id="id"
            :alternate-color="alternateColor"
            :aria-expanded="modelValue"
            :button-style="dropdownStyle"
            :color="color"
            :disabled="disabled"
            :icon="icon"
            :indicator="indicator"
            :indicator-expanded="modelValue"
            :label="label"
            :size="size"
            aria-haspopup="true"
            class="neon-dropdown__button"
            @blur="onBlur()"
            @focus="onFocus()"
            @click.stop.prevent.capture="toggleOpen"
            @keydown.enter.stop.prevent.capture="toggleOpen"
            @keydown.space.stop.prevent.capture="toggleOpen"
          />
        </div>
        <div
          v-else
          :id="id"
          ref="dropdownButton"
          :tabindex="!disabled ? 0 : undefined"
          class="neon-dropdown__badge"
          role="button"
          @click.stop.prevent.capture="toggleOpen"
          @keydown.enter.stop.prevent.capture="toggleOpen"
          @keydown.space.stop.prevent.capture="toggleOpen"
        >
          <neon-badge
            :alternate-color="alternateColor"
            :circular="dropdownStyle === 'circular-badge'"
            :color="color"
            :disabled="disabled"
            :icon="icon"
            :image="image"
            :imageAlt="imageAlt"
            :label="label"
            :size="size"
          />
          <neon-expansion-indicator
            v-if="indicator"
            :color="color"
            :disabled="disabled"
            :expanded="modelValue"
            class="neon-button__indicator"
          />
        </div>
      </slot>
    </div>
    <div class="neon-dropdown__click-blocker" />
    <div
      v-show="openOnHover || modelValue"
      ref="dropdownContent"
      :class="`neon-dropdown__content--${dropdownPlacement}`"
      class="neon-dropdown__content"
    >
      <!-- @slot The content of the open dropdown -->
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" src="./NeonDropdown.ts"></script>
