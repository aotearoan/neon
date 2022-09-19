<template>
  <div
    :class="[`neon-color--${size}`, `neon-color--${color}`, { 'neon-color--disabled': disabled }]"
    class="neon-color"
  >
    <neon-input
      v-if="!pickerOnly"
      v-model="localValue"
      :color="color"
      :disabled="disabled"
      :hide-icon="true"
      :pattern="'#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})'"
      :placeholder="placeholder"
      :size="size"
      class="neon-color__text-input"
      type="text"
      v-bind="$attrs"
    >
    </neon-input>
    <neon-input
      v-model="localValue"
      :color="color"
      :disabled="disabled"
      :hide-icon="true"
      :size="size"
      class="neon-color__input"
      type="color"
      v-bind="$attrs"
    >
    </neon-input>
    <div
      :style="`background-color:${modelValue || '#000000'};box-shadow: 0 0 0 4px ${modelValue || '#000000'}4D`"
      class="neon-color__indicator"
    ></div>
  </div>
</template>

<script lang="ts" src="./NeonColor.ts"></script>
