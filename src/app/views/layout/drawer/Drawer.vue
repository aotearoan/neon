<template>
  <component-documentation v-if="menuModel" :examples="examples" :model="menuModel" :headline="headline">
    <neon-card>
      <neon-card-body>
        <p>
          A drawer is a slide out panel for representing data which may be secondary or not fit on the main screen.
          Examples are a responsive navigation menu, more details of a selected item on the page. Drawers can be opened
          from top, bottom, left or right and an overlay covers the screen to focus more attention on the drawer
          contents.
        </p>
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./Drawer.ts"></script>
