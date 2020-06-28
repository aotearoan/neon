<template>
  <div id="app" class="neon-app">
    <neon-page>
      <template #top-nav>
        <neon-top-nav>
          <span class="logo-wrapper">
            <neon-link :href="home" class="homepage-link">
              <neon-logo></neon-logo>
            </neon-link>
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
          <span>
            <neon-button
              class="github-link"
              href="https://github.com/aotearoan/neon"
              icon="github"
              label="GitHub"
              color="primary"
              button-style="text"
              :circular="true"
              :size="isMobile ? 's' : 'm'"
            />
            <neon-toggle
              name="dark-mode-toggle"
              color="low-contrast"
              :value="selectedMode"
              :model="modes"
              @input="switchMode"
              :size="isMobile ? 's' : 'm'"
            >
            </neon-toggle>
          </span>
        </neon-top-nav>
      </template>
      <template #content>
        <neon-side-nav>
          <template #sticky>
            <neon-input type="text" v-model="indexFilter" placeholder="Filter" />
          </template>
          <template #scrolling>
            <neon-tree-menu :model="filteredModel" :expand-all="expandAll" @click="onSideNavMenuClick" />
          </template>
        </neon-side-nav>
        <neon-grid id="content" :layouts="layouts" class="content">
          <neon-grid-area id="responsive-menu">
            <neon-button icon="menu" label="Menu" color="primary" @click="menuOpen = true" :full-width="true" />
            <neon-drawer :open="menuOpen" @close="menuOpen = false">
              <div class="neon-side-nav__sticky">
                <neon-input type="text" v-model="indexFilter" placeholder="Filter" />
              </div>
              <hr />
              <div class="neon-side-nav__scrolling">
                <neon-tree-menu :model="filteredModel" :expand-all="expandAll" @click="onInlineMenuClick" />
              </div>
            </neon-drawer>
          </neon-grid-area>
          <neon-grid-area id="section-content">
            <router-view />
          </neon-grid-area>
        </neon-grid>
        <neon-footer
          >{{ version !== '0' ? `v${version}` : '' }} &copy; copyright aotearoan {{ new Date().getFullYear() }}
        </neon-footer>
      </template>
    </neon-page>
  </div>
</template>

<style lang="scss">
@import './App';
</style>

<script lang="ts" src="./App.ts"></script>
