<template>
  <component-documentation v-if="menuModel" :headline="headline" :model="menuModel">
    <neon-card>
      <neon-card-body>
        <p>
          The <strong>NeonFile</strong> component is an alternative to <strong>&lt;input type="file" /&gt;</strong>. It
          displayed a button which opens the file dialog and allows the users to select files using the native
          interface. The selected file(s) are then displayed in a list where the user has the ability to remove these
          individually or all at once.
        </p>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">File examples</h2>
        <neon-stack>
          <neon-stack>
            <neon-file label="Select file" @update:modelValue="files = $event" />
            <neon-file
              :multiple="true"
              color="brand"
              icon="plus"
              label="Add files"
              @update:modelValue="files = $event"
            />
            <neon-file
              :multiple="true"
              accept="image/svg+xml"
              label="Add SVG files"
              @update:modelValue="files = $event"
            />
            <neon-file
              :direct-upload="true"
              :multiple="true"
              label="Direct upload"
              @update:modelValue="files = $event"
            />
          </neon-stack>
          <editor v-model="fileExamples" />
        </neon-stack>
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./File.ts"></script>
