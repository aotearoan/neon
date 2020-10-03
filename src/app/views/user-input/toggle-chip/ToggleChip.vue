<template>
  <component-documentation v-if="menuModel" :examples="examples" :model="menuModel" :headline="headline">
    <neon-card>
      <neon-card-body>
        <p>
          A Toggle chip component used to indicate an on/off state in form inputs. This is equivalent to a checkbox.
          This is a variation of a checkbox/switch which can be used as an on/off button to trigger an action or used in
          a group for filtering.
        </p>
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./ToggleChip.ts"></script>
