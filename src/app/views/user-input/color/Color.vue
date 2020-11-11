<template>
  <component-documentation v-if="menuModel" :examples="examples" :model="menuModel" :headline="headline">
    <neon-card>
      <neon-card-body>
        <p>
          <strong>NeonColor</strong> is the equivalent of an HTML &lt;input type="color"&gt;. This component extends the
          native color picker functionality to include a text field where the user can paste or directly edit the
          color's hex value as an alternative to using the native color picker.
        </p>
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./Color.ts"></script>
