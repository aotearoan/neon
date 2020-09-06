<template>
  <component-documentation v-if="menuModel" :examples="examples" :model="menuModel" :headline="headline">
    <neon-card>
      <neon-card-body>
        <p>
          A side navigation component. This is displayed at the <em>larger-than-tablet</em> breakpoint and hidden at
          <em>tablet</em> and below. Use this to display menus, navigation or other items related to the main page
          content. A side nave had two slots, one for <em>sticky</em> content which remains visible at all times. The
          other is for <em>scrolling content</em> which is allowed to overflow below the bottom of the page.
        </p>
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./SideNav.ts"></script>
