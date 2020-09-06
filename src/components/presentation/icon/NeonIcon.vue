<template>
  <div
    class="neon-icon"
    v-html="icon"
    v-bind="$attrs"
    :class="[`neon-icon--${color}`, { 'neon-icon--inverse': inverse, 'neon-icon--disabled': disabled }]"
  ></div>
</template>

<script lang="ts" src="./NeonIcon.ts"></script>
