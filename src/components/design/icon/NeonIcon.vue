<template>
  <div class="neon-icon"
       v-html="icon"
       v-bind="$attrs"
       :class="color ? `neon-icon--${color}` : ''">
  </div>
</template>

<script lang="ts" src="./NeonIcon.ts"></script>
