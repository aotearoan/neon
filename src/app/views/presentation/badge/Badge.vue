<template>
  <component-documentation v-if="menuModel" :examples="examples" :model="menuModel" :headline="headline">
    <neon-card>
      <neon-card-body>
        <p>
          Badges are used to display two initials, an icon or an image. It can be useful as a user's avatar on the
          button of dropdown menus and next to user comments but there are a multitude of uses for badges on a site.
        </p>
        <p>Badges are available in a range of sizes, shapes and colors.</p>
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./Badge.ts"></script>
