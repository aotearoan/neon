<template>
  <component-documentation v-if="menuModel" :headline="headline" :model="menuModel" class="page-container">
    <neon-card>
      <neon-card-body>
        <p>
          NeonPageContainer is a component for the layout of basic (non-card based) page contents. It is designed to be
          placed directly inside the NeonPage <em>contents</em> slot.
          <br />
          <br />
          Features include support for sticky button placement and hiding the nav bar.
        </p>
      </neon-card-body>
      <neon-card-header>
        <h2 class="neon-h3">Basic page</h2>
        <editor v-model="templateBasic" />
      </neon-card-header>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./PageContainer.ts"></script>
