<template>
  <component-documentation v-if="menuModel" :headline="headline" :model="menuModel">
    <neon-card>
      <neon-card-body>
        <p>
          <strong>NeonMenu</strong> is a responsive aware menu that progressively collapses options into the mobile menu
          as the screen size gets smaller. This is a more flexible option than moving directly to a hamburger menu at
          tablet and below. It is a best effort approach to keep displaying the most important menu items for as long as
          possible, giving the user a better experience. Use NeonMenu inside NeonTopNav for primary navigation.
        </p>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Menu sizes - small, medium, large</h2>
        <neon-stack>
          <neon-stack>
            <div class="menu__sample-wrapper">
              <neon-menu :menu="menu" size="s" @click="onClick" />
            </div>
            <div class="menu__sample-wrapper">
              <neon-menu :menu="menu" size="m" @click="onClick" />
            </div>
            <div class="menu__sample-wrapper">
              <neon-menu :menu="menu" size="l" @click="onClick" />
            </div>
          </neon-stack>
          <editor v-model="sizesTemplate" />
        </neon-stack>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Menu colors</h2>
        <neon-stack>
          <neon-stack>
            <neon-menu :menu="menu" color="primary" />
            <neon-menu :menu="menu" color="info" />
          </neon-stack>
          <editor v-model="colorsTemplate" />
        </neon-stack>
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./Menu.ts"></script>
