<template>
  <component-documentation v-if="menuModel" :headline="headline" :model="menuModel">
    <neon-card>
      <neon-card-body>
        <p>
          <strong>NeonMenu</strong> is a responsive aware menu that progressively collapses options into the mobile menu
          as the screen size gets smaller. This is a more flexible option than moving directly to a hamburger menu at
          tablet and below. It is a best effort approach to keep displaying the most important menu items for as long as
          possible, giving the user a better experience.
        </p>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Menu sizes</h2>
        <div class="neon-vertically-spaced">
          <neon-menu :menu="menu" size="s" @click="onClick" />
          <neon-menu :menu="menu" size="m" @click="onClick" />
          <neon-menu :menu="menu" size="l" @click="onClick" />
        </div>
        <editor v-model="sizesTemplate" />
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Menu colors</h2>
        <div class="neon-vertically-spaced">
          <neon-menu :menu="menu" color="primary" />
          <neon-menu :menu="menu" color="info" />
        </div>
        <editor v-model="colorsTemplate" />
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./Menu.ts"></script>
