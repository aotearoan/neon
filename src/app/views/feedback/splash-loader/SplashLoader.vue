<template>
  <component-documentation
    v-if="menuModel"
    :examples="examples"
    :model="menuModel"
    :headline="headline"
    class="splash-loader-page"
  >
    <neon-card>
      <neon-card-body>
        <p>
          Use <strong>NeonSplashLoader</strong> to indicate loading progress to the user. This can be used fullscreen
          initial site loading as well as when UPDATING data, e.g. refreshing table data. For initial data loading
          please see <neon-link href="/feedback/skeleton-loader">NeonSkeletonLoader</neon-link>.
        </p>
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./SplashLoader.ts"></script>
