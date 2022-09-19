<template>
  <component-documentation v-if="menuModel" :headline="headline" :model="menuModel">
    <neon-card>
      <neon-card-body>
        <p>
          An HTML anchor component. This component compensates for the <strong>NeonTopNav</strong> (at all responsive
          breakpoints) which means fragments will scroll to the correct position offset by the top nav. Just place
          NeonAnchor directly inside a positioned element you want to create a fragment for and give it the correct id.
        </p>
        <p>
          E.g. to create an anchor to scroll to the fragment <strong>#functional-palettes</strong> place the following
          <strong>NeonAnchor</strong> component inside the element to scroll to:
        </p>
        <editor v-model="example" :read-only="true" language="html" />
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./Anchor.ts"></script>
