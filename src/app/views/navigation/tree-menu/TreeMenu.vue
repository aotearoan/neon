<template>
  <component-documentation v-if="menuModel" :headline="headline" :model="menuModel">
    <neon-card>
      <neon-card-body>
        <p>
          Use the <strong>NeonTreeMenu</strong> to display a multi-level tree in the
          <strong>NeonSideNav</strong> component. The top level is the page group, second level the actual pages and the
          third level is the (optional) page fragments.
        </p>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Example</h2>
        <neon-stack>
          <neon-tree-menu :model="model" />
          <editor v-model="template" />
        </neon-stack>
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./TreeMenu.ts"></script>
