<template>
  <div v-if="!simplePage" id="app" class="neon-app neon-app--standard-page">
    <neon-page v-if="!simplePage">
      <template #top-nav>
        <neon-top-nav>
          <span class="logo-wrapper">
            <neon-button
              icon="menu"
              color="primary"
              button-style="outline"
              :size="isMobile ? 's' : 'm'"
              @click="menuOpen = true"
            />
            <neon-drawer :open="menuOpen" @close="menuOpen = false" :full-width="true" class="app-side-nav">
              <div class="neon-side-nav__sticky">
                <neon-input type="text" v-model="indexFilter" placeholder="Filter" />
              </div>
              <div class="neon-side-nav__scrolling">
                <neon-expansion-panel
                  v-for="section in filteredModel"
                  :label="section.group"
                  :key="section.group"
                  v-model="section.expanded"
                  class="menu-expansion-panel"
                >
                  <neon-tree-menu :model="section.children" :expand-all="expandAll" @click="onSideNavMenuClick" />
                </neon-expansion-panel>
              </div>
            </neon-drawer>
            <neon-link href="/" class="homepage-link">
              <neon-logo></neon-logo>
            </neon-link>
            <span class="tagline neon-color-text-brand">A VueJs Design Library for Web Applications</span>
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
              color="high-contrast"
              button-style="text"
              :outline="false"
              :size="isMobile ? 's' : 'l'"
            />
            <neon-button
              name="dark-mode-toggle"
              color="high-contrast"
              icon="contrast"
              button-style="text"
              :outline="false"
              @click="switchMode()"
              :size="isMobile ? 's' : 'l'"
            />
          </span>
        </neon-top-nav>
      </template>
      <template #content>
        <neon-grid id="content" :layouts="layouts" class="content">
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
      <template #side-nav>
        <neon-side-nav class="app-side-nav" :full-width="true">
          <template #sticky>
            <neon-input type="text" v-model="indexFilter" placeholder="Filter..." />
          </template>
          <template #scrolling>
            <neon-expansion-panel
              v-for="section in filteredModel"
              :label="section.group"
              :key="section.group"
              v-model="section.expanded"
              class="menu-expansion-panel"
            >
              <neon-tree-menu :model="section.children" :expand-all="expandAll" @click="onSideNavMenuClick" />
            </neon-expansion-panel>
          </template>
        </neon-side-nav>
      </template>
    </neon-page>
    <neon-alert />
  </div>
  <div v-else id="app" class="neon-app neon-app--simple-page">
    <header class="simple-page-header">
      <neon-link @click="switchMode()">
        <neon-icon class="dark-mode-toggle" name="contrast" />
      </neon-link>
    </header>
    <neon-page>
      <template #content>
        <neon-grid id="content" :layouts="layouts" class="content">
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
