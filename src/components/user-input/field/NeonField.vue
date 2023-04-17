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
    <span class="neon-field__container">
      <span class="neon-field__label">{{ label }}</span>
      <neon-label v-if="optional" :label="optionalLabel" class="neon-field__optional" size="xxs" />
    </span>
    <!-- @slot optionally wrap the field with the label -->
    <slot></slot>
    <span
      v-if="message !== null"
      :class="`neon-color-text-${messageColor}`"
      class="neon-field__message"
      @click.prevent.stop=""
    >
      {{ message }}
    </span>
  </label>
</template>

<script lang="ts" src="./NeonField.ts"></script>
