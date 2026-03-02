<template>
  <component-documentation v-if="menuModel" :headline="headline" :model="menuModel" class="page-container">
    <neon-card>
      <neon-card-body>
        <p>A component for rendering a page section including a title, content and an hr.</p>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Example</h2>
        <neon-page-section title="Page section title">
          <p>Page section content</p>
        </neon-page-section>
        <editor v-model="template" />
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./PageSection.ts"></script>
