<template>
  <div class="neon-labelled-content">
    <label
      :class="{ 'neon-labelled-content__label--important': important }"
      class="no-style neon-labelled-content__label"
    >
      {{ label }}
    </label>
    <!-- @slot slot for adding labelled content. NOTE: for a single line value use the value property instead -->
    <slot name="default">
      <span v-if="value" :class="{ 'neon-number': numeric }" class="neon-labelled-content__value">{{ value }}</span>
    </slot>
  </div>
</template>

<script lang="ts" src="./NeonLabelledContent.ts"></script>
