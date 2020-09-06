<template>
  <component-documentation v-if="menuModel" :examples="examples" :model="menuModel" :headline="headline">
    <neon-card>
      <neon-card-body>
        <p>
          A "page" component, this is defined as a wrapper around the contents (NeonGrid, etc) and footer which provides
          the correct responsive layout accounting for NeonTopNav and NeonSideNav components being used.
        </p>
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./Page.ts"></script>
