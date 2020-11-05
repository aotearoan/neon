<template>
  <component-documentation v-if="menuModel" :examples="examples" :model="menuModel" :headline="headline">
    <neon-card>
      <neon-card-body>
        <p>
          <strong>NeonFilterList</strong> is an alternative component to a select where the values are displayed in a
          visible list to the user. This component is particularly useful for presenting filters to the user and also
          provides the option of displaying the item counts with each list item.
        </p>
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./FilterList.ts"></script>
