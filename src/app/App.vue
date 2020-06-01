<template>
  <div id="app" class="neon-app">
    <neon-top-nav>
      <span class="logo-wrapper">
        <neon-logo></neon-logo>
        <span class="tagline">A VueJs design library</span>
      </span>
      <div>
        <div id="nav">
          <ul v-if="themes.length > 1" class="neon-menu no-style">
            <li v-for="theme in themes" :key="theme">
              <a class="neon-link" @click="switchTheme(theme)">{{ theme }}</a>
            </li>
          </ul>
        </div>
      </div>
      <neon-toggle
        name="dark-mode-toggle"
        color="low-contrast"
        :value="selectedMode"
        :model="modes"
        @input="switchMode"
        :size="isMobile ? 's' : 'm'"
      >
      </neon-toggle>
    </neon-top-nav>
    <neon-page>
      <neon-side-nav>
        <template #sticky>
          <input type="text" v-model="indexFilter" />
        </template>
        <template #scrolling>
          <neon-tree-menu :model="filteredModel"></neon-tree-menu>
        </template>
      </neon-side-nav>
      <neon-grid id="content" :layouts="layouts" class="content">
        <neon-grid-area id="responsive-menu">
          <neon-button icon="menu" label="Menu" color="primary" @click="menuOpen = true" :full-width="true" />
          <neon-drawer :open="menuOpen" @close="menuOpen = false">
            <div class="neon-side-nav__sticky">
              <input type="text" v-model="indexFilter" />
            </div>
            <hr />
            <div class="neon-side-nav__scrolling">
              <neon-tree-menu :model="filteredModel" @click="onMenuClick"></neon-tree-menu>
            </div>
          </neon-drawer>
        </neon-grid-area>
        <neon-grid-area id="section-content">
          <router-view />
        </neon-grid-area>
      </neon-grid>
      <neon-footer> &copy; copyright aotearoan {{ new Date().getFullYear() }} </neon-footer>
    </neon-page>
  </div>
</template>

<style lang="scss">
@import './App';
</style>

<script lang="ts" src="./App.ts"></script>