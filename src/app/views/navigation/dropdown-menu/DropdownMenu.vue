<template>
  <component-documentation v-if="menuModel" :examples="examples" :model="menuModel" :headline="headline">
    <neon-card>
      <neon-card-body>
        <p>
          The <strong>NeonDropdownMenu</strong> is designed to display a list of clickable options which can either
          trigger a callback or open a URL.
        </p>
        <p>
          Use <strong>NeonDropdownMenu</strong> to display options to the user behind a dropdown button. This is useful
          when there is limited space, or the actions are secondary.
        </p>
        <p>
          <strong>Note:</strong> As well as the options described below, pass through attributes supported by
          <neon-link href="/presentation/dropdown">NeonDropdown</neon-link> to change the style of the dropdown button.
        </p>
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./DropdownMenu.ts"></script>
