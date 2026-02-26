<template>
  <component-documentation v-if="menuModel" :headline="headline" :model="menuModel">
    <neon-card>
      <neon-card-body>
        <p>
          <strong>NeonMobileMenu</strong> is a menu designed for mobile navigation. It is designed to be placed at the
          bottom of the screen to maximise mobile usability.
        </p>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Examples</h2>
        <br />
        <neon-stack>
          <neon-stack class="mobile-menu-container">
            <neon-mobile-menu :menu="menu" color="primary" />
            <neon-mobile-menu :menu="menuWithDisabledItem" color="high-contrast" />
          </neon-stack>
          <editor v-model="template" />
        </neon-stack>
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./MobileMenu.ts"></script>
<style lang="scss" src="./MobileMenu.scss"></style>
