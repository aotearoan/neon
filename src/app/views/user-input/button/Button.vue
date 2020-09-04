<template>
  <component-documentation v-if="menuModel" :examples="examples" :model="menuModel" :headline="headline">
    <neon-card>
      <neon-card-body>
        <p>
          <strong>NeonButton</strong> is a wrapper around HTML button elements which provides multiple styles, colors
          and extra functionality. For example, adding an <em>href</em> to a button will render it semantically as a
          link. There are also multiple supported button states, which can be useful for indicating success, error and
          loading states.
        </p>
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./Button.ts"></script>
