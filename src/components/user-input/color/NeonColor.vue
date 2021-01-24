<template>
  <div
    class="neon-color"
    :class="[`neon-color--${size}`, `neon-color--${color}`, { 'neon-color--disabled': disabled }]"
  >
    <neon-input
      v-if="!pickerOnly"
      :value="value"
      @input="changeValue"
      :size="size"
      :color="color"
      :hide-icon="true"
      :disabled="disabled"
      :placeholder="placeholder"
      :pattern="'#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})'"
      v-bind="$attrs"
      v-on="$listeners"
      type="text"
      class="neon-color__text-input"
    >
    </neon-input>
    <neon-input
      class="neon-color__input"
      :value="value"
      :size="size"
      :color="color"
      :hide-icon="true"
      @input="changeValue"
      :disabled="disabled"
      v-bind="$attrs"
      v-on="$listeners"
      type="color"
    >
    </neon-input>
    <div
      class="neon-color__indicator"
      :style="`background-color:${value || '#000000'};box-shadow: 0 0 0 4px ${value || '#000000'}4D`"
    ></div>
  </div>
</template>

<script lang="ts" src="./NeonColor.ts"></script>
