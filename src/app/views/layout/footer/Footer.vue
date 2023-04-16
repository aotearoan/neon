<template>
  <component-documentation v-if="menuModel" :headline="headline" :model="menuModel" class="footer-examples">
    <neon-card>
      <neon-card-body>
        <p>
          The page footer component. Place directly inside the <strong>NeonPage</strong> component to have it rendered
          at the bottom of the page even when the content is shorter than the page.
        </p>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Footer example</h2>
        <neon-footer>
          <span>Footer content</span>
        </neon-footer>
        <editor v-model="template" />
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./Footer.ts"></script>
