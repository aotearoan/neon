<template>
  <component-documentation v-if="menuModel" :examples="examples" :model="menuModel" :headline="headline">
    <h2 class="neon-h3">Description</h2>
    <p>
      The <strong>NeonFile</strong> component is an alternative to <strong>&lt;input type="file" /&gt;</strong>. It
      displayed a button which opens the file dialog and allows the users to select files using the native interface.
      The selected file(s) are then displayed in a list where the user has the ability to remove these individually or
      all at once.
    </p>
  </component-documentation>
</template>

<script lang="ts" src="./File.ts"></script>
