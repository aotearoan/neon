<template>
  <label :class="{ 'neon-field-label--optional': optional }" :for="labelFor" class="neon-field-label">
    <span class="neon-field-label__container">
      <span class="neon-field-label__label">{{ label }}</span>
      <neon-label v-if="optional" :label="optionalLabel" class="neon-field-label__optional" size="xxs" />
    </span>
    <!-- @slot optionally wrap the field with the label -->
    <slot></slot>
  </label>
</template>

<script lang="ts" src="./NeonFieldLabel.ts"></script>
