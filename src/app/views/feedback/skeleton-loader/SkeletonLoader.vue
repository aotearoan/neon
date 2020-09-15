<template>
  <component-documentation v-if="menuModel" :examples="examples" :model="menuModel" :headline="headline">
    <neon-card>
      <neon-card-body>
        <p>
          Use <strong>NeonSkeletonLoader</strong> to create initial placeholder loading patterns indicating data will be
          loaded.
        </p>
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./SkeletonLoader.ts"></script>
