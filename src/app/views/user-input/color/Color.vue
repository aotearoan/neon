<template>
  <component-documentation v-if="menuModel" :headline="headline" :model="menuModel" class="color-examples">
    <neon-card>
      <neon-card-body>
        <p>
          <strong>NeonColor</strong> is the equivalent of an HTML &lt;input type="color"&gt;. This component extends the
          native color picker functionality to include a text field where the user can paste or directly edit the
          color's hex value as an alternative to using the native color picker.
        </p>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Color input sizes</h2>
        <neon-stack>
          <neon-stack>
            <neon-color v-model="colorSmall" placeholder="Choose a color" size="s" />
            <neon-color v-model="colorMedium" placeholder="Choose a color" size="m" />
            <neon-color v-model="colorLarge" placeholder="Choose a color" size="l" />
          </neon-stack>
          <editor v-model="colorSizeExamples" />
        </neon-stack>
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./Color.ts"></script>
