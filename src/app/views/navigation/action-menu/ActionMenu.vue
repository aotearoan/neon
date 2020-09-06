<template>
  <component-documentation v-if="menuModel" :examples="examples" :model="menuModel" :headline="headline">
    <neon-card>
      <neon-card-body>
        <p>
          <strong>NeonActionMenu</strong> is designed for use in <strong>NeonSideNav</strong>. It provides a list of
          menu items which effectively act as tabs, allowing the interface to switch without necessarily updating the
          URL.
        </p>
        <p>
          Use these in the same way you would use tabs - to break uo the presentation of information to the user when
          there is too much information to display at once.
        </p>
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./ActionMenu.ts"></script>
