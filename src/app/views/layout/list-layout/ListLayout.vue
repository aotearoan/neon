<template>
  <component-documentation v-if="menuModel" :headline="headline" :model="menuModel" class="list-layout-page">
    <neon-card>
      <neon-card-body>
        <p>
          A page level layout component for displaying a list with a page header, filter bar, card list, pagination & an
          empty state. Use this component directly inside the NeonPage <em>contents</em> slot.
        </p>
      </neon-card-body>
      <neon-card-header>
        <h2 class="neon-h3">Example</h2>
      </neon-card-header>
      <neon-card-body>
        <neon-inline class="list-layout-page__example-images">
          <img alt="list layout example" src="/images/list-layout.png" />
        </neon-inline>
      </neon-card-body>
      <neon-card-body>
        <editor v-model="templateAll" />
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./ListLayout.ts"></script>
