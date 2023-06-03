<template>
  <component-documentation v-if="menuModel" :headline="headline" :model="menuModel">
    <neon-card>
      <neon-card-body>
        <p>
          The <strong>NeonDropZone</strong> component allows users to drag and drop multiple files for upload. The
          dropzone can either be circular or square amd there is a slot to present any text/image inside the drop zone.
        </p>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Drop zone example</h2>
        <neon-inline class="drop-zone-examples">
          <neon-drop-zone>
            <span>Drop files here to upload</span>
          </neon-drop-zone>
          <neon-drop-zone :circular="true" :disabled="false">
            <span>Circular drop zone</span>
          </neon-drop-zone>
        </neon-inline>
        <editor v-model="dropZoneExamples" />
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./DropZone.ts"></script>
