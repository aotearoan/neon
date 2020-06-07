<template>
  <div>
    <neon-card>
      <neon-card-header>
        <h1>Drop Zone</h1>
      </neon-card-header>
      <neon-card-body>
        <p>
          The <span class="neon-monospaced">NeonDropZone</span> component allows users to drag and drop multiple files
          for upload. The dropzone can either be circular or square amd there is a slot to place any text/image inside
          the drop zone.
        </p>
      </neon-card-body>
    </neon-card>
    <example title="Drop zone example" :template="dropZoneExamples"></example>
  </div>
</template>

<script lang="ts" src="./DropZone.ts"></script>
