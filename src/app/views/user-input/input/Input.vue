<template>
  <component-documentation v-if="menuModel" :examples="examples" :model="menuModel" :headline="headline">
    <h2 class="neon-h3">Description</h2>
    <p>
      The <strong>NeonInput</strong> component covers the basic input types: <strong>email</strong>,
      <strong>tel</strong>, <strong>text</strong> & <strong>url</strong> as well as <strong>textarea</strong>. There are
      custom components defined for the other input types.
    </p>
  </component-documentation>
</template>

<script lang="ts" src="./Input.ts"></script>
