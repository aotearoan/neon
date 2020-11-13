<template>
  <component-documentation v-if="menuModel" :examples="examples" :model="menuModel" :headline="headline">
    <neon-card>
      <neon-card-body>
        <p>
          The <strong>NeonInput</strong> component covers the basic input types: <strong>email</strong>,
          <strong>number</strong> <strong>tel</strong>, <strong>text</strong> & <strong>url</strong> as well as
          <strong>textarea</strong>. There are custom components defined for the other input types.
        </p>
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./Input.ts"></script>
