<template>
  <component-documentation v-if="menuModel" :examples="examples" :model="menuModel" :headline="headline">
    <neon-card>
      <neon-card-body>
        <p>
          A dialog component for confirming simple actions. This will be rendered above the content of the main window
          and present just two options to the user, one to proceed with the action and the other to cancel it.
        </p>
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./AppDialog.ts"></script>
