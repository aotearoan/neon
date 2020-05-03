<template>
  <div id="app" class="neon-app">
    <neon-top-nav>
      <neon-logo></neon-logo>
      <div id="nav">
        <ul v-if="themes.length > 1" class="neon-menu">
          <li v-for="theme in themes" :key="theme">
            <a class="neon-link" @click="switchTheme(theme)">{{ theme }}</a>
          </li>
        </ul>
      </div>
      <div class="neon-toggle">
        <label v-for="mode in modes" :key="mode" :for="`modeToggle_${mode}`">{{ mode }}
          <input :id="`modeToggle_${mode}`" :checked="selectedMode === mode" type="radio" name="mode-toggle" class="neon-link" @click="switchMode(mode)">
        </label>
      </div>
    </neon-top-nav>
    <neon-page>
      <router-view/>
    </neon-page>
    <neon-footer>
      &copy; copyright aotearoan {{ new Date().getFullYear() }}
    </neon-footer>
  </div>
</template>

<style lang="scss">
  @import './App';
</style>

<script lang="ts" src="./App.ts"></script>
