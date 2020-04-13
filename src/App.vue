<template>
  <div id="app">
    <img src="logo.svg">
    <div id="nav">
      <ul v-if="themes.length > 1" class="neon-menu">
        <li v-for="theme in themes" :key="theme">
          <a class="neon-link" @click="switchTheme(theme)">{{ theme }}</a>
        </li>
      </ul>
      <ul class="neon-menu">
        <li v-for="mode in modes" :key="mode">
          <a class="neon-link" @click="switchMode(mode)">{{ mode }}</a>
        </li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import './App';
</style>

<script lang="ts" src="./App.ts"></script>
