<template>
  <component-documentation v-if="menuModel" :examples="examples" :model="menuModel">
    <p>
      The <strong>NeonInput</strong> component covers the basic input types: <strong>email, tel, text & url</strong> as
      well as <strong>textarea</strong>. There are custom components defined for the other input types.
    </p>
  </component-documentation>
</template>

<script lang="ts" src="./Input.ts"></script>
