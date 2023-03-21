<template>
  <component-documentation v-if="menuModel" :examples="examples" :headline="headline" :model="menuModel">
    <neon-card>
      <neon-card-body>
        <p>
          The <strong>NeonNumber</strong> component is the equivalent of an
          <strong>&lt;input type="number" /&gt;</strong>
          with -/+ spin buttons. In addition, it supports formatting as a percentage or with a provided custom template
          and also pasting of values in the user's locale, e.g. 6,543.12.
        </p>
        <p><strong>NeonNumber</strong> supports all the properties found on an HTML &lt;input&gt;.</p>
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./Number.ts"></script>
