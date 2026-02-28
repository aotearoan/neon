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
      v-if="rows === null"
      :id="id"
      ref="neonInput"
      :aria-placeholder="computedPlaceholder"
      :autocomplete="autocomplete"
      :disabled="disabled"
      :inputmode="inputmode"
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
    <div v-else class="neon-input__textarea-wrapper">
      <textarea
        :id="id"
        :aria-placeholder="computedPlaceholder"
        :autocomplete="autocomplete"
        :disabled="disabled"
        :inputmode="inputmode"
        :placeholder="computedPlaceholder"
        :rows="rows"
        :tabindex="tabindex"
        :value="modelValue"
        class="neon-input__textfield neon-input__textarea"
        v-bind="sanitizedAttributes"
        @blur="onBlur"
        @focus="onFocus"
        @keydown="onKeyDown"
        @input.stop.prevent="changeValue"
      >
      </textarea>
      <span v-if="counterLabel" class="neon-input__textarea-counter">{{ counterLabel }}</span>
    </div>
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
  </div>
</template>

<script lang="ts" src="./NeonInput.ts" />
