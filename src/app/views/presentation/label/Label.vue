<template>
  <component-documentation v-if="menuModel" :examples="examples" :model="menuModel" :headline="headline">
    <neon-card>
      <neon-card-body>
        <p>
          Use <strong>NeonLabel</strong> to emphasize content in the UI. Labels can be text only, icon only or contain
          both text and icons.
        </p>
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./Label.ts"></script>
