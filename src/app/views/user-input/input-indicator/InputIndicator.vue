<template>
  <component-documentation v-if="menuModel" :examples="examples" :model="menuModel" :headline="headline">
    <neon-card>
      <neon-card-body>
        <p>
          The <strong>NeonInputIndicator</strong> component can be used to display non selectable information with input
          fields. This may be text or an icon denoting what the input is for, i.e. acting as a label. Or it may indicate
          the accepted units e.g. a unit of measure, currency code, % or $.
        </p>
        <p>
          Use <strong>NeonInputIndicator</strong> in combination with <strong>NeonFieldGroup</strong> to combine inputs,
          buttons and input indicators in any order.
        </p>
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./InputIndicator.ts"></script>
