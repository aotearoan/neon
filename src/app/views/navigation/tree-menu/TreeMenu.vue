<template>
  <component-documentation v-if="menuModel" :examples="examples" :model="menuModel" :headline="headline">
    <neon-card>
      <neon-card-body>
        <p>
          Use the <strong>NeonTreeMenu</strong> to display a multi-level tree in the
          <strong>NeonSideNav</strong> component. The top level is an (optional) expansion panel, the second level is
          the page group, third level the actual pages and the fourth level is (optional) page fragments.
        </p>
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./TreeMenu.ts"></script>
