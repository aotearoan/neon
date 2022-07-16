<template>
  <component-documentation v-if="menuModel" :examples="examples" :model="menuModel" :headline="headline">
    <neon-card>
      <neon-card-body>
        <p>
          A component for displaying linear progress. The progress can be displayed as a percentage (default) or as a
          counter (x / y).
        </p>
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./LinearProgress.ts"></script>
