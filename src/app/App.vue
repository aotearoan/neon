<template>
  <div id="app" class="neon-app neon-app--standard-page">
    <neon-page>
      <template v-if="theme !== 'smooth' || isTablet" #top-nav>
        <neon-top-nav class="app-top-nav">
          <span class="logo-wrapper top-nav-logo-wrapper">
            <neon-button
              icon="menu"
              color="primary"
              button-style="text"
              aria-label="Open menu"
              :size="isMobile ? 's' : 'm'"
              @click="menuOpen = true"
            />
            <neon-drawer :open="menuOpen" @close="menuOpen = false" :full-width="true" class="app-side-nav">
              <div class="neon-side-nav__sticky">
                <label for="menuFilterDrawer" class="menu-filter">Filter menu</label>
                <neon-input id="menuFilterDrawer" type="text" v-model="indexFilter" placeholder="Filter" />
              </div>
              <div class="neon-side-nav__scrolling">
                <div class="neon-side-nav__scrolling-container">
                  <neon-expansion-panel
                    v-for="section in filteredModel"
                    :label="section.group"
                    :key="section.group"
                    v-model="section.expanded"
                    class="menu-expansion-panel"
                    :full-width="theme === 'smooth'"
                  >
                    <neon-tree-menu :model="section.children" :expand-all="expandAll" @click="onSideNavMenuClick" />
                  </neon-expansion-panel>
                </div>
              </div>
            </neon-drawer>
            <neon-link outline-style="none" href="/" class="homepage-link" aria-label="home">
              <neon-logo color="brand" aria-label="Neon logo"></neon-logo>
            </neon-link>
            <span class="tagline neon-color-text-brand">A VueJs Design System</span>
          </span>
          <span class="top-nav-actions">
            <neon-select
              class="theme-toggle"
              name="themeToggle"
              :size="isMobile ? 's' : 'l'"
              :options="themeModel"
              placeholder="Select theme..."
              :placeholder-as-option="true"
              :value="theme"
              @input="switchTheme"
              dropdown-style="text-button"
              color="high-contrast"
              aria-label="Select theme"
            />
            <neon-button
              class="github-link"
              href="https://github.com/aotearoan/neon"
              icon="github"
              :label="!isMobile ? 'GitHub' : undefined"
              color="high-contrast"
              button-style="text"
              :size="isMobile ? 's' : 'l'"
            />
            <neon-button
              name="dark-mode-toggle"
              color="high-contrast"
              icon="contrast"
              button-style="text"
              aria-label="light/dark toggle"
              @click="switchMode()"
              :size="isMobile ? 's' : 'l'"
            />
          </span>
        </neon-top-nav>
      </template>
      <template #side-nav>
        <neon-side-nav class="app-side-nav" :full-width="theme !== 'smooth'">
          <template #sticky>
            <span class="logo-wrapper side-nav-logo-wrapper">
              <neon-link outline-style="none" href="/" class="homepage-link" aria-label="home">
                <neon-logo aria-label="Neon logo"></neon-logo>
              </neon-link>
              <span class="tagline neon-color-text-brand">A VueJs Design System</span>
            </span>
            <span class="side-nav-actions">
              <neon-select
                class="theme-toggle"
                name="themeToggle"
                :options="themeModel"
                placeholder="Select theme..."
                :placeholder-as-option="true"
                :value="theme"
                @input="switchTheme"
                button-icon="palette"
                aria-label="Select theme"
                size="s"
                :color="selectedMode === 'light' ? 'brand' : 'warn'"
                :alternate-color="selectedMode === 'light' ? 'warn' : 'brand'"
              />
              <neon-button
                class="github-link"
                href="https://github.com/aotearoan/neon"
                icon="github"
                color="high-contrast"
                aria-label="View on GitHub"
                button-style="text"
              />
              <neon-button
                name="dark-mode-toggle"
                color="high-contrast"
                icon="contrast"
                aria-label="Light/dark toggle"
                @click="switchMode()"
                button-style="text"
              />
            </span>
            <label for="menuFilterSideNav" class="menu-filter">Filter menu</label>
            <neon-input
              id="menuFilterSideNav"
              :size="theme === 'smooth' ? 'm' : 'l'"
              type="text"
              v-model="indexFilter"
              placeholder="Filter..."
            />
          </template>
          <template #scrolling>
            <neon-expansion-panel
              v-for="section in filteredModel"
              size="l"
              :label="section.group"
              :key="section.group"
              v-model="section.expanded"
              class="menu-expansion-panel"
              :full-width="theme === 'smooth'"
            >
              <neon-tree-menu :model="section.children" :expand-all="expandAll" @click="onSideNavMenuClick" />
            </neon-expansion-panel>
          </template>
        </neon-side-nav>
      </template>
      <template #content>
        <neon-grid id="content" :layouts="layouts" class="content">
          <neon-grid-area id="section-content">
            <transition name="neon-fade-transition" mode="out-in">
              <router-view />
            </transition>
          </neon-grid-area>
        </neon-grid>
        <neon-footer class="app-footer">
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
