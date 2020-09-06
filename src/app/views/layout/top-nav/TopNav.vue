<template>
  <component-documentation v-if="menuModel" :examples="examples" :model="menuModel" :headline="headline">
    <neon-card>
      <neon-card-body>
        <p>
          Top navigation component. This is a fixed container at the top of the page for displaying the site logo, menus
          , user login and other important actions which need to be visible at all times.
        </p>
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./TopNav.ts"></script>
