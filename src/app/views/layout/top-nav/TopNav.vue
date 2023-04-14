<template>
  <component-documentation v-if="menuModel" :headline="headline" :model="menuModel">
    <neon-card>
      <neon-card-body>
        <p>
          Top navigation component. This is a fixed container at the top of the page for displaying the site logo, menus
          , user login and other important actions which need to be visible at all times.
        </p>
      </neon-card-body>
      <neon-card-header>
        <h2 class="neon-h3">Top Nav example</h2>
      </neon-card-header>
      <neon-card-body :full-width="true">
        <div class="example__output--fixed-content">
          <neon-top-nav>
            <span>Top navigation content</span>
          </neon-top-nav>
        </div>
      </neon-card-body>
      <neon-card-body>
        <editor v-model="template" />
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./TopNav.ts"></script>
