<template>
  <div
    ref="dropzone"
    class="neon-drop-zone"
    :class="[
      {
        'neon-drop-zone--disabled': disabled,
        'neon-square neon-drop-zone--circular': circular,
        'neon-drop-zone--active': active,
      },
      `neon-drop-zone--state-${state}`,
    ]"
  >
    <!-- @slot Drop zone content (e.g. images, text etc...) -->
    <div class="neon-drop-zone__container">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" src="./NeonDropZone.ts"></script>
