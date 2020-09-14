<template>
  <component-documentation v-if="menuModel" :examples="examples" :model="menuModel" :headline="headline">
    <neon-card>
      <neon-card-body>
        <p>
          The <strong>NeonFieldGroup</strong> component can be used to combine inputs, button and input indicators into
          a single control.
        </p>
        <p>
          This is useful for providing a richer interface and also giving hints to the users about the input fields they
          need to complete.
        </p>
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./FieldGroup.ts"></script>
