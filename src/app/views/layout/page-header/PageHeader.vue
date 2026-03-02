<template>
  <component-documentation v-if="menuModel" :headline="headline" :model="menuModel" class="page-container">
    <neon-card>
      <neon-card-body>
        <p>
          A component for rendering a page header with slots for a subtitle and actions and the possibility to render an
          on page note.
        </p>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Example</h2>
        <neon-page-header :note="note" title="Page section title">
          <template #subtitle>
            <span>Page subtitle content 1</span>
            <span>Page subtitle content 2</span>
          </template>
          <template #actions>
            <neon-button button-style="outline" label="Do something" />
          </template>
        </neon-page-header>
        <br />
        <editor v-model="template" />
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./PageHeader.ts"></script>
