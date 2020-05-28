<template>
  <div id="app" class="neon-app">
    <neon-top-nav>
      <neon-logo></neon-logo>
      <div>
        <div id="nav">
          <ul v-if="themes.length > 1" class="neon-menu no-style">
            <li v-for="theme in themes" :key="theme">
              <a class="neon-link" @click="switchTheme(theme)">{{ theme }}</a>
            </li>
          </ul>
        </div>
      </div>
      <neon-toggle name="dark-mode-toggle" :value="selectedMode" :model="modes" color="primary" @input="switchMode">
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
      <router-view />
      <neon-footer> &copy; copyright aotearoan {{ new Date().getFullYear() }} </neon-footer>
    </neon-page>
  </div>
</template>

<style lang="scss">
@import './App';
</style>

<script lang="ts" src="./App.ts"></script>
