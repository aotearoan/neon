<template>
  <component-documentation v-if="menuModel" :examples="examples" :model="menuModel" :headline="headline">
    <neon-card>
      <neon-card-body>
        <p>
          A toggle component for selecting one value from a range of options. This is equivalent to a radio button
          group. It can be styled as a <em>Toggle</em> or as <em>Radio</em> buttons.
        </p>
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./Toggle.ts"></script>
