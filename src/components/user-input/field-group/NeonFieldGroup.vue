<template>
  <div
    :class="[
      `neon-field-group--${indicatorStyle}`,
      `neon-field-group--${color}`,
      { 'neon-field-group--disabled': disabled },
    ]"
    class="neon-field-group"
  >
    <!-- @slot The slot for the inputs, buttons and input indicators to compose into a single component -->
    <slot></slot>
  </div>
</template>

<script lang="ts" src="./NeonFieldGroup.ts" />
