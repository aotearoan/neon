<template>
  <component-documentation v-if="menuModel" :examples="examples" :model="menuModel" :headline="headline">
    <neon-note color="warn">
      <span>
        <strong>Note:</strong> There is no table component in Neon. However, Neon does provide styling for tables.
      </span>
    </neon-note>
  </component-documentation>
</template>

<script lang="ts" src="./Table.ts"></script>
