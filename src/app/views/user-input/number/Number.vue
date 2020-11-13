<template>
  <component-documentation v-if="menuModel" :examples="examples" :model="menuModel" :headline="headline">
    <neon-card>
      <neon-card-body>
        <p>
          The <strong>NeonNumber</strong> component is the equivalent of an
          <strong>&lt;input type="number" /&gt;</strong> with -/+ spin buttons. This is intended for simple
          (unformatted) number inputs where there is a step, min and/or max. For all other number inputs it is
          recommended to use <a href="/user-input/input"><strong>NeonInput</strong></a> directly and customize it to
          suit your needs.
        </p>
        <p><strong>NeonNumber</strong> supports all of the properties found on an HTML &lt;input&gt;.</p>
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./Number.ts"></script>
