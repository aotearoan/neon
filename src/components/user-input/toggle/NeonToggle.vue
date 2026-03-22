<template>
  <div
    :class="[
      `neon-toggle--${toggleStyle}`,
      `neon-toggle--${disabled ? 'low-contrast' : color}`,
      `neon-toggle--${orientation}`,
      `neon-toggle--${size}`,
      { 'neon-toggle--disabled': disabled },
    ]"
    class="neon-toggle"
    role="radiogroup"
  >
    <template v-for="(option, index) in model" :key="option.key">
      <label
        :aria-checked="option.key === modelValue"
        :aria-disabled="disabled || option.disabled"
        :class="{
          'neon-toggle__label--disabled': disabled || option.disabled,
          'neon-toggle__label--checked': option.key === modelValue,
          'neon-toggle__label--with-icon': option.icon,
          'neon-toggle__label--with-slot-override': slots.option,
        }"
        :tabindex="!disabled && !option.disabled ? 0 : undefined"
        class="neon-toggle__label no-style"
        role="radio"
        @keydown.enter="selectOption(option)"
        @keydown.space.prevent="selectOption(option)"
      >
        <input
          :checked="option.key === modelValue"
          :disabled="disabled || option.disabled"
          :name="name"
          :tabindex="-1"
          :value="option.key"
          class="neon-toggle__input"
          type="radio"
          v-bind="sanitizedAttributes"
          @click="onInput(option)"
        />
        <div v-if="toggleStyle !== NeonToggleStyle.Toggle" class="neon-toggle__radio-button">
          <div v-if="option.key === modelValue" class="neon-toggle__radio-button-indicator"></div>
        </div>
        <!-- @slot This slot is for overriding the option rendering, it is passed two arguments:
  @binding {NeonToggleModel} option - the option for which to render additional content.
  @binding {number} index - the index of the option in the list. -->
        <slot :index="index" :option="option" name="option">
          <neon-icon v-if="option.icon" :disabled="disabled || option.disabled" :name="option.icon" />
          <span v-if="option.label">{{ option.label }}</span>
        </slot>
      </label>
      <!-- @slot slot for rendering additional option content:
  @binding {NeonToggleModel} option - the option for which to render additional content.
  @binding {number} index - the index of the option in the list. -->
      <div v-if="slots.additionalContent" class="neon-toggle__additional-content">
        <slot name="additionalContent" v-bind="{ option, index }"></slot>
      </div>
    </template>
  </div>
</template>

<script lang="ts" src="./NeonToggle.ts" />
