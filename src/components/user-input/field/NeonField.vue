<template>
  <label
    :class="{
      'neon-field--optional': optional,
      'neon-field--disabled': disabled,
      'neon-field--with-message': message !== null,
    }"
    :for="labelFor"
    class="neon-field"
  >
    <span class="neon-field__label-wrapper">
      <span class="neon-field__label">{{ label }}</span>
      <neon-label v-if="optional" :disabled="disabled" :label="optionalLabel" class="neon-field__optional" size="xxs" />
    </span>
    <div class="neon-field__contents">
      <!-- @slot optionally wrap the field with the label -->
      <slot></slot>
      <span
        v-if="message !== null"
        :class="`neon-color-${messageColor}`"
        class="neon-field__message"
        @click.prevent.stop=""
      >
        {{ message }}
      </span>
    </div>
  </label>
</template>

<script lang="ts" src="./NeonField.ts"></script>
