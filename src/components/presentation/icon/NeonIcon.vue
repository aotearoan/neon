<template>
  <div
    v-if="icon"
    :class="[color ? `neon-icon--${color}` : '', { 'neon-icon--inverse': inverse, 'neon-icon--disabled': disabled }]"
    class="neon-icon"
    v-bind="$attrs"
    v-html="icon"
  ></div>
</template>

<script lang="ts" src="./NeonIcon.ts"></script>
