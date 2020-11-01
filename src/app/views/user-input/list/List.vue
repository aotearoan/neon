<template>
  <component-documentation v-if="menuModel" :examples="examples" :model="menuModel" :headline="headline">
    <neon-card>
      <neon-card-body>
        <p>
          The <strong>NeonList</strong> component renders a list of removable items. This can be used as an alternative
          to removable chips where a vertical list is more appropriate.
        </p>
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./List.ts"></script>
