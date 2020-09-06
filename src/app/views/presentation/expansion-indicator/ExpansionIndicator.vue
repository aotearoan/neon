<template>
  <component-documentation v-if="menuModel" :examples="examples" :model="menuModel" :headline="headline">
    <neon-card>
      <neon-card-body>
        <p>
          The <strong>NeonExpansionIndicator</strong> is a small animated chevron which is used by other components to
          indicate the expansion of a container. It's unlikely that it would be used on it's own but rather as part of
          creating a more complex expandable component.
        </p>
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./ExpansionIndicator.ts"></script>
