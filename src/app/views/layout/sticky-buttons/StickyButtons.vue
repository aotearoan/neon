<template>
  <component-documentation v-if="menuModel" :headline="headline" :model="menuModel">
    <neon-card>
      <neon-card-body>
        <p>A container for placing buttons that becomes sticky at the bottom of the page on mobile.</p>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Example</h2>
        <p>Adjust the page size to see the buttons become sticky at the <em>mobile-large</em> breakpoint</p>
        <br />
        <neon-sticky-buttons>
          <neon-button label="Button 1" />
          <neon-button label="Button 2" />
        </neon-sticky-buttons>
        <br />
        <editor v-model="template" />
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./StickyButtons.ts"></script>
