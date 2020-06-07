<template>
  <div
    class="neon-drop-zone"
    ref="dropzone"
    :class="[
      {
        'neon--disabled neon-drop-zone--disabled': disabled,
        'neon-square neon-drop-zone--circular': circular,
        'neon-drop-zone--active': active,
      },
      `neon-drop-zone--state-${state}`,
    ]"
  >
    <!-- @slot: drop zone contents (e.g. images, text etc...) -->
    <slot></slot>
  </div>
</template>

<script lang="ts" src="./NeonDropZone.ts"></script>
