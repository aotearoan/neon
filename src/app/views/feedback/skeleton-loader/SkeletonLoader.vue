<template>
  <component-documentation v-if="menuModel" :headline="headline" :model="menuModel">
    <neon-card>
      <neon-card-body>
        <p>
          Use <strong>NeonSkeletonLoader</strong> to create initial placeholder loading patterns indicating data will be
          loaded.
        </p>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Skeleton loader with 5 rows</h2>
        <div class="neon--vertical">
          <neon-skeleton-loader :count="5" />
        </div>
        <editor v-model="template" />
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./SkeletonLoader.ts"></script>
