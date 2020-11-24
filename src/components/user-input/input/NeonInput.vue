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
      :id="id"
      :tabindex="tabindex"
      :type="type"
      :value="value"
      :disabled="disabled"
      :placeholder="computedPlaceholder()"
      @input="changeValue"
      @blur="onBlur"
      @focus="onFocus"
      class="neon-input__textfield neon-input__text"
      v-bind="sanitizedAttributes"
      v-on="sanitizedListeners"
    />
    <textarea
      v-else
      :rows="rows"
      :id="id"
      :tabindex="tabindex"
      :value="value"
      :disabled="disabled"
      :placeholder="computedPlaceholder()"
      @input="changeValue"
      @blur="onBlur"
      @focus="onFocus"
      class="neon-input__textfield neon-input__textarea"
      v-bind="sanitizedAttributes"
    ></textarea>
    <neon-icon
      v-if="iconVisible"
      :name="iconName"
      :tabindex="disabled || !icon ? false : 0"
      :disabled="disabled"
      :color="iconColor"
      role="button"
      @click.native="iconClicked"
      @keydown.enter.native="iconClicked"
      @keydown.space.native="iconClicked"
    />
  </div>
</template>

<script lang="ts" src="./NeonInput.ts" />
