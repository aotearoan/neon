<template>
  <component-documentation v-if="menuModel" :examples="examples" :model="menuModel" :headline="headline">
    <h2 class="neon-h3">Description</h2>
    <p>
      A Switch or Checkbox component used to indicate an on/off state. This is equivalent to a checkbox. The switch
      supports both <em>Switch</em> and <em>Checkbox</em> styles which can be used in different scenarios.
    </p>
  </component-documentation>
</template>

<script lang="ts" src="./SwitchExample.ts"></script>
