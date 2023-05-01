<template>
  <div id="app" class="neon-app neon-app--standard-page">
    <neon-page>
      <template v-if="isTablet" #top-nav>
        <neon-top-nav class="app-top-nav">
          <span class="logo-wrapper top-nav-logo-wrapper">
            <neon-button
              :size="isMobile ? 's' : 'm'"
              :transparent="true"
              aria-label="Open menu"
              button-style="text"
              color="primary"
              icon="menu"
              @click="menuOpen = true"
            />
            <neon-drawer :full-width="true" :open="menuOpen" class="app-side-nav" @close="menuOpen = false">
              <div class="neon-side-nav__sticky">
                <label class="menu-filter" for="menuFilterDrawer">Filter menu</label>
                <neon-input id="menuFilterDrawer" v-model="indexFilter" placeholder="Filter" type="text" />
              </div>
              <div class="neon-side-nav__scrolling">
                <div class="neon-side-nav__scrolling-container">
                  <neon-expansion-panel
                    v-for="section in filteredModel"
                    :key="section.group"
                    v-model="section.expanded"
                    :full-width="true"
                    :label="section.group"
                    class="menu-expansion-panel"
                  >
                    <neon-tree-menu :expand-all="expandAll" :model="section.children" @click="onSideNavMenuClick" />
                  </neon-expansion-panel>
                </div>
              </div>
            </neon-drawer>
            <neon-link aria-label="home" class="homepage-link" href="/" outline-style="none">
              <neon-icon aria-label="Neon logo" class="homepage-logo" color="high-contrast" name="neon-wordmark" />
            </neon-link>
            <span class="tagline neon-color-text-brand">A Vue 3 Design System</span>
          </span>
          <span class="top-nav-actions">
            <neon-button
              :circular="true"
              :size="isMobile ? 's' : 'l'"
              :transparent="true"
              aria-label="View on GitHub"
              button-style="text"
              class="github-link"
              color="high-contrast"
              href="https://github.com/aotearoan/neon"
              icon="github"
            />
            <neon-button
              :circular="true"
              :size="isMobile ? 's' : 'l'"
              :transparent="true"
              aria-label="light/dark toggle"
              button-style="text"
              color="high-contrast"
              icon="contrast"
              name="dark-mode-toggle"
              @click="switchMode()"
            />
          </span>
        </neon-top-nav>
      </template>
      <template #side-nav>
        <neon-side-nav class="app-side-nav">
          <template #sticky>
            <div class="app-header">
              <neon-link aria-label="home" class="homepage-link" href="/" outline-style="none">
                <neon-icon aria-label="Neon logo" class="homepage-logo" color="high-contrast" name="neon-wordmark" />
              </neon-link>
              <span class="side-nav-actions">
                <neon-button
                  :circular="true"
                  :transparent="true"
                  aria-label="View on GitHub"
                  button-style="text"
                  class="github-link"
                  color="high-contrast"
                  href="https://github.com/aotearoan/neon"
                  icon="github"
                />
                <neon-button
                  :circular="true"
                  :transparent="true"
                  aria-label="Light/dark toggle"
                  button-style="text"
                  color="high-contrast"
                  icon="contrast"
                  name="dark-mode-toggle"
                  @click="switchMode()"
                />
              </span>
            </div>
            <span class="tagline neon-color-text-brand">A Vue 3 Design System</span>
            <label class="menu-filter" for="menuFilterSideNav">Filter menu</label>
            <neon-input id="menuFilterSideNav" v-model="indexFilter" placeholder="Filter..." size="m" type="text" />
          </template>
          <template #scrolling>
            <neon-expansion-panel
              v-for="section in filteredModel"
              :key="section.group"
              v-model="section.expanded"
              :full-width="true"
              :label="section.group"
              class="menu-expansion-panel"
              size="l"
            >
              <neon-tree-menu :expand-all="expandAll" :model="section.children" @click="onSideNavMenuClick" />
            </neon-expansion-panel>
          </template>
        </neon-side-nav>
      </template>
      <template #content>
        <neon-grid id="content" :layouts="layouts" class="content">
          <neon-grid-area id="section-content">
            <router-view v-slot="{ Component }">
              <transition mode="out-in" name="neon-fade-transition">
                <component :is="Component" />
              </transition>
            </router-view>
          </neon-grid-area>
        </neon-grid>
        <neon-footer class="app-footer">
          <span>
            {{ versionString !== '0' ? versionString : '' }} &copy; copyright aotearoan
            {{ new Date().getFullYear() }}
          </span>
        </neon-footer>
      </template>
    </neon-page>
    <neon-alert />
  </div>
</template>

<style lang="scss">
@use './App';

.neon-app {
  .app-header {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }
}
</style>

<script lang="ts" src="./App.ts"></script>
