<template>
  <component-documentation v-if="menuModel" :headline="headline" :model="menuModel">
    <neon-card>
      <neon-card-body>
        <p>
          The <em>NeonBreadcrumbs</em> component displays an optional list of breadcrumbs with an optional back button.
          This is used in the <em>NeonHeader</em> component to display the current page hierarchy.
        </p>
      </neon-card-body>
      <neon-card-body>
        <neon-stack>
          <h2 class="neon-h3">With both back and breadcrumbs</h2>
          <neon-breadcrumbs :breadcrumbs="breadcrumbs" />
          <editor v-model="exampleAll" language="html" />
          <h2 class="neon-h3">Without link, just text</h2>
          <neon-breadcrumbs :breadcrumbs="breadcrumbsText" />
          <editor v-model="exampleText" language="html" />
          <h2 class="neon-h3">Back button only</h2>
          <neon-breadcrumbs />
          <editor v-model="exampleBack" language="html" />
          <h2 class="neon-h3">Breadcrumbs only</h2>
          <neon-breadcrumbs :back-button="false" :breadcrumbs="breadcrumbs" />
          <editor v-model="exampleBreadcrumbs" language="html" />
          <h2 class="neon-h3">Responsive BackOnly</h2>
          <neon-breadcrumbs :breadcrumbs="breadcrumbs" responsive-style="back-only" />
          <editor v-model="exampleBackOnly" language="html" />
        </neon-stack>
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./Breadcrumbs.ts"></script>
