<template>
  <component-documentation v-if="menuModel" :examples="examples" :model="menuModel" :headline="headline">
    <neon-card>
      <neon-card-body>
        <p>
          <strong>NeonMenu</strong> is a responsive aware menu that progressively collapses options into the mobile menu
          as the screen size gets smaller. This is a more flexible option than moving directly to a hamburger menu at
          tablet and below. It is a best effort approach to keep displaying the most important menu items for as long as
          possible, giving the user a better experience.
        </p>
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./Menu.ts"></script>
