<template>
  <component-documentation v-if="menuModel" :examples="examples" :model="menuModel" :headline="headline">
    <neon-card>
      <neon-card-body>
        <p>
          A modal dialog component. This will be rendered above the content of the main window and can either be
          dismissed by the user or configured to require user interaction before dismissal.
        </p>
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./Modal.ts"></script>
