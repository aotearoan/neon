<template>
  <div id="app" class="neon-app" :class="{ 'neon-app--simple-page': simplePage }">
    <header v-if="simplePage" class="simple-page-header">
      <neon-toggle
        name="dark-mode-toggle"
        color="primary"
        :value="selectedMode"
        :model="modes"
        @input="switchMode"
        :size="isMobile ? 's' : 'm'"
        class="toggle-dark-mode"
      />
    </header>
    <neon-page>
      <template #top-nav v-if="!simplePage">
        <neon-top-nav>
          <span class="logo-wrapper">
            <neon-link href="/" class="homepage-link">
              <neon-logo></neon-logo>
            </neon-link>
            <span class="tagline">A VueJs design library</span>
          </span>
          <div>
            <div id="nav">
              <ul v-if="themes.length > 1" class="neon-menu no-style">
                <li v-for="theme in themes" :key="theme">
                  <neon-link @click="switchTheme(theme)">{{ theme }}</neon-link>
                </li>
              </ul>
            </div>
          </div>
          <span class="top-nav-actions">
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
              color="neutral"
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
        <neon-side-nav v-if="!simplePage">
          <template #sticky>
            <neon-input type="text" v-model="indexFilter" placeholder="Filter" />
          </template>
          <template #scrolling>
            <neon-tree-menu :model="filteredModel" :expand-all="expandAll" @click="onSideNavMenuClick" />
          </template>
        </neon-side-nav>
        <neon-grid id="content" :layouts="layouts" class="content">
          <neon-grid-area id="responsive-menu" v-if="!simplePage">
            <neon-button icon="menu" label="Menu" color="primary" @click="menuOpen = true" :full-width="true" />
            <neon-drawer :open="menuOpen" @close="menuOpen = false">
              <div class="neon-side-nav__sticky">
                <neon-input type="text" v-model="indexFilter" placeholder="Filter" />
              </div>
              <div class="neon-side-nav__scrolling">
                <neon-tree-menu :model="filteredModel" :expand-all="expandAll" @click="onInlineMenuClick" />
              </div>
            </neon-drawer>
          </neon-grid-area>
          <neon-grid-area id="section-content">
            <transition name="fade" mode="out-in">
              <router-view />
            </transition>
          </neon-grid-area>
        </neon-grid>
        <neon-footer>
          <span
            >{{ version !== '0' ? `v${version}` : '' }} &copy; copyright aotearoan {{ new Date().getFullYear() }}</span
          >
        </neon-footer>
      </template>
    </neon-page>
    <neon-alert />
  </div>
</template>

<style lang="scss">
@import './App';
</style>

<script lang="ts" src="./App.ts"></script>
