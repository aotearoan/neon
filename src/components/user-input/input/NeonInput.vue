<template>
  <div
    class="neon-input"
    :class="[
      {
        'neon-input--with-icon': icon || (value && value.length > 0),
        'neon-input--disabled': disabled,
        'neon-input--focused': focused,
        'neon-input--placeholder-visible': placeholder && (!value || value.length === 0),
      },
      `neon-input--${size}`,
      `neon-input--${color}`,
      `neon-input--state-${state}`,
    ]"
  >
    <input
      v-if="!rows"
      ref="neonInput"
      :type="type"
      :value="value"
      :disabled="disabled"
      :placeholder="computedPlaceholder()"
      @input="changeValue"
      @blur="onBlur"
      @focus="onFocus"
      class="neon-input__textfield neon-input__text"
      :class="{ 'neon--disabled': disabled }"
      v-bind="$attrs"
      v-on="sanitizedListeners"
    />
    <neon-icon
      v-if="iconVisible"
      :name="iconName"
      :tabindex="disabled ? false : 0"
      :disabled="disabled"
      :color="iconColor"
      @click.native="iconClicked"
      @keyup.enter.native="iconClicked"
    />
    <textarea
      v-if="rows"
      :rows="rows"
      :value="value"
      :disabled="disabled"
      :placeholder="computedPlaceholder()"
      @input="changeValue"
      @blur="onBlur"
      @focus="onFocus"
      :class="{ 'neon--disabled': disabled }"
      class="neon-input__textfield neon-input__textarea"
      v-bind="$attrs"
    ></textarea>
  </div>
</template>

<script lang="ts" src="./NeonInput.ts" />
