<template>
  <component-documentation v-if="menuModel" :examples="examples" :model="menuModel" :headline="headline">
    <neon-card>
      <neon-card-body>
        <p>
          A Switch or Checkbox component used to indicate an on/off state. This is equivalent to a checkbox. The switch
          supports both <em>Switch</em> and <em>Checkbox</em> styles which can be used in different scenarios.
        </p>
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./SwitchExample.ts"></script>
