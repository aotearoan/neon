<template>
  <component-documentation
    v-if="menuModel"
    :examples="examples"
    :model="menuModel"
    :headline="headline"
    class="footer-examples"
  >
    <neon-card>
      <neon-card-body>
        <p>
          The page footer component. Place directly inside the <strong>NeonPage</strong> component to have it rendered
          at the bottom of the page even when the content is shorter than the page.
        </p>
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./Footer.ts"></script>
