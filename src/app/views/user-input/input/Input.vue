<template>
  <component-documentation v-if="menuModel" :examples="examples" :model="menuModel">
    <p>
      The <span class="neon-monospaced">NeonInput</span> component covers the basic input types:
      <span class="neon-monospaced">email, tel, text & url</span> as well as
      <span class="neon-monospaced">textarea</span>. There are custom components defined for the other input types.
    </p>
  </component-documentation>
</template>

<script lang="ts" src="./Input.ts"></script>
