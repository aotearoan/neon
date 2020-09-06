<template>
  <component-documentation v-if="menuModel" :examples="examples" :model="menuModel" :headline="headline">
    <neon-card>
      <neon-card-body>
        <p>
          A CSS grid component for top level layout within a page. This component provides functionality to dynamically
          generate the grid CSS and inject it into the page as well as defining the grid for different responsive
          breakpoints. The defined grid can be updated programmatically which is useful for adding/removing items from
          the grid.
        </p>
        <p>
          NeonGrid provides a slot for a set of NeonGridArea components, defining the contents for the various grid
          areas on the page.
        </p>
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./Grid.ts"></script>
