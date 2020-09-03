<template>
  <component-documentation v-if="menuModel" :examples="examples" :model="menuModel" :headline="headline">
    <h2 class="neon-h3">Description</h2>
    <p>
      <strong>NeonNote</strong> is designed to display notes, hints or quotes to the user. Notes are available in all
      colors and they can also be configured with a close button.
    </p>
    <p>By default, <strong>blockquote</strong> HTML elements are styled as notes in the <em>primary</em> color.</p>
  </component-documentation>
</template>

<script lang="ts" src="./Note.ts"></script>
