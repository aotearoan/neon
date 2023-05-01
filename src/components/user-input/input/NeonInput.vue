<template>
  <div
    :class="[
      {
        'neon-input--with-icon': !hideIcon && (icon || (modelValue && modelValue.length > 0)),
        'neon-input--disabled': disabled,
        'neon-input--focused': focused,
        'neon-input--placeholder-visible': placeholder && (!modelValue || modelValue.length === 0),
        'neon-input--with-state-highlight': stateHighlight,
        'neon-input--with-state-icon': stateIcon,
      },
      `neon-input--${size}`,
      `neon-input--${color}`,
      `neon-input--state-${state}`,
    ]"
    class="neon-input"
  >
    <input
      v-if="!rows"
      :id="id"
      ref="neonInput"
      :aria-placeholder="computedPlaceholder"
      :disabled="disabled"
      :placeholder="computedPlaceholder"
      :tabindex="tabindex"
      :type="type"
      :value="modelValue"
      class="neon-input__textfield neon-input__text"
      v-bind="sanitizedAttributes"
      @blur="onBlur"
      @focus="!disabled && onFocus()"
      @input.stop.prevent="!disabled && changeValue($event)"
    />
    <textarea
      v-else
      :id="id"
      :aria-placeholder="computedPlaceholder"
      :disabled="disabled"
      :placeholder="computedPlaceholder"
      :rows="rows"
      :tabindex="tabindex"
      :value="modelValue"
      class="neon-input__textfield neon-input__textarea"
      v-bind="sanitizedAttributes"
      @blur="onBlur"
      @focus="onFocus"
      @input.stop.prevent="changeValue"
    ></textarea>
    <neon-icon
      v-if="iconVisible"
      :class="{ 'neon-input__icon--read-only': iconReadonly }"
      :color="iconColor"
      :disabled="disabled"
      :name="iconName"
      :role="!iconReadonly && 'button'"
      :tabindex="disabled || iconReadonly ? false : 0"
      :transparent="true"
      class="neon-input__icon"
      @click="!iconReadonly && iconClicked($event)"
      @keydown.enter="!iconReadonly && iconClicked($event)"
      @keydown.space="!iconReadonly && iconClicked($event)"
    />
    <span v-if="maxlength && maxlength > 0" class="neon-input__textarea-counter">
      {{ `${modelValue.length}/${maxlength}` }}
    </span>
  </div>
</template>

<script lang="ts" src="./NeonInput.ts" />
