<template>
  <component-documentation v-if="menuModel" :examples="examples" :model="menuModel" :headline="headline">
    <h2 class="neon-h3">Description</h2>
    <p>
      The <strong>NeonDropZone</strong> component allows users to drag and drop multiple files for upload. The dropzone
      can either be circular or square amd there is a slot to present any text/image inside the drop zone.
    </p>
  </component-documentation>
</template>

<script lang="ts" src="./DropZone.ts"></script>
