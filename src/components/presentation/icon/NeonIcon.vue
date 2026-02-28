<template>
  <div
    v-if="icon"
    :class="[
      `neon-icon--name-${name}`,
      color ? `neon-icon--${color}` : '',
      { 'neon-icon--inverse': inverse, 'neon-icon--disabled': disabled },
    ]"
    class="neon-icon"
    v-bind="sanitizedAttributes"
    v-html="icon"
  ></div>
</template>

<script lang="ts" src="./NeonIcon.ts"></script>
