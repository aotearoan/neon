<template>
  <component-documentation v-if="menuModel" :examples="examples" :model="menuModel" :headline="headline">
    <neon-card>
      <neon-card-body>
        <p>
          <strong>NeonChip</strong> is a clickable or removable chip which can be used as a tag or to indicate selected
          values in filters and other more complex inputs (e.g. search / multiselect). Clicking the chip results in a
          callback and in the case it is removable, also removal of the chip. Chips are designed to fit inside inputs
          for creating more complex input components.
        </p>
        <p>
          Chips are navigable via tab (tabindex). When focussed, use space, return or enter to click on clickable tabs
          and, in the case of removable tabs, use backspace and delete to remove a tab. Escape will blur a focussed tab.
        </p>
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./Chip.ts"></script>
