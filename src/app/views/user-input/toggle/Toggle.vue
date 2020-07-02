<template>
  <component-documentation
    v-if="menuModel"
    :examples="examples"
    :path="menuModel.path"
    :component-name="menuModel.component"
    :component-title="menuModel.name || menuModel.page"
  >
  </component-documentation>
</template>

<script lang="ts" src="./Toggle.ts"></script>
