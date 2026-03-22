<template>
  <div class="neon-dialog">
    <neon-dialog v-bind="modelValue" @cancel="onButtonClick(false)" @confirm="onButtonClick(true)" />
  </div>
</template>

<script lang="ts" src="./NeonDialogContainer.ts"></script>
